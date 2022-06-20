import React from "react";
import { CounterUseContext } from "../../Context/CounterContext/CounterUseContext";
import ButtonCounter from "../ButtonCount/ButtonCounter";
import style from "./Counter.module.css";
import Card from "../Card/Card";

const Counter = (props) => {
    const {count} = CounterUseContext()

    return (
        <Card className={style.counter}>
            <span>
                <p style={{'color': 'white' }}>
                    This is my counter: {count}
                </p>
            </span>
            <ButtonCounter />
        </Card>
    );
}

export default Counter;