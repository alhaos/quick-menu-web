import React from 'react';
import styles from './Client.module.css';
import CustomError from '../../components/CustomError/CustomError';
import { useSearchParams } from 'react-router-dom';

function ClientPage(props) {
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');

  if (id === null) {
    return (
      <>
        <CustomError msg="No id found" />
      </>
    );
  }

  return (
    <>
      <h1>id is:{id}</h1>
    </>
  );
}

export default ClientPage;
