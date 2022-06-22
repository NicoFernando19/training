import React, { useContext } from 'react';
import ReactDom from "react-dom";
import Header from './Components/Modules/Header/Header';
import Login from './Components/Modules/Login/Login';
import Home from './Components/Modules/Home/Home';
import { AuthContext } from './Store/AuthContext';

function App() {
  const ctx = useContext(AuthContext)
  return (
    <React.Fragment>
      {ReactDom.createPortal(<Header />, 
        document.getElementById('portal-root')
      )}
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main>
    </React.Fragment>
  );
}

export default App;
