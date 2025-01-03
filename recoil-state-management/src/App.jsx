import { useState } from 'react'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { countAtom } from './store/atoms/count'

function App() {

  return <div>
    <CountRenderer />
  </div>
}

const CountRenderer = () => {
//All the components which are using Recoil must be wrapped inside RecoilRoot same as contextAPI (<Component.Provider value={count})
  return <div>
    <RecoilRoot>  
      <Count/>
      <IncreaseButtons/>
      <DecreaseButtons/>
    </RecoilRoot>
  </div>
}

const Count = () => {
  const count = useRecoilValue(countAtom);
  return <div>
    {count}
  </div>
}

//No need to use two components for increase or decrease button, it can be done inside a single component
//But i've created this just to show that [count, setCount] does not matter, it is created just to use recoil hooks
// once count, setCount is initiallized with countAtom, it stores the values of countAtom recoil
// recoil hooks like:
// useRecoilValue  -> count
// useRecoilState  -> setCount
// useSetRecoilState -> [count, setCount]
const IncreaseButtons = () => {
  
  const [count, setCount] = useRecoilState(countAtom);   
  return <div>

    <button onClick={ () => {setCount(count + 1);}}>Increase</button>
   
  </div>
}

const DecreaseButtons = () => {

  const [count, setCount] = useRecoilState(countAtom)
  return <div>
     <button onClick={ () => {setCount(count-1)}}>Decrease</button>
  </div>
}

export default App
