import React, { useState, useEffect, useReducer, useContext } from 'react';
import { AuthContext } from '../../../Store/AuthContext';

import Card from '../../Card/Card';
import Button from '../Button/Button';
import styles from './Login.module.css';

const emailReducer = (state, action) => {
  if (action.type === "EMAIL_INPUT") {
    return { value: action.value, isValid: action.value.includes("@") }
  }
  if (action.type === "EMAIL_INPUT_BLUR") {
    return { value: state.value, isValid: state.value.includes("@") }
  }
  return { value: '', isValid: false }
}

const passwordReducer = (state, action) => {
  if (action.type === "PASSWORD_INPUT") {
    return { value: action.value, isValid: action.value.trim().length > 6 }
  }
  if (action.type === "PASSWORD_INPUT_BLUR") {
    return { value: state.value, isValid: state.value.trim().length > 6 }
  }
  return { value: '', isValid: false }
}


const Login = () => {
  const ctx = useContext(AuthContext)
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmailState] = useReducer(emailReducer, {value: '', isValid: null})
  const [passwordState, dispatchPasswordState] = useReducer(passwordReducer, {value: '', isValid: null})

  const { isValid: emailValidity } = emailState;
  const { isValid: passwordValidity } = passwordState;

  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(
        emailValidity && passwordValidity
      );
    }, 1000);

    return () => {
      clearTimeout(identifier);
    };
  }, [emailValidity, passwordValidity]);

  const emailChangeHandler = (event) => {
    // setEnteredEmail(event.target.value);
    dispatchEmailState({ type: "EMAIL_INPUT", value: event.target.value })

    setFormIsValid(
      event.target.value.includes('@') && passwordState.isValid
    );
  };

  const passwordChangeHandler = (event) => {
    // setEnteredPassword(event.target.value);
    dispatchPasswordState({ type: "PASSWORD_INPUT" , value: event.target.value })

    setFormIsValid(
      emailState.value.includes('@') && event.target.value.trim().length > 6
    );
  };

  const validateEmailHandler = () => {
    // setEmailIsValid(enteredEmail.includes('@'));
    dispatchEmailState({type: "EMAIL_INPUT_BLUR"})
  };

  const validatePasswordHandler = () => {
    dispatchPasswordState({ type: "PASSWORD_INPUT_BLUR" })
  };

  const submitHandler = (event) => {
    event.preventDefault();
    ctx.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={styles.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${styles.control} ${
            emailState.isValid === false ? styles.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${styles.control} ${
            passwordState.value === false ? styles.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={styles.actions}>
          <Button type="submit" className={styles.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;