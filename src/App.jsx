import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './components/index';
import Footer from './components/footer/footer';
import NavBar from './components/navBar/navBar';
import Epson from './pages/epson/epson';
import './App.css';
import Ricoh from './pages/ricoh';
import ItemDetail from './components/navBar/ItemDetail/ItemDetail';

function App() {
  return (
    <BrowserRouter>
    <div className='min-h-screen flex flex-col'>
      <NavBar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path='/ricoh' element={<Ricoh/>}/>
        <Route path="/epson" element={<Epson />} />
        <Route path="/ricoh/detail/:modelCode" element={<ItemDetail/>}/>
      </Routes>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
