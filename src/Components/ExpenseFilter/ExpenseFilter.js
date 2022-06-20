import React from "react";
import styles from './ExpenseFilter.module.css'
import Wrapper from "../Helper/Wrapper";
import { CounterUseContext } from "../../Context/CounterContext/CounterUseContext";

const ExpenseFilter = (props) => {
    const {count} = CounterUseContext();
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
                    <div className={styles.form_control} style={{ 'justifyContent': 'end', width: '47%' }}>
                        <label className={`${styles.form_control} ${styles.label}`}>Cart:</label>
                        <span>
                            <p style={{ margin: '0px', color:'white' }}>
                                {count}
                            </p>
                        </span>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}

export default ExpenseFilter;