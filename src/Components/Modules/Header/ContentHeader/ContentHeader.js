import React from 'react';
import { AuthContext } from '../../../../Store/AuthContext';
import styles from './ContentHeader.module.css';

const ContentHeader = () => {
  return (
    <AuthContext.Consumer>
      {(ctx) => {
        return (
          <nav className={styles.nav}>
            <ul>
              {ctx.isLoggedIn && (
                <li>
                  <a href="/">Home</a>
                </li>
              )}
              {ctx.isLoggedIn && (
                <li>
                  <button onClick={ctx.onLogout}>Logout</button>
                </li>
              )}
            </ul>
          </nav>
        )
      }}
    </AuthContext.Consumer>
  );
};

export default ContentHeader;