// ! COMPONENTS
import Searchbar from '../../components/Searchbar/Searchbar';
import CocktailList from '../../components/CocktailList/CocktailList';
// ! FILES
import React from 'react';
import styles from './Home.module.css';

const Home = () => {
  return (
    <main className={styles.main__HomeContainer}>
      <Searchbar />
      <CocktailList />
    </main>
  );
};

export default Home;
