// updater function = A function passed as an argument to setState() usually
//                    ex. setYear(arrow function)
//                    Allow for safe updates based on the previous state
//                    Used with multiple state updates and asynchronous functions
//                    Good practice to use updater functions.

// React hook = Special function that allows function components to use React feacture
//              without writing class components (React v16.8)
//              (useState, useEffect, useContext, useReducer, useCallback and more)

// useState() = A React hook that a allows the creation of stateful variable AND a setter function
//              to update its value in the Virtual DOM.
//              [name, setName]

import  { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(c => c + 1);
    setCount(c => c + 1);
    setCount(c => c + 1);    
  }

  const decrement = () => {
    setCount(c => c - 1);
    setCount(c => c - 1);
    setCount(c => c - 1);    
  }

  const reset = () => {
    setCount(0);
  }
  return (
    <div className="counter-container">
      <p className="count-display">{count}</p>
      <button className="counter-button" onClick={decrement}>Decrement</button>
      <button className="counter-button" onClick={reset}>Reset</button>      
      <button className="counter-button" onClick={increment}>Increment</button>      
    </div>
  )
}

export default Counter