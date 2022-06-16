import React from "react";
import './ExpenseFilter.css'
import Wrapper from "../Helper/Wrapper";

const ExpenseFilter = (props) => {
    const filterHandler = (event) => {
        let searchText = event.target.value;
        props.onSearchText(searchText)
    }
    return (
        <Wrapper>
            <div>
                <div className='new-expense__controls'>
                    <div className='new-expense__control'>
                    <label>Search</label>
                    <input
                        type='text'
                        onChange={filterHandler}
                    />
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}

export default ExpenseFilter;