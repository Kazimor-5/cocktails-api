// ! FILES
import React, { useCallback, useState, useEffect } from 'react';
import styles from './SingleCocktail.module.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const SingleCocktail = () => {
  const [singleCocktail, setSingleCocktail] = useState([]);
  const { id } = useParams();

  const getSingleCocktail = useCallback(async () => {
    const response = await axios.get(`${url}${id}`);
    const {
      data: { drinks },
    } = response;
    setSingleCocktail(drinks);
  }, [id]);

  useEffect(() => {
    getSingleCocktail(id);
  }, [getSingleCocktail, id]);

  return (
    <section className={styles.section__cocktailContainer}>
      {singleCocktail.map((cocktail) => {
        const {
          idDrink: id,
          strDrink: drinkName,
          strCategory: category,
        } = cocktail;
        const {
          strAlcoholic: info,
          strGlass: glass,
          strInstructions: instructions,
        } = cocktail;
        const {
          strDrinkThumb: img,
          strIngredient1: ingr1,
          strIngredient2: ingr2,
        } = cocktail;
        const {
          strIngredient3: ingr3,
          strIngredient4: ingr4,
          strIngredient5: ingr5,
        } = cocktail;
        const {
          strIngredient6: ingr6,
          strIngredient7: ingr7,
          strIngredient8: ingr8,
        } = cocktail;
        const {
          strIngredient9: ingr9,
          strIngredient10: ingr10,
          strIngredient11: ingr11,
        } = cocktail;
        const {
          strIngredient12: ingr12,
          strIngredient13: ingr13,
          strIngredient14: ingr14,
          strIngredient15: ingr15,
        } = cocktail;

        return (
          <article className={styles.article__cocktail} key={id}>
            <div className={styles.cocktail__imgContainer}>
              <img
                src={img}
                alt={drinkName}
                className={`${styles.cocktail__img} img`}
              />
            </div>

            <div className={styles.cocktail__content}>
              <h2 className={`${styles.cocktail__name} title`}>{drinkName}</h2>
              <h3>Informations:</h3>
              <p className={styles.cocktail__category}>{category}</p>
              <p className={styles.cocktail__infos}>{info}</p>
              <p className={styles.cocktail__glass}>{glass}</p>
              <h3>Instructions:</h3>
              <p className={styles.cocktail__instructions}>{instructions}</p>
            </div>

            <div className={styles.cocktail__allIngredients}>
              <h3>Ingredients:</h3>
              <p className={styles.cocktails__ingredient}>{ingr1}</p>
              <p className={styles.cocktails__ingredient}>{ingr2}</p>
              <p className={styles.cocktails__ingredient}>{ingr3}</p>
              <p className={styles.cocktails__ingredient}>{ingr4}</p>
              <p className={styles.cocktails__ingredient}>{ingr5}</p>
              <p className={styles.cocktails__ingredient}>{ingr6}</p>
              <p className={styles.cocktails__ingredient}>{ingr7}</p>
              <p className={styles.cocktails__ingredient}>{ingr8}</p>
              <p className={styles.cocktails__ingredient}>{ingr9}</p>
              <p className={styles.cocktails__ingredient}>{ingr10}</p>
              <p className={styles.cocktails__ingredient}>{ingr11}</p>
              <p className={styles.cocktails__ingredient}>{ingr12}</p>
              <p className={styles.cocktails__ingredient}>{ingr13}</p>
              <p className={styles.cocktails__ingredient}>{ingr14}</p>
              <p className={styles.cocktails__ingredient}>{ingr15}</p>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default SingleCocktail;
