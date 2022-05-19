import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home/Home';
import Repositories from './pages/Repositories/Repositories';

export default function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/repositories' element={<Repositories />} />
      </Routes>
    </BrowserRouter>
  );
}