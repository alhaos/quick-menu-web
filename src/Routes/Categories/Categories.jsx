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
    fetch('/backend/api/private/categories', {
      credentials: 'include'
    })
      .then((response) => {
        console.log(response.ok);
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
    setLoading(false);
  }, []);

  return (
    <div>
      <Header />
      <div className={styles.contentBox}>
        {error && <div className={styles.ErrorMessage}>{error}</div>}
        <div>Категории {categories ? categories.length : ''}:</div>
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
