import { useState , useCallback , useEffect, useRef} from 'react'

import './App.css'
import { use } from 'react'

function App() {
  const [length, setLegth] =useState(8);
  const [numAllowed,setNumAllowed]= useState(false);
  const [charAllowed,setCharAllowed] =useState(false);
  const[password, setPassword] =useState("");

  const passwordRef= useRef(null);


  const passwordGenerator = useCallback(()=>{
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numAllowed) str+="0123456789";
    if(charAllowed) str+="~`@#$%^&*(){})?<>"

    for(let i=1;i<=length;i++){
      let char =Math.floor(Math.random()*str.length+1);
      pass+=str.charAt(char);
    }

    setPassword(pass);


  },[length,numAllowed,charAllowed,setPassword])


  const copyClikBoard = useCallback(() => {
    passwordRef.current.select()
    window.navigator.clipboard.writeText(password)
  }, [password])

useEffect(() => { passwordGenerator() },[length,charAllowed,,numAllowed,passwordGenerator])


  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-700 text-orange-500'>
 <h1 className='text-white text-center my-3'>Password Generator</h1>
 <div className='flex shadow rounded-lg overflow-hidden mb-4'>
  <input type="text"
   value={password}
   className='outline-none w-full bg-white py-1 px-3'
   placeholder='Password'
   readOnly
   ref={passwordRef}
  />
  <button 
  className='outline-none bg-orange-300 text-white px-3 py-0.5 shrink-0'
  onClick={copyClikBoard}
  >Copy</button>
 </div>
 <div className=' flex text-sm gap-x-2' >
  <div className='flex items-center gap-x-1'>
    <input type="range"
    min={8}
    max={100}
    valuse={length}
    className='cursor-pointer'
    onChange={(e) => {setLegth(e.target.value)}}
    />
    <label >Length :{length}</label>

  </div>
<div className='flex items-center gap-x-1'>
  <input type="checkbox"
  defaultChecked={numAllowed}
  id="numberInput"
 onChange={() =>{
  setNumAllowed((prev) => !prev)
 }}
  />
  <label >Number{numAllowed}</label>
</div>

<div className='flex items-center gap-x-1'>
  <input type="checkbox"
  defaultChecked={charAllowed}
  id="numberInput"
 onChange={() =>{
  setCharAllowed((prev) => !prev)
 }}
  />
  <label >Character{charAllowed}</label>
</div>

 </div>

    </div>
  )
}

export default App
