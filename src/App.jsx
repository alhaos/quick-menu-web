import React from 'react';
import Header from './components/header/header';
import Item from './components/item/item';
import Main from './components/main/main';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Main>
        <Item caption={'Шаурма оригинальная'} price={'110р.'} />
        <Item caption={'Шаурма остарая'} price={'10h'} />
        <Item caption={'Шаурма веганская'} price={'10h'} />
        <Item caption={'Бургер'} price={'10h'} />
      </Main>
    </>
  );
}

export default App;
