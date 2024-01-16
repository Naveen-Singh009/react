import { useCallback, useEffect, useState , useRef } from 'react'
import './App.css'

function App() {
  const [lenght , setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("")

  // useRef hook 
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYXabcdefghijklmnopqrstuvwxyz" 
    if(numAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*"
    
    for(let i = 1; i <= lenght ; i++){
      let char = Math.floor(Math.random() * str.length+1)

      pass += str.charAt(char)
    } 
    setPassword(pass)


  }, [lenght, numAllowed, charAllowed, setPassword])

  const copyPasswordToClibboard = useCallback ( ()=> {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,100)
    window.navigator.clipboard.writeText(password)
  }, [password]) 


  useEffect(() => {
    passwordGenerator()
  } ,[ length, numAllowed, charAllowed, passwordGenerator])




  return (
    <>
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700">
      <h1 className="text-white text-center my-3">Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input  
          type="text" 
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='passoword'
          readOnly
          ref={passwordRef}
          />
          <button onClick={copyPasswordToClibboard} className=' outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range"
           min={6}
           max={100}
           value={lenght}
           className='cursor-pointer'
           onChange={(e) => {
            setLength(e.target.value)
           }}
          />
          <label>Length:{lenght}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
          type='checkbox'
          defaultChecked = {numAllowed}
          id='numberInput'
          onChange={(e) => {
           setNumAllowed((prev) => !prev);
          }}
           />
          <label htmlFor="numberInput">Number</label>
        </div>
        <div>
          <input type="checkbox"
          defaultChecked={charAllowed}
          id='charInput'
          onChange={() =>{
            setCharAllowed((prev) => !prev)
          }} />
          <label htmlFor="charInput">Characters</label>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
