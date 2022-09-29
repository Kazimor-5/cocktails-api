// ! COMPONENTS
import Cocktail from '../Cocktail/Cocktail';
// ! FILES
import React, { useContext } from 'react';
import { CocktailContext } from '../../context';
import styles from './CocktailList.module.css';

const CocktailList = () => {
  const mainData = useContext(CocktailContext);
  const { loading, cocktails } = mainData;

  if (cocktails.length === 0) {
    return (
      <section className={styles.article__errorContainer}>
        <p className={styles.error__text}>No matching cocktails. 😐</p>
      </section>
    );
  }

  if (loading) {
    return <section className='loading'></section>;
  }

  return (
    <ul className={styles.list__cocktailList}>
      {cocktails.map((cocktail, i) => {
        return <Cocktail key={i} {...cocktail} />;
      })}
    </ul>
  );
};

export default CocktailList;
