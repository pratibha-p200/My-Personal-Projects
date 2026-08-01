import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return(
    <div className="container">
      <h1>Counter App</h1>
        <h2>{count}</h2>

        <button onClick={()=> setCount(count + 1)}>
          Increament
        </button>
    </div>
  );
}

export default App;

// description:
//  1) useState: it stores data that can change. without useState, React cannot remember changing value.
//  2) () => setCount(count + 1)     this is the Arrow function, it is used to update the value of count. 
//      when the button is clicked, it will call this function and increment the count by 1.