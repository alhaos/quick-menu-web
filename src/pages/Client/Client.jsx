import React from 'react';
import styles from './Client.module.css';
import { useSearchParams } from 'react-router-dom';

function ClientPage(props) {
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');
  return (
    <>
      <h1>id is:{id}</h1>
    </>
  );
}

export default ClientPage;
