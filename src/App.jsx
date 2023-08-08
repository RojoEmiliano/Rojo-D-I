import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './components/index';
import Footer from './components/footer/footer';
import NavBar from './components/navBar/navBar';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
