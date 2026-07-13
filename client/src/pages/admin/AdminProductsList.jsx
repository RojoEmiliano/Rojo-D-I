import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Table, Button, Modal, Spinner, Alert } from 'react-bootstrap';
import { fetchProducts } from '../../api/products';
import { deleteProduct } from '../../api/adminProducts';
import { useAuth } from '../../context/AuthContext';

export default function AdminProductsList() {
  const { token } = useAuth();
  const [products, setProducts] = useState(null);
  const [error, setError] = useState('');
  const [toDelete, setToDelete] = useState(null);
  const [deleting, setDeleting] = useState(false);

  const load = () => {
    fetchProducts().then(setProducts);
  };

  useEffect(load, []);

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

  if (!products) return <Spinner animation='border' />;

  return (
    <div>
      <div className='flex justify-end items-center mb-4'>
        <Link to='/admin/products/new'>
          <Button variant='primary'>Nuevo producto</Button>
        </Link>
      </div>
      {error && <Alert variant='danger'>{error}</Alert>}
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Imagen</th>
            <th>Nombre</th>
            <th>Marca</th>
            <th>Modelo</th>
            <th>Código</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.map(p => (
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
              <td>
                <div className='flex gap-2'>
                  <Link to={`/admin/products/${p.modelCode}/edit`}>
                    <Button size='sm' variant='secondary'>
                      Editar
                    </Button>
                  </Link>
                  <Button size='sm' variant='danger' onClick={() => setToDelete(p)}>
                    Eliminar
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={!!toDelete} onHide={() => setToDelete(null)}>
        <Modal.Header closeButton>
          <Modal.Title>Eliminar producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          ¿Estás seguro de eliminar &quot;{toDelete?.name}&quot;? Esta acción no se puede deshacer.
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
