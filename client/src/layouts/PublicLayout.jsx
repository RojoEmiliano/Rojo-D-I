import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/navBar/navBar';
import Footer from '../components/footer/footer';

export default function PublicLayout() {
  return (
    <div className='min-h-screen relative'>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}
