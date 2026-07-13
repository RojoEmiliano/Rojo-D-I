import React, { useEffect, useState } from 'react';
import { Table, Form, Button, Alert, Spinner, Pagination } from 'react-bootstrap';
import { useAuth } from '../../context/AuthContext';
import { getRicohLista, refreshRicohLista } from '../../api/adminRicohLista';

const PAGE_SIZE = 50;
// Precio de lista +21% IVA +40% margen = precio final de venta
const PRECIO_MULTIPLICADOR = 1.21 * 1.4;

export default function AdminRicohLista() {
  const { token } = useAuth();
  const [query, setQuery] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    const controller = new AbortController();
    const debounce = setTimeout(() => {
      setLoading(true);
      getRicohLista(query, token)
        .then(res => {
          if (!controller.signal.aborted) {
            setResult(res);
            setPage(1);
          }
        })
        .catch(err => {
          if (!controller.signal.aborted) setError(err.message);
        })
        .finally(() => {
          if (!controller.signal.aborted) setLoading(false);
        });
    }, 400);

    return () => {
      clearTimeout(debounce);
      controller.abort();
    };
  }, [query]);

  const handleRefresh = async () => {
    setRefreshing(true);
    setError('');
    try {
      await refreshRicohLista(token);
      const res = await getRicohLista(query, token);
      setResult(res);
      setPage(1);
    } catch (err) {
      setError(err.message);
    } finally {
      setRefreshing(false);
    }
  };

  const totalPages = result ? Math.max(1, Math.ceil(result.total / PAGE_SIZE)) : 1;
  const pageItems = result ? result.items.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE) : [];

  return (
    <div>
      <p className='text-gray-500 mb-4'>
        Lista de precios del distribuidor oficial Ricoh (equipos, accesorios e insumos) — solo
        visible para el administrador.
      </p>

      {error && <Alert variant='danger'>{error}</Alert>}

      <div className='flex gap-3 items-center mb-4 flex-wrap'>
        <Form.Control
          type='text'
          placeholder='Buscar por código o nombre...'
          value={query}
          onChange={e => setQuery(e.target.value)}
          style={{ maxWidth: '360px' }}
        />
        <Button variant='outline-secondary' onClick={handleRefresh} disabled={refreshing}>
          {refreshing ? 'Actualizando...' : 'Actualizar catálogo'}
        </Button>
        {result?.loadedAt && (
          <span className='text-xs text-gray-500'>
            Archivo actualizado: {new Date(result.loadedAt).toLocaleString('es-AR')}
          </span>
        )}
      </div>

      {loading ? (
        <Spinner animation='border' />
      ) : (
        <>
          <p className='text-sm text-gray-500 mb-2'>
            {result?.total ?? 0} resultados — página {page} de {totalPages}
          </p>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Código</th>
                <th>Nombre</th>
                <th>Precio de lista</th>
                <th>Precio final (+IVA +40%)</th>
              </tr>
            </thead>
            <tbody>
              {pageItems.map(item => (
                <tr key={item.codigo}>
                  <td>{item.codigo}</td>
                  <td>{item.nombre}</td>
                  <td>
                    U$S {item.precio.toFixed(2)}{' '}
                    <span className='text-gray-500 text-xs'>+IVA {item.iva}</span>
                  </td>
                  <td className='font-semibold'>
                    U$S {(item.precio * PRECIO_MULTIPLICADOR).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          {totalPages > 1 && (
            <Pagination>
              <Pagination.First onClick={() => setPage(1)} disabled={page === 1} />
              <Pagination.Prev
                onClick={() => setPage(p => Math.max(1, p - 1))}
                disabled={page === 1}
              />
              <Pagination.Item active>{page}</Pagination.Item>
              <Pagination.Next
                onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
              />
              <Pagination.Last onClick={() => setPage(totalPages)} disabled={page === totalPages} />
            </Pagination>
          )}
        </>
      )}
    </div>
  );
}
