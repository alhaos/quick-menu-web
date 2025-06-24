import React from 'react';
import './App.css';
import Home from './pages/Home/Home';
import Example from './pages/Example';
import ClientPage from './pages/Client/Client';
import NotFound from './pages/NotFound';
import UnderConstruction from './pages/UnderConstruction/UnderConstruction';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="under-construction" element={<UnderConstruction />} />
          <Route path="example" element={<Example />} />
          <Route path="client" element={<ClientPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
