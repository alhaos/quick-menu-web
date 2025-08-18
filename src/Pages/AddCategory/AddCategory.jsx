import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './AddCategory.module.css';
import Header from '../../Components/header/header.jsx';

const AddCategory = () => {
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [error, setError] = React.useState('');
  const [adding, setAdding] = React.useState(false);
  const navigate = useNavigate();

  const onFormSubmit = async () => {
    try {
      setAdding(true);
      const resp = await fetch('/backend/api/private/categories', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: name, description: description })
      });

      if (!resp.ok) {
        throw new Error('Failed to add category: ' + resp.statusText);
      }
    } catch (error) {
      console.log(error);
      setError(error);
      return;
    } finally {
      setAdding(false);
    }

    navigate('/categories');
  };

  return (
    <div className={styles.AddCategory}>
      <Header />
      <h3>Дабавить категоию</h3>
      {error && <span>{error}</span>}
      <form action={onFormSubmit}>
        <div className="formGroup">
          <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
        </div>
        <div className="formGroup">
          <input type="text" onChange={(e) => setDescription(e.target.value)} value={description} />
        </div>
        <button type="submit" className={styles.addCategoryButton}>
          {adding ? 'Обработка' : 'Добавить'}
        </button>
      </form>
    </div>
  );
};

export default AddCategory;
