import Chai from "./chai"

function App() {
   

  const username = "chai or code"
  return (
    // <h1>chai aur code with vite | Naveen </h1> we can only return one element 
    //  for returning multiple element we wrap up these components in a div or empty <></> known as fregment
    
    <>
    <Chai/>
    <h1>this is second element</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
    <p>this is variable of a function {username}</p>
    //this is expression  and this is evaluated expression
    </>
  )
}


export default App
