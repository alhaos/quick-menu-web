import React, { useEffect, useState } from 'react';
import styles from './Items.module.css';
import Header from '../../Components/header/header.jsx';
import Item from '../../Components/item/Item.jsx';

export function Items() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    fetch('/backend/api/private/items')
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response.status;
      })
      .then((responseData) => {
        console.log(responseData);
        setData(responseData);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  return (
    <div className={styles.Items}>
      <Header />
      {isLoading && data ? (
        <div>Loading</div>
      ) : (
        <div className={styles.List}>
          {data.map((datum) => (
            <Item
              key={datum.id}
              name={datum.name}
              imageFilename={'/dish.jpg'}
              description={datum.description}
            />
          ))}
        </div>
      )}
    </div>
  );
}
