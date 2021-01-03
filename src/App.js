import React from'react';
import './App.css';

function App() {
const[counter,setCounter]=React.useState([1,2,3])

    const add=()=>{
    const newcounter=Math.floor(Math.random()*10)
        setCounter([...counter,newcounter])
    }
  return (
    <div className="App">
        {counter.map((el,index)=><li key={index}>{el}</li>)}
        <br/>
        <button onClick={add}>add</button>
    </div>
  );
}

export default App;
