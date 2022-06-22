import React from 'react';

import ContentHeader from './ContentHeader/ContentHeader';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles['header']}>
      <h1>Company</h1>
      <ContentHeader />
    </header>
  );
};

export default Header;
