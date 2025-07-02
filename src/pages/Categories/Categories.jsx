import React, { useEffect, useState } from 'react';
import styles from './Categories.module.css';
import Header from '../../components/header/header.jsx';
import Category from './Category/Category.jsx';

export const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const resp = await fetch('/backend/api/private/categories', {
          credentials: 'include'
        });
        if (!resp.ok) {
          throw new Error('Ошиба извлечения категорий');
        }
        const data = await resp.json();
        setCategories(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    getCategories();
  }, []);

  return (
    <div>
      <Header />
      <div className={styles.contentBox}>
        <div>Категории {categories.length}:</div>
        {error ? <div className={styles.ErrorMessage}>{error}</div> : ''}
        {loading ? <div className={styles.LoadingMessage}>loading...</div> : ''}
        {categories.map((category) => (
          <Category key={category.id} name={category.name} description={category.description} />
        ))}
        <button className={styles.addButton}>добавить</button>
      </div>
    </div>
  );
};
