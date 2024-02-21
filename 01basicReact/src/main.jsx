import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// we can also create an element using 'React.createElement' method.
// Syntax: 1st tag, 2nd all attributes, 3rd direct text
const reactElement = React.createElement(
  'a',
  {href: "https://google.com", target: "_blank"},
  'Click me to go to Google'
)

const anotherElement = (
  <a href="https://google.com" target="_blank">Click me</a>
)

ReactDOM.createRoot(document.getElementById('root')).render(
  // the 'React.StrictMode' method is important for rightway implemetation at production level but,
  // we can call the functin tag without it also.
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,


  // we can directly call the objects and inject it into the JS
  // reactElement,
  // anotherElement,

  <App />
)
