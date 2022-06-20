import React, { useState, Fragment } from 'react';
import ExpenseForm from './Components/ExpenseForm/ExpenseForm';
import Expenses from './Components/Expenses/Expenses';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [oldExpense, setoldExpense] = useState([]);
  useState(() => {

  }, [])

  const addExpenseHandler = (expense) => {
    setExpenses((prevState) => {
      return [...prevState, expense]
    });
    setoldExpense((prevState) => {
      return [...prevState, expense]
    });
  }

  const deleteExpenseHandler = (expense) => {
    const index = expenses.map(item => { return item.id }).indexOf(expense.id);
    if (index > -1) {
      expenses.splice(index, 1);
    }
    setExpenses((prevState) => {
      return [...prevState]
    });
    setoldExpense(expenses);
  }

  const filterHandler = (search) => {
    if (search !== "") {
      let newData = expenses.filter(item => (item.itemName === search || item.amount === search))
      setExpenses(newData)
    }else {
      setExpenses(oldExpense)
    }
  }

  return (
    <Fragment>
      <ExpenseForm onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} onSelectedExpense={deleteExpenseHandler} onFilterHandler={filterHandler} />
    </Fragment>
  );
}

export default App;
