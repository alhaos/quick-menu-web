import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute.jsx';
import { AuthContext } from './Contexts/AuthContext.jsx';

import Home from './Routes/Home/Home';
import ClientPage from './Routes/Client/Client';
import Login from './Routes/Login/Login.jsx';
import NotFound from './Routes/NotFound';
import MenuManager from './Routes/MenuManager/MenuManager.jsx';
import Categories from './Routes/Categories/Categories.jsx';
import { Items } from './Routes/Items/Items.jsx';
import AddCategory from './Routes/AddCategory/AddCategory.jsx';
import CategoryEdit from './Routes/CategoryEdit/CategoryEdit.jsx';

import { useNavigate } from 'react-router-dom';

import './App.css';
import Logoff from './Routes/Logoff/Logoff.jsx';

function App() {
  const navigate = useNavigate();
  const [isAuth, setIsAuth] = useState();

  const login = () => {
    setIsAuth(true);
  };

  const logoff = () => {
    setIsAuth(false);
    navigate('/');
  };

  return (
    <AuthContext.Provider value={{ isAuth, login, logoff }}>
      <Routes>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="login" element={<Login setIsAuth={setIsAuth} />} />
        <Route path="client" element={<ClientPage />} />
        <Route path={'logoff'} element={<Logoff />} />
        <Route element={<ProtectedRoute />}>
          <Route path="menu-manager" element={<MenuManager />} />
          <Route path="categories" element={<Categories />} />
          <Route path="add-category" element={<AddCategory />} />
          <Route path="edit-category/:id" element={<CategoryEdit />} />
          <Route path="items" element={<Items />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AuthContext.Provider>
  );
}

export default App;
