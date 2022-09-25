import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
function App() {
  return (
    <div className="App">

      {/* <Counter></Counter> */}
      <ExterUsers></ExterUsers>
     
     
    </div>
  );
}



function ExterUsers(){


  // api theke data load korte 5 ta step folllow korte hobe 
  // step-1
  const [users,setUsers]= useState([]);
// step-02
useEffect(()=>{

  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res=>res.json())
  .then(data=>console.log(data))
},[])

  return(

    <div>
      <h2>External Users</h2>
    </div>
  )
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
