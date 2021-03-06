import React from 'react';

import ExpenseItem from './ExpenseItem';
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter';
import Card from '../Card/Card';
import './Expenses.css';

const Expenses = (props) => {
    const items = props.items;
    const getExpense = (expense) => {
        props.onSelectedExpense(expense)
    }
    const getSearchText = (search) => {
        props.onFilterHandler(search)
    }
    return (
        <Card className="expenses">
            <ExpenseFilter onSearchText={getSearchText} />
            {items.length === 0  && ( 
                <div className="no-data">
                    No Item Added!
                </div>
            )}
            {items.length > 0 && (
                    items.map(item => (
                        <div key={item.id}>
                            <ExpenseItem
                                itemName={item.itemName}
                                amount={item.amount}
                                date={item.date}
                                id={item.id}
                                onGetData={getExpense}
                            />
                        </div>
                    ))
                )
            }
            
        </Card>
    );
}

export default Expenses;