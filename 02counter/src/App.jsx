import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)


  // let counter = 5
  const addValue = () => {
    console.log("clicked", counter);
    // counter = counter+1
    if(counter<20){
      setCounter(counter+1)
    } 
  }

  const removeValue = ()=>{
    if(counter>0){
      setCounter(counter-1)
    }
  }
  return (
    <>
      <h1>chai aur react </h1>
      <h2>counter value : {counter}</h2>
      { /* reference of function is passed because we want that 
      when we click then the function execute 
      if we pass addvalue() then the function will excute imidiatily  */}
      <button
      onClick={addValue}>Add value</button>
      <br />
      <br />
      <button onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
