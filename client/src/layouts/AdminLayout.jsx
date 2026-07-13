import React, { useState } from 'react';
import { Outlet, Link, useLocation, useParams } from 'react-router-dom';
import { FaBars, FaTimes, FaSignOutAlt } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';
import useMediaQuery from '../hooks/useMediaQuery';
import AdminSidebar from './AdminSidebar';

function useBreadcrumb(pathname, modelCode) {
  if (pathname === '/admin') {
    return { title: 'Dashboard', crumbs: [{ label: 'Dashboard' }] };
  }
  if (pathname === '/admin/products') {
    return {
      title: 'Productos',
      crumbs: [{ label: 'Dashboard', to: '/admin' }, { label: 'Productos' }],
    };
  }
  if (pathname === '/admin/products/new') {
    return {
      title: 'Nuevo producto',
      crumbs: [
        { label: 'Dashboard', to: '/admin' },
        { label: 'Productos', to: '/admin/products' },
        { label: 'Nuevo producto' },
      ],
    };
  }
  if (pathname.endsWith('/edit')) {
    return {
      title: `Editar ${modelCode ?? ''}`,
      crumbs: [
        { label: 'Dashboard', to: '/admin' },
        { label: 'Productos', to: '/admin/products' },
        { label: `Editar ${modelCode ?? ''}` },
      ],
    };
  }
  if (pathname === '/admin/precios') {
    return {
      title: 'Lista Najha',
      crumbs: [{ label: 'Dashboard', to: '/admin' }, { label: 'Lista Najha' }],
    };
  }
  if (pathname === '/admin/precios-ricoh') {
    return {
      title: 'Lista Ricoh Distribuidor',
      crumbs: [{ label: 'Dashboard', to: '/admin' }, { label: 'Lista Ricoh Distribuidor' }],
    };
  }
  return { title: '', crumbs: [] };
}

export default function AdminLayout() {
  const { logout } = useAuth();
  const location = useLocation();
  const { modelCode } = useParams();
  const isMobile = useMediaQuery(1024);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const { title, crumbs } = useBreadcrumb(location.pathname, modelCode);
  const showSidebar = !isMobile || sidebarOpen;

  return (
    <div className='min-h-screen bg-gray-100 font-[Asap_Condensed]'>
      {/* Topbar (mobile only) */}
      {isMobile && (
        <header className='flex items-center justify-between px-4 py-3 bg-adminBg text-white sticky top-0 z-40'>
          <button onClick={() => setSidebarOpen(true)} aria-label='Abrir menú'>
            <FaBars size={20} />
          </button>
          <span className='font-semibold uppercase tracking-wide'>ROJO D-I Admin</span>
          <button onClick={logout} aria-label='Cerrar sesión' className='text-adminAccent'>
            <FaSignOutAlt size={18} />
          </button>
        </header>
      )}

      {/* Sidebar */}
      {showSidebar && (
        <>
          {isMobile && (
            <div
              className='fixed inset-0 bg-black/60 z-40'
              onClick={() => setSidebarOpen(false)}
            />
          )}
          <aside
            className={`bg-adminBg text-white flex flex-col py-6 z-50 ${
              isMobile ? 'fixed inset-y-0 left-0 w-64' : 'fixed inset-y-0 left-0 w-64'
            }`}
          >
            <div className='flex items-center justify-between px-4 mb-8'>
              <Link to='/admin' className='no-underline'>
                <div className='flex items-baseline gap-1'>
                  <span className='text-xl font-bold text-adminAccent leading-none'>ROJO</span>
                  <span className='text-xl font-bold text-white leading-none'>D-I</span>
                </div>
                <div className='text-[10px] uppercase tracking-[0.2em] text-gray-500 mt-1'>
                  Panel de administración
                </div>
              </Link>
              {isMobile && (
                <button onClick={() => setSidebarOpen(false)} aria-label='Cerrar menú'>
                  <FaTimes size={18} className='text-gray-400' />
                </button>
              )}
            </div>

            <AdminSidebar onNavigate={() => setSidebarOpen(false)} />

            <div className='mt-auto px-4 pt-6'>
              <button
                onClick={logout}
                className='flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors border-0 bg-transparent px-0'
              >
                <FaSignOutAlt size={14} />
                Cerrar sesión
              </button>
            </div>
          </aside>
        </>
      )}

      {/* Content */}
      <main className={isMobile ? 'p-4' : 'ml-64 p-8'}>
        {crumbs.length > 0 && (
          <div className='mb-1 text-xs text-gray-500 flex items-center gap-1 flex-wrap'>
            {crumbs.map((c, i) => (
              <span key={i} className='flex items-center gap-1'>
                {i > 0 && <span className='text-gray-400'>/</span>}
                {c.to ? (
                  <Link to={c.to} className='hover:text-adminAccent no-underline text-gray-500'>
                    {c.label}
                  </Link>
                ) : (
                  <span className='text-gray-700'>{c.label}</span>
                )}
              </span>
            ))}
          </div>
        )}
        {title && <h1 className='text-2xl font-bold mb-6 text-gray-900'>{title}</h1>}
        <Outlet />
      </main>
    </div>
  );
}
