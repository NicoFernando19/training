import React, { useState, useRef } from 'react';

import './Form.css';
import Card from '../Card/Card';
import Portal from '../Portal/Portal';

const ExpenseForm = (props) => {
  const nameInputRef = useRef();
  const amountInputRef = useRef();
  const dateInputRef = useRef();

  const [form, setForm] = useState({
    itemName: '',
    amount: '',
    date: '',
  });

  const itemNameChangeHandler = (event) => {
    setForm((prevState) => {
        return { 
            ...prevState, 
            itemName: event.target.value 
        };
    });
  };

  const amountChangeHandler = (event) => {
    setForm((prevState) => {
        return { 
            ...prevState, 
            amount: event.target.value 
        };
    });
  };

  const dateChangeHandler = (event) => {
    setForm((prevState) => {
        return { 
            ...prevState, 
            date: event.target.value 
        };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    
    if (nameInputRef.current.value === "" || amountInputRef.current.value === "" || dateInputRef.current.value === "") {
      return alert("Field Cannot be Empty!")
    }
    //ref
    const name = nameInputRef.current.value;
    const amount = amountInputRef.current.value;
    const date = dateInputRef.current.value;
    // const expenseData = {
    //   itemName: form.itemName,
    //   amount: form.amount,
    //   date: new Date(form.date),
    //   id: Math.floor(Math.random() * (1000 - 1) + 1)
    // };

    // using ref
    const expenseData = {
      itemName: name,
      amount: amount,
      date: new Date(date),
      id: Math.floor(Math.random() * (1000 - 1) + 1)
    };

    props.onAddExpense(expenseData);
    // setForm({
    //     itemName: '',
    //     amount: '',
    //     date: '',
    // });
    nameInputRef.current.value = '';
    amountInputRef.current.value = '';
    dateInputRef.current.value = '';
  };

  return (
    <>
      <Portal />
      <Card className="new-expense">
          <form onSubmit={submitHandler}>
          <div className='new-expense__controls'>
              <div className='new-expense__control'>
              <label>Item Name</label>
              <input
                  type='text'
                  // value={form.itemName}
                  // onChange={itemNameChangeHandler}
                  ref={nameInputRef}
              />
              </div>
              <div className='new-expense__control'>
              <label>Amount</label>
              <input
                  type='number'
                  min='1'
                  step='0.5'
                  // value={form.amount}
                  // onChange={amountChangeHandler}
                  ref={amountInputRef}
              />
              </div>
              <div className='new-expense__control'>
              <label>Date</label>
              <input
                  type='date'
                  min='2019-01-01'
                  max='2022-12-31'
                  // value={form.date}
                  // onChange={dateChangeHandler}
                  ref={dateInputRef}
              />
              </div>
          </div>
          <div className='new-expense__actions'>
              <button type='submit'>Add Expense</button>
          </div>
          </form>
      </Card>
    </>
  );
};

export default ExpenseForm;