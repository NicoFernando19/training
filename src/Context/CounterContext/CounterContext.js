import React, { useState, createContext } from "react";

export const CountContext = createContext({counter: []});

const CounterContext = ({ children }) => {
    const [count, setCount] = useState(0);

    return (
        <CountContext.Provider 
            value={{counter: [count, setCount]}}
        >
            {children}
        </CountContext.Provider>
    );
};

export default CounterContext;