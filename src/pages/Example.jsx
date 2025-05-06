import React from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '../components/header/header';
import Item from '../components/item/item';
import Main from '../components/main/main';

function Example(params) {
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get('id');

  return (
    <>
      <Header id={id} />
      <Main>
        <Item caption={'Шаурма оригинальная'} price={'110р.'} />
        <Item caption={'Шаурма остарая'} price={'10h'} />
        <Item caption={'Шаурма веганская'} price={'10h'} />
        <Item caption={'Бургер'} price={'10h'} />
      </Main>
    </>
  );
}

export default Example;
