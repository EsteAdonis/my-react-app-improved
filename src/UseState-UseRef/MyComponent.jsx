// useState() = Re-renders the component when state value changes.

// useRef() = "use Reference" Does not re-renders when its value changes.
//            When you want to a component to "remember" some information,
//            but you don't want that information to trigger new renders

//            1. Accessing/Interfacting with DOM elements
//            2. Handlling Focus, Animation, and Transition
//            3. Managing Timers and Intervals.

import { useEffect, useRef } from 'react';

function MyComponent() {

  const inputRef1 = useRef(null);
 
  useEffect(() => {
    console.log('Component Render');
    console.log(inputRef1);
  });

  function handleClick() {
    inputRef1.current.focus();
    inputRef1.current.style.backgroundColor = "yellow";
  }

  return (
    <div>
      <button onClick={handleClick}>
        Click me!
      </button>
      <input ref={inputRef1}/>
    </div>      
  )
}

export default MyComponent