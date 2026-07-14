import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Table, Button, Modal, Spinner, Alert, Form, Badge } from 'react-bootstrap';
import { listAdminProducts, deleteProduct, restoreProduct } from '../../api/adminProducts';
import { useAuth } from '../../context/AuthContext';

export default function AdminProductsList() {
  const { token } = useAuth();
  const [status, setStatus] = useState('active');
  const [products, setProducts] = useState(null);
  const [error, setError] = useState('');
  const [toDelete, setToDelete] = useState(null);
  const [deleting, setDeleting] = useState(false);
  const [restoringCode, setRestoringCode] = useState(null);

  const load = () => {
    listAdminProducts(status, token).then(setProducts);
  };

  useEffect(load, [status]);

  const confirmDelete = async () => {
    setDeleting(true);
    try {
      await deleteProduct(toDelete.modelCode, token);
      setToDelete(null);
      load();
    } catch (err) {
      setError(err.message);
    } finally {
      setDeleting(false);
    }
  };

  const handleRestore = async modelCode => {
    setRestoringCode(modelCode);
    try {
      await restoreProduct(modelCode, token);
      load();
    } catch (err) {
      setError(err.message);
    } finally {
      setRestoringCode(null);
    }
  };

  return (
    <div>
      <div className='flex justify-between items-center mb-4'>
        <Form.Select
          value={status}
          onChange={e => setStatus(e.target.value)}
          style={{ maxWidth: '220px' }}
        >
          <option value='active'>Activos</option>
          <option value='inactive'>Inactivos</option>
          <option value='all'>Todos</option>
        </Form.Select>
        <Link to='/admin/products/new'>
          <Button variant='primary'>Nuevo producto</Button>
        </Link>
      </div>
      {error && <Alert variant='danger'>{error}</Alert>}
      {!products ? (
        <Spinner animation='border' />
      ) : (
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Imagen</th>
              <th>Nombre</th>
              <th>Marca</th>
              <th>Modelo</th>
              <th>Código</th>
              {status === 'all' && <th>Estado</th>}
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {products.map(p => {
              const inactive = !!p.deletedAt;
              return (
                <tr key={p.modelCode}>
                  <td>
                    {p.imgs[0] && (
                      <img src={p.imgs[0]} alt={p.name} style={{ width: '60px', height: 'auto' }} />
                    )}
                  </td>
                  <td>{p.name}</td>
                  <td>{p.brand}</td>
                  <td>{p.model}</td>
                  <td>{p.modelCode}</td>
                  {status === 'all' && (
                    <td>
                      <Badge bg={inactive ? 'secondary' : 'success'}>
                        {inactive ? 'Inactivo' : 'Activo'}
                      </Badge>
                    </td>
                  )}
                  <td>
                    <div className='flex gap-2'>
                      {inactive ? (
                        <Button
                          size='sm'
                          variant='success'
                          onClick={() => handleRestore(p.modelCode)}
                          disabled={restoringCode === p.modelCode}
                        >
                          {restoringCode === p.modelCode ? 'Restaurando...' : 'Restaurar'}
                        </Button>
                      ) : (
                        <>
                          <Link to={`/admin/products/${p.modelCode}/edit`}>
                            <Button size='sm' variant='secondary'>
                              Editar
                            </Button>
                          </Link>
                          <Button size='sm' variant='danger' onClick={() => setToDelete(p)}>
                            Eliminar
                          </Button>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      )}

      <Modal show={!!toDelete} onHide={() => setToDelete(null)}>
        <Modal.Header closeButton>
          <Modal.Title>Eliminar producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          ¿Eliminar &quot;{toDelete?.name}&quot;? Va a dejar de aparecer en el catálogo, pero podés
          restaurarlo después desde el filtro &quot;Inactivos&quot;.
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={() => setToDelete(null)}>
            Cancelar
          </Button>
          <Button variant='danger' onClick={confirmDelete} disabled={deleting}>
            {deleting ? 'Eliminando...' : 'Eliminar'}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
