import React from 'react';
import { Link } from 'react-router-dom';
import Example from './Example';

function Home(params) {
  return (
    <>
      <h1>Home page</h1>
      <Link to="/example">Example</Link>
    </>
  );
}

export default Home;
