import React from 'react';
import styles from './AddCategory.module.css';
import Header from '../../components/header/header.jsx';

const Categories = () => {
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');

  const onFormSubmit = () => {};

  return (
    <div className={styles.Categories}>
      <Header />
      <h1>Дабавить категоию</h1>
      <form action={onFormSubmit}>
        <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
        <input type="text" onChange={(e) => setDescription(e.target.value)} value={description} />
      </form>
    </div>
  );
};

export default Categories;
