import { useState, useCallback, useEffect,useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // useRef Hook
  const passwordRef = useRef(null); // lets us take the reference of any element on the webpage and change manipulate it using the reference

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTVWXYZabcdefghijklmnopqrstvwxyz";

    if(numberAllowed) str += "0123456789";
    if(charAllowed) str += "!@#$%^&*-_+=[]`";

    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);      
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select(); // this changes the look of the selected reference, to make the user aware that some change has happened.
    passwordRef.current?.setSelectionRange(0, 100); // let's you select the referenced object to a range only
    window.navigator.clipboard.writeText(password); // this will copy the text to clipboard
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'>
        <h1 className='text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
          type="text"
          value = {password}
          className='outline-none w-full px-3 py-1'
          placeholder='Password'
          readOnly
          ref={passwordRef}
          />
          <button
          onClick={copyPasswordToClipboard}
          className='outline-none text-white bg-orange-700 px-3 py-0.5 shrink-0'
          >Copy</button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range" 
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}} // this function sets the length as the user decides the range
            />
            <label>Length: {length}</label>
          </div>
          
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox" 
            defaultChecked={numberAllowed}
            id='numberInput'
            onChange={() => { // this function will reverse the state of numberAllowed to true if false and vice-versa
              setNumberAllowed(prev => !prev);
            }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox" 
            defaultChecked={charAllowed}
            id='charInput'
            onChange={() => { // this function will reverse the state of numberAllowed to true if false and vice-versa
              setCharAllowed(prev => !prev);
            }}
            />
            <label htmlFor="charInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
