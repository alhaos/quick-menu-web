import React, { useState } from 'react';
import styles from './Category.module.css';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import SquareButton from '../../../Components/SquareButton/SquareButton.jsx';

const Category = ({ category, setCategories, setError }) => {
  const navigate = useNavigate();
  const [setDeleting] = useState(false);

  const EditButtonOnClickHandler = (category) => {
    navigate('/backend/api/private/edit-category', {
      data: {
        c: category
      }
    });
  };

  const categoryRemoveHandler = async () => {
    try {
      setDeleting(true);
      const resp = await fetch(`/backend/api/private/categories/${category.id}`, {
        method: 'DELETE'
      });
      if (!resp.ok) {
        throw new Error(`${category.id} not found`);
      }

      const respList = await fetch(`/backend/api/private/categories`, {});
      if (!respList.ok) {
        throw new Error(respList.statusText);
      }

      const categories = await respList.json();
      console.log(categories);
      setCategories(categories);
    } catch (error) {
      setError(error);
    } finally {
      setDeleting(false);
    }
  };

  return (
    <div className={styles.Category}>
      <div className={styles.fieldGroup}>
        <div className={styles.name}>{category.name}</div>
        <div className={styles.description}>{category.description}</div>
      </div>
    </div>
  );
};

export default Category;

Category.propTypes = {
  category: PropTypes.object.isRequired,
  setCategories: PropTypes.func.isRequired
};
