import React, { useState, Fragment } from 'react';
import ReactDom from "react-dom";
import Header from './Components/Modules/Header/Header';
import Login from './Components/Modules/Login/Login';
import Home from './Components/Modules/Home/Home';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useState(() => {
    const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');

    if (storedUserLoggedInInformation === '1') {
      setIsLoggedIn(true);
    }
  }, [])

  const loginHandler = (email, password) => {
    localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  return (
    <Fragment>
      {ReactDom.createPortal(<Header isAuthenticated={isLoggedIn} onLogout={logoutHandler} />, 
        document.getElementById('portal-root')
      )}
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </Fragment>
  );
}

export default App;
