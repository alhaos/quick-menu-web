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
        <Item caption={'Hello world'} price={'10h'} />
        <Item caption={'Hello world'} price={'10h'} />
        <Item caption={'Hello world'} price={'10h'} />
      </Main>
    </>
  );
}

export default App;
