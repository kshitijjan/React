import { useState } from "react"


function App() {
  const [color, setColor] = useState('Orange')
  
  return <div style={{backgroundColor: color}}>
    <button onClick={ () => {setColor('Red')}}>Red</button>
    <button onClick={ () => {setColor('Blue')}}>Blue</button>
    <button onClick={ () => {setColor('Yellow')}}>Yellow</button>
    <button onClick={ () => {setColor('Brown')}}>Brown</button>
  </div>
}
export default App
