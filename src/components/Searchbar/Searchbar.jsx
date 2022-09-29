// ! FILES
import React, { useContext } from 'react';
import styles from './Searchbar.module.css';
import { CocktailContext } from '../../context';

const Searchbar = () => {
  const mainData = useContext(CocktailContext);
  const { searchTerms, setSearchTerms } = mainData;

  return (
    <form className={styles.form__container}>
      <label htmlFor='search' className={styles.form__label}>
        Search cocktails
      </label>
      <input
        type='text'
        name='search'
        id='search'
        value={searchTerms}
        onChange={(e) => setSearchTerms(e.target.value)}
        className={styles.form__input}
      />
    </form>
  );
};

export default Searchbar;
