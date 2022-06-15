import React, { useState } from 'react';
import ExpenseForm from './Components/ExpenseForm/ExpenseForm';
import Expenses from './Components/Expenses/Expenses';
function App() {
  const [expenses, setExpenses] = useState([]);
  const datas = [
    // {
    //   id: 'e1',
    //   itemName: 'Statue',
    //   amount: 94.12,
    //   date: new Date(2020, 7, 10),
    // },
    // { id: 'e2', 
    //   itemName: 'Laptop', 
    //   amount: 799.49, 
    //   date: new Date(2021, 2, 7) 
    // },
    // {
    //   id: 'e3',
    //   itemName: 'PC',
    //   amount: 294.67,
    //   date: new Date(2021, 2, 2),
    // },
    // {
    //   id: 'e4',
    //   itemName: 'Mouse',
    //   amount: 450,
    //   date: new Date(2021, 5, 1),
    // },
  ];

  useState(() => {
    setExpenses(datas)
  }, [])

  const addExpenseHandler = (expense) => {
    datas.push(expense);
    setExpenses(datas);
  }

  const deleteExpenseHandler = (expense) => {
    const index = datas.map(item => { return item.id }).indexOf(expense.id);
    if (index > -1) {
      datas.splice(index, 1);
    }
    setExpenses(datas);
  }

  return (
    <div>
      <ExpenseForm onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} onSelectedExpense={deleteExpenseHandler} />
    </div>
  );
}

export default App;
