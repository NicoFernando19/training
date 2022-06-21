import React, { useEffect, useState } from "react";
import styles from './ExpenseFilter.module.css'
import Wrapper from "../Helper/Wrapper";
import { CounterUseContext } from "../../Context/CounterContext/CounterUseContext";

const ExpenseFilter = (props) => {
    const {count} = CounterUseContext();
    const [searchText, setSearchText] = useState('')

    //debounce
    useEffect(() => {
        const debounce = setTimeout(() => {
            props.onSearchText(searchText)
        }, 1000)
        return () => {
            clearTimeout(debounce);
        }
    }, [searchText])
    const filterHandler = (event) => {
        setSearchText(event.target.value)
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
                            value={searchText}
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