// ! FILES
import React from 'react';
import styles from './Cocktail.module.css';
import { Link } from 'react-router-dom';

const Cocktail = ({ id, name, img, glass, info }) => {
  return (
    <li className={styles.item__container}>
      <section className={styles.item__info}>
        <article className={styles.item__imageContainer}>
          <img src={img} alt={name} className='img' />
        </article>
        <h4 className={`${styles.item__title} title`}>{name}</h4>
        <article className={styles.item__content}>
          <p className={styles.content__info}>
            Informations: <span>{info}</span>
          </p>
          <p className={styles.content__glass}>
            Glass: <span>{glass}</span>
          </p>
        </article>
        <Link to={`/cocktail/${id}`} className={styles.item__details}>
          Details
        </Link>
      </section>
    </li>
  );
};

export default Cocktail;
