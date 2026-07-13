import React from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';

import './App.css';

import { AuthProvider } from './context/AuthContext';
import RequireAuth from './components/RequireAuth/RequireAuth';
import PublicLayout from './layouts/PublicLayout';
import AdminLayout from './layouts/AdminLayout';

import Index from './pages/index';
import Epson from './pages/epson/epson';
import Ricoh from './pages/Ricoh/Ricoh';
import ItemDetail from './pages/ItemDetail/ItemDetail';
import About from './pages/About/About';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Contact from './pages/Contact/Contact';
import { Services } from './pages/Services/Services';
import Redirect from './components/Redirect/Redirect';

import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminProductsList from './pages/admin/AdminProductsList';
import AdminProductForm from './pages/admin/AdminProductForm';
import AdminPriceList from './pages/admin/AdminPriceList';
import AdminRicohLista from './pages/admin/AdminRicohLista';

function App() {
  return (
    <HashRouter>
      <AuthProvider>
        <Routes>
          <Route element={<PublicLayout />}>
            <Route path='/' element={<ScrollToTop><Index /></ScrollToTop>} />
            <Route path='/ricoh' element={<ScrollToTop><Ricoh /></ScrollToTop>} />
            <Route path='/epson' element={<ScrollToTop><Epson /></ScrollToTop>} />
            <Route path='/ricoh/detail/:modelCode' element={<ScrollToTop><ItemDetail /></ScrollToTop>} />
            <Route path='/epson/detail/:modelCode' element={<ScrollToTop><ItemDetail /></ScrollToTop>} />
            <Route path='/about' element={<ScrollToTop><About /></ScrollToTop>} />
            <Route path='/services' element={<ScrollToTop><Services /></ScrollToTop>} />
            <Route path='/contact' element={<ScrollToTop><Contact /></ScrollToTop>} />
          </Route>

          <Route path='/admin/login' element={<AdminLogin />} />

          <Route path='/admin' element={<RequireAuth><AdminLayout /></RequireAuth>}>
            <Route index element={<AdminDashboard />} />
            <Route path='products' element={<AdminProductsList />} />
            <Route path='products/new' element={<AdminProductForm />} />
            <Route path='products/:modelCode/edit' element={<AdminProductForm />} />
            <Route path='precios' element={<AdminPriceList />} />
            <Route path='precios-ricoh' element={<AdminRicohLista />} />
          </Route>

          <Route path='*' element={<Redirect />} />
        </Routes>
      </AuthProvider>
    </HashRouter>
  );
}

export default App;
