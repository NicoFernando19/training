import { useContext } from "react";
import { CountContext } from "./CounterContext";

export const CounterUseContext = () => {
    const context = useContext(CountContext);
    const [count, setCount] = context.counter;

    const CountHandler = (number) => {
      if (number === 0) 
        setCount(0);
      else
        setCount((count) => count + number);
    };
  
    return {
      CountHandler,
      count
    };
};