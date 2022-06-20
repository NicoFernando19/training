import React from "react";
import { CounterUseContext } from "../../Context/CounterContext/CounterUseContext";
import style from "./ButtonCounter.module.css"

const ButtonCounter = (props) => {
    const {CountHandler} = CounterUseContext()
    return (
        <>
            <button className={`${style.btn_counter} ${style.btn_danger}`} onClick={() => CountHandler(-1)}>Subtract</button>
            <button className={`${style.btn_counter} ${style.btn_success}`} onClick={() => CountHandler(1)}>Add</button>
        </>
    );
}

export default ButtonCounter;