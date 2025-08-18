import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute.jsx';
import { AuthContext } from './Contexts/AuthContext.jsx';

import Home from './Pages/Home/Home';
import ClientPage from './Pages/Client/Client';
import Login from './Pages/Login/Login.jsx';
import NotFound from './Pages/NotFound';
import MenuManager from './Pages/MenuManager/MenuManager.jsx';
import Categories from './Pages/Categories/Categories.jsx';
import Items from './Pages/Items/Items.jsx';
import AddCategory from './Pages/AddCategory/AddCategory.jsx';
import CategoryEdit from './Pages/CategoryEdit/CategoryEdit.jsx';

import './App.css';

function App() {
  const [isAuth, setIsAuth] = useState();

  const login = () => {
    setIsAuth(true);
  };

  const logout = () => {
    setIsAuth(false);
  };

  return (
    <AuthContext.Provider value={{ isAuth, login, logout }}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="login" element={<Login setIsAuth={setIsAuth} />} />
          <Route path="client" element={<ClientPage />} />
          <Route path="*" element={<NotFound />} />
          <Route element={<ProtectedRoute />}>
            <Route path="menu-manager" element={<MenuManager />} />
            <Route path="categories" element={<Categories />} />
            <Route path="add-category" element={<AddCategory />} />
            <Route path="edit-category/:id" element={<CategoryEdit />} />
            <Route path="items" element={<Items />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
