// ! FILES
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar__container}>
      <li>
        <Link to='/' className={styles.navbar__link}>
          Home
        </Link>
      </li>
      <li>
        <Link to='/about' className={styles.navbar__link}>
          About
        </Link>
      </li>
    </nav>
  );
};

export default Navbar;
