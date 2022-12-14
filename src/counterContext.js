import React, { createContext } from "react";

const counterContext = createContext();

const CounterStateContext = (props) => {
  return (
    <div id="counter-context">
      <counterContext.Provider value={{ count: 0, onclick }}>
        {props.children}
      </counterContext.Provider>
    </div>
  );
};

export { counterContext, CounterStateContext };
