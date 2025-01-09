import { useEffect, useState } from 'react'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { countAtom, evenSelector } from './store/atoms/count'

function App() {

  return <div>
    <Count />
  </div>
}

const Count = () => {
//All the components which are using Recoil must be wrapped inside <RecoilRoot> same as contextAPI (<Component.Provider value={count})
  return <div>
    <RecoilRoot>  
      <CountRenderer/>
      <Buttons/>
      <CheckEven/>
    </RecoilRoot>
  </div>
}
//Count component will not re-render whenever count increases or decreases which was previously happened with contextAPI
//So we solved a problem of re-rendering 

const CountRenderer = () => {
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

/* const Buttons = () => {
  
  const [count, setCount] = useRecoilState(countAtom);   
  return <div>

    <button onClick={ () => {setCount(count + 1);}}>Increase</button>
    <button onClick={ () => {setCount(count-1)}}>Decrease</button>
   
  </div>
} */
//The above Button Component is re-rendering whenever increase or decrease button is clicked because we're using count variable from countAtom
//To fix this, use below component

const Buttons = () => {
  const setCount = useSetRecoilState(countAtom); //This creates a fresh count variable and reduces re-rendering

  return <div>
    <button onClick={ () => {setCount(count => count+1) }}>Increase</button>
    <button onClick={ () => {setCount(count => count-1) }}>Decrease</button>
  </div>
}


const CheckEven = () => {

  const isEven = useRecoilValue(evenSelector)
  return <div>
    {isEven == 0 ? 'It is Even' : 'It is odd' }
  </div>
}

export default App
