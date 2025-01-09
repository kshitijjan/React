import { useContext, useEffect, useState } from 'react'

import { CountContext,SetCountContext } from './context';

function App() {

  const [count, setCount] = useState(0);

  return <div>
    <CountContext.Provider value={count}>
      <SetCountContext.Provider value={setCount}>
      <Count/>
      </SetCountContext.Provider>
    </CountContext.Provider>
    
  </div>
}

const Count = () => {
  return <div>
    <CountRenderer />
    <Buttons/>
  </div>
}

const CountRenderer = () => {
  const count = useContext(CountContext);
  return <div>
    {count}
  </div>
}
const Buttons = () => {
  const count = useContext(CountContext); 
  const setCount = useContext(SetCountContext);
  return <div>
    <button onClick={ () => {
      setCount(count+1);
    }}>Increase</button>
    <button onClick={ () => {
      setCount(count-1);
    }}>
      Decrease Count
    </button>
  </div>
}

export default App
