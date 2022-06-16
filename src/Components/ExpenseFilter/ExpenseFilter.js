import React from "react";
import styles from './ExpenseFilter.module.css'
import Wrapper from "../Helper/Wrapper";

const ExpenseFilter = (props) => {
    const filterHandler = (event) => {
        let searchText = event.target.value;
        props.onSearchText(searchText)
    }
    return (
        <Wrapper>
            <div>
                <div className={styles.form_control}>
                    <div className={styles.form_control}>
                        <label className={`${styles.form_control} ${styles.label}`}>Search</label>
                        <input
                            className={`${styles.form_control} ${styles.input}`}
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