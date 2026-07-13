import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaChartLine, FaPrint, FaTags, FaFileInvoiceDollar } from 'react-icons/fa';

const NAV_ITEMS = [
  { to: '/admin', label: 'Dashboard', icon: FaChartLine, end: true },
  { to: '/admin/products', label: 'Productos', icon: FaPrint },
  { to: '/admin/precios', label: 'Lista Najha', icon: FaTags },
  { to: '/admin/precios-ricoh', label: 'Lista Ricoh Distribuidor', icon: FaFileInvoiceDollar },
];

export default function AdminSidebar({ onNavigate }) {
  return (
    <nav className='flex flex-col gap-1 px-3'>
      {NAV_ITEMS.map(({ to, label, icon: Icon, end }) => (
        <NavLink
          key={to}
          to={to}
          end={end}
          onClick={onNavigate}
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2.5 rounded-sm text-sm uppercase tracking-wide font-medium transition-colors border-l-4 ${
              isActive
                ? 'bg-[rgba(191,41,47,0.16)] border-adminAccent text-white'
                : 'border-transparent text-gray-400 hover:text-white hover:bg-white/5'
            }`
          }
        >
          <Icon className='shrink-0' size={16} />
          {label}
        </NavLink>
      ))}
      <div className='mt-6 px-3 text-xs uppercase tracking-wide text-gray-600'>
        Próximamente
      </div>
    </nav>
  );
}
