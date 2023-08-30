import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Index from './components/index';
import Footer from './components/footer/footer';
import NavBar from './components/NavBar/NavBar';
import Epson from './pages/epson/epson';
import './App.css';
import Ricoh from './pages/ricoh';
import ItemDetail from './pages/ItemDetail/ItemDetail';
import About from './pages/About/About';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <div className='min-h-screen flex flex-col'>
        <NavBar />
        <Routes>
          <Route
            path='/'
            element={
              <ScrollToTop>
                <Index />
              </ScrollToTop>
            }
          />
          <Route
            path='/ricoh'
            element={
              <ScrollToTop>
                <Ricoh />
              </ScrollToTop>
            }
          />
          <Route
            path='/epson'
            element={
              <ScrollToTop>
                <Epson />
              </ScrollToTop>
            }
          />
          <Route
            path='/ricoh/detail/:modelCode'
            element={
              <ScrollToTop>
                <ItemDetail />
              </ScrollToTop>
            }
          />
          <Route
            path='/epson/detail/:modelCode'
            element={
              <ScrollToTop>
                <ItemDetail />
              </ScrollToTop>
            }
          />
          <Route
            path='/about'
            element={
              <ScrollToTop>
                <About />
              </ScrollToTop>
            }
          />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
