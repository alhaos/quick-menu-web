import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from './CategoryEdit.module.css';

const CategoryEdit = () => {
  const { c } = useLocation();
  console.log(c);

  return (
    <div className={styles.CategoryEdit}>
      <form
        action={() => {
          console.log(c.name);
        }}>
        <h1>Изменить категорию</h1>
        <input type="text" value={c.name} />
        <input type="text" value={c.name} />
      </form>
    </div>
  );
};

export default CategoryEdit;
