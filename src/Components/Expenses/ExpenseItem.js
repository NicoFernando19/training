import React from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../Card/Card';
import styles from './ExpenseItem.module.css';
import { CounterUseContext } from '../../Context/CounterContext/CounterUseContext';

const ExpenseItem = (props) => {
  const {CountHandler} = CounterUseContext()
  const expenseData = () => {
    const expense = {
      id: props.id,
      itemName: props.itemName,
      amount: props.amount,
      date: props.date
    }
    props.onGetData(expense)
    CountHandler(0);
  }
  return (
    <Card className={styles.expense_item}>
      <ExpenseDate date={props.date} />
      <div className={`${styles.expense_item} ${styles.expense_item__description}`}>
        <h2>{props.itemName}</h2>
        <div className={`${styles.expense_item} ${styles.expense_item__price}`}>${props.amount}</div>
        <div style={{'padding-left':'0.5rem'}}>
          <button className={`${styles.btn_expense} ${styles.btn_danger}`} onClick={expenseData}>Delete</button>
          <button className={`${styles.btn_expense} ${styles.btn_success}`} onClick={() => CountHandler(1)}>Add</button>
        </div>
      </div>
    </Card>
  );
}

export default ExpenseItem;