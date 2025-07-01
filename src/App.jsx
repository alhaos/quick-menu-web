import React from 'react';
import './App.css';
import Home from './pages/Home/Home';
import Example from './pages/Example';
import ClientPage from './pages/Client/Client';
import NotFound from './pages/NotFound';
import UnderConstruction from './pages/UnderConstruction/UnderConstruction';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './pages/Login/Login.jsx';
import { MenuManager } from './pages/MenuManager/MenuManager.jsx';
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute.jsx';
import { Categories } from './pages/Categories/Categories.jsx';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="under-construction" element={<UnderConstruction />} />
          <Route path="example" element={<Example />} />
          <Route path="client" element={<ClientPage />} />
          <Route
            path="menu-manager"
            element={
              <ProtectedRoute>
                <MenuManager />
              </ProtectedRoute>
            }
          />
          <Route
            path="categories"
            element={
              <ProtectedRoute>
                <Categories />
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
