import React from 'react';
import './App.css';
import { Home } from './pages/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ClientPage from './pages/Client/Client';
import NotFound from './pages/NotFound';
import Login from './pages/Login/Login.jsx';
import MenuManager from './pages/MenuManager/MenuManager.jsx';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute.jsx';
import Categories from './pages/Categories/Categories.jsx';
import Items from './pages/Items/Items.jsx';
import AddCategory from './pages/AddCategory/AddCategory.jsx';
import CategoryEdit from './pages/CategoryEdit/CategoryEdit.jsx';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="login" element={<Login />} />
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
          <Route
            path="add-category"
            element={
              <ProtectedRoute>
                <AddCategory />
              </ProtectedRoute>
            }
          />
          <Route
            path="edit-category"
            element={
              <ProtectedRoute>
                <CategoryEdit />
              </ProtectedRoute>
            }
          />
          <Route
            path="items"
            element={
              <ProtectedRoute>
                <Items />
              </ProtectedRoute>
            }></Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
