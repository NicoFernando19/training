import React from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../Card/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  const expenseData = () => {
    const expense = {
      id: props.id,
      itemName: props.itemName,
      amount: props.amount,
      date: props.date
    }
    props.onGetData(expense)
  }
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.itemName}</h2>
        <div className='expense-item__price'>${props.amount}</div>
        <button onClick={expenseData}>Delete</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;