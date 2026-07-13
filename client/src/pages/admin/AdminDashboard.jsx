import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Spinner } from 'react-bootstrap';
import { fetchProducts } from '../../api/products';

export default function AdminDashboard() {
  const [counts, setCounts] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    fetchProducts(undefined, { signal: controller.signal })
      .then(products => {
        setCounts({
          total: products.length,
          epson: products.filter(p => p.brand === 'epson').length,
          ricoh: products.filter(p => p.brand === 'ricoh').length,
        });
      })
      .catch(err => {
        if (err.name !== 'AbortError') throw err;
      });
    return () => controller.abort();
  }, []);

  return (
    <div>
      {!counts ? (
        <Spinner animation='border' />
      ) : (
        <div className='flex gap-4 flex-wrap mb-6'>
          <div className='bg-adminBg text-white rounded-sm px-6 py-4 min-w-[160px] border-l-4 border-adminAccent'>
            <div className='text-3xl font-bold'>{counts.total}</div>
            <div className='text-xs uppercase tracking-wide text-gray-400 mt-1'>
              Productos totales
            </div>
          </div>
          <div className='bg-white rounded-sm px-6 py-4 min-w-[160px] shadow-sm border border-gray-200'>
            <div className='text-3xl font-bold text-epson'>{counts.epson}</div>
            <div className='text-xs uppercase tracking-wide text-gray-500 mt-1'>Epson</div>
          </div>
          <div className='bg-white rounded-sm px-6 py-4 min-w-[160px] shadow-sm border border-gray-200'>
            <div className='text-3xl font-bold text-ricoh'>{counts.ricoh}</div>
            <div className='text-xs uppercase tracking-wide text-gray-500 mt-1'>Ricoh</div>
          </div>
        </div>
      )}
      <div className='flex gap-2'>
        <Link to='/admin/products'>
          <Button variant='secondary'>Ver catálogo</Button>
        </Link>
        <Link to='/admin/products/new'>
          <Button variant='primary'>Nuevo producto</Button>
        </Link>
      </div>
    </div>
  );
}
