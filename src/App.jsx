import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute.jsx';
import { AuthContext } from './Contexts/AuthContext.jsx';

import Home from './Frames/Home/Home';
import ClientPage from './Frames/Client/Client';
import Login from './Frames/Login/Login.jsx';
import NotFound from './Frames/NotFound';
import MenuManager from './Frames/MenuManager/MenuManager.jsx';
import Categories from './Frames/Categories/Categories.jsx';
import { Items } from './Frames/Items/Items.jsx';
import AddCategory from './Frames/AddCategory/AddCategory.jsx';
import CategoryEdit from './Frames/CategoryEdit/CategoryEdit.jsx';

import { useNavigate } from 'react-router-dom';

import './App.css';
import Logoff from './Frames/Logoff/Logoff.jsx';
import CustomerFrame from './Frames/CustomerFrame/CustomerFrame.jsx';

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
    <div className={'App'}>
      <AuthContext.Provider value={{ isAuth, login, logoff }}>
        <Routes>
          <Route index element={<CustomerFrame />} />
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
    </div>
  );
}

export default App;
