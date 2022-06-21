import React, { Fragment, useState } from "react";
import ExpenseForm from "../../ExpenseForm/ExpenseForm";
import Expenses from "../../Expenses/Expenses"

const Home = (props) => {
    const [expenses, setExpenses] = useState([]);
    const [oldExpense, setoldExpense] = useState([]);

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
          let newData = expenses.filter(item => (item.itemName.toLowerCase() === search.toLowerCase() 
          || item.amount.toLowerCase() === search.toLowerCase()))
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

export default Home;