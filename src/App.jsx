import React from 'react';
import PostList from './components/PostsList';
import MainHeader from './components/MainHeader';
import './App.css';

function App() {
  return (
    <>
      <MainHeader />
      <main>
        <PostList />
      </main>
    </>
  );
}

export default App;
