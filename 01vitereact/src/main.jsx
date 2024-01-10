import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    // this syntax is converted using parsing to
    // converted into tree
    <div>
      <h1>custom app !!</h1>
    </div>
  )
}

// const ReactElement = {
//   type : 'a',
//   props: {
//     href: 'https://google.com',
//     target: '_blank'
//   },
//   children: 'click me to visit google'
// } // if we directly pass this object to the render function 
// // it will not run ;


//react element using react 
// injecting variables in the code 
const anotheruser = "chai or react"
const ReactElement = React.createElement(
  'a',
  {
    href: 'https://google.com',
    target: '_blank'
  },
  "click me to visit google",
  anotheruser
) // this will run seamlessly in function






const anotherElement  = ( // this will run properly
  <a href="https://google.com" target='_blank'>visit google</a>
)



ReactDOM.createRoot(document.getElementById('root')).render(
  // we can remove this scriptmode tag

    // <MyApp />
    // MyApp() // we can run like this

    // we can also run like this  
    // anotherElement
    ReactElement
    // <App />
 
)
