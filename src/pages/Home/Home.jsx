import React from 'react';
import { Link } from 'react-router-dom';
import Example from '../Example';
import Header from '../../components/header/header';

function Home(params) {
  return (
    <>
      <Header></Header>
      <Link to="/example">Example</Link>
    </>
  );
}

export default Home;
