import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
function App() {
  return (
    <div className="App">

      <Counter></Counter>
     
    </div>
  );
}

function Counter(){
  
  const [count, setCount] = useState(33);

  const increaseCount=()=>{setCount(count+1)}

  const DecreasCount=()=>{setCount(count-1)}

  // console.log(abc)

  return(
    <div>
      
      <h1>Count:{count}</h1>

      <button onClick={increaseCount}>Increas:</button>
      <button onClick={DecreasCount}>decreas:</button>
    </div>
  )
}
export default App;
