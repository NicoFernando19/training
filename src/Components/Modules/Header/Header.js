import React from 'react';

import ContentHeader from './ContentHeader/ContentHeader';
import styles from './Header.module.css';

const Header = (props) => {
  return (
    <header className={styles['header']}>
      <h1>Company</h1>
      <ContentHeader isLoggedIn={props.isAuthenticated} onLogout={props.onLogout} />
    </header>
  );
};

export default Header;
