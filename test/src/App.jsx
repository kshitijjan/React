import { useContext, useState } from 'react'

import './App.css'
import { CountContext, SetCountContext } from './context'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    <CountContext.Provider value={count}>
      <SetCountContext.Provider value={setCount}>
      <Count/>
      <SetCount/>
      </SetCountContext.Provider>
    </CountContext.Provider>
    </>
  )
}
const Count = () => {
  const count = useContext(CountContext);
  return <div>
    {count}
  </div>
}
const SetCount = () => {
  const count = useContext(CountContext)
  const setCount = useContext(SetCountContext)
  return <div>
    <button onClick={ () => { setCount(count+1)}}>increase</button>
  </div>
}

export default App
