import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  let addCount=() =>{
    if(count<20)
     setCount(count+1);

    else
      alert("count should not increase greater than 20")
     
  }

  let removeCount=() =>{
    if(count>0)
    setCount(count-1);

    else
      alert("counter value should not negative")

  }

  return (
    <>
     <h2>Counter{count}</h2>

     <button  onClick={addCount} >AddCount</button>
     <button onClick={removeCount}>RemoveCount</button>
    </>
  )
}

export default App
