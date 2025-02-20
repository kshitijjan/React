import { useState } from "react";
import { useInterval } from "./hooks/useInterval";
import { useIsOnline } from "./hooks/useIsOnline";
import { useMousePointer } from "./hooks/useMousePointer";
import { useDebounce } from "./hooks/useDebounce";

function App() {
  
  //Custom Hooks
  const isOnline = useIsOnline();  //Check if user is online or offline
  const mousePointer = useMousePointer(); //Gives x and y axis of mouse pointer

  const [count, setCount] = useState(0);
  useInterval( () => {
    setCount( count => count + 1);
  }, 1000)

  return <>
  {isOnline ? "You are online" : "You are offline, please connect to internet"}
  <br />
  Mouse Pointer: {mousePointer.x} {mousePointer.y}
  <br />
  Count is {count}
  <br />
  <SearchBar/>
  </>
}

const SearchBar = () => {
  const [inputValue, setInputValue] = useState('');
  const debounceValue = useDebounce(inputValue, 500);

  return (
    <input type="text" 
    value={inputValue}
    onChange={(e) => setInputValue(e.target.value)}
    placeholder="Search..."
    />
  )
}

export default App
