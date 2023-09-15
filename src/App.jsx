import React from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';

import './App.css';

import Index from './pages/index';
import Footer from './components/footer/footer';
import NavBar from './components/NavBar/NavBar';
import Epson from './pages/epson/epson';
import Ricoh from './pages/Ricoh/Ricoh';
import ItemDetail from './pages/ItemDetail/ItemDetail';
import About from './pages/About/About';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Contact from './pages/Contact/Contact';
import { Services } from './pages/Services/Services';
import Redirect from './components/Redirect/Redirect';

function App() {
  return (
    <HashRouter>
      <div className='min-h-screen relative'>
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
          <Route
            path='/services'
            element={
              <ScrollToTop>
                <Services />
              </ScrollToTop>
            }
          />
          <Route
            path='/contact'
            element={
              <ScrollToTop>
                <Contact />
              </ScrollToTop>
            }
          />
          <Route path='*' element={<Redirect />} />
        </Routes>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
