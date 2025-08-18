import React, { useEffect, useState } from 'react';
import styles from './Categories.module.css';
import Header from '../../Components/header/header.jsx';
import Category from './Category/Category.jsx';
import { Link } from 'react-router-dom';
import SquareButton from '../../Components/SquareButton/SquareButton.jsx';

export default function Categories() {
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
        <div>Категории {categories ? categories.length : ''}:</div>
        {error ? <div className={styles.ErrorMessage}>{error}</div> : ''}
        {loading ? (
          <div className={styles.LoadingMessage}>loading...</div>
        ) : (
          categories &&
          categories.map((category) => (
            <div key={category.id} className={styles.Category}>
              <Category category={category} setCategories={setCategories} setError={setError} />
              <SquareButton
                callBack={() => {
                  console.log('edit category clicked');
                }}
              />
            </div>
          ))
        )}
        <Link to={'/add-category'}>
          <button className={styles.addButton}>добавить</button>
        </Link>
      </div>
    </div>
  );
}
