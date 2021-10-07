import styles from './Navbar.module.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = () => {
  
  return (
      <nav className={`${styles.Navbar} ${styles.disable_select}`}>
        <Link className={styles.Navbar_Home_Button}  to="/">
          <p> <FontAwesomeIcon icon={['fas', 'home']} size="sm" />  Home</p>
        </Link>
        <Link className={`${styles.Navbar_Nav_Button} ${styles.Nav1}`} to="/apps">
          <p><FontAwesomeIcon icon={['fas', 'meteor']} size="sm" />  Apps </p>
        </Link>
        <Link className={`${styles.Navbar_Nav_Button} ${styles.Nav2}`} to="/code">
          <p><FontAwesomeIcon icon={['fas', 'code']} size="sm" />  Code</p>
        </Link>
        <Link className={`${styles.Navbar_Nav_Button} ${styles.Nav3}`} to="Blogs">
          <p><FontAwesomeIcon icon={['fas', 'blog']} size="sm" />  Blogs</p>
        </Link>
        <Link className={`${styles.Navbar_Nav_Button} ${styles.Nav4}`} to="Contact">
          <p><FontAwesomeIcon icon={['fas', 'id-card']} size="sm" />  Contact</p>
        </Link>
        <Link className={`${styles.Navbar_Nav_Button} ${styles.Nav5}`} to="About">
          <p><FontAwesomeIcon icon={['fas', 'info']} size="sm" />  About</p>
        </Link>
      </nav>
  )
}

export default Navbar;
