import axios from 'axios'
import React, { useEffect, useState } from 'react'

//Custom Hook
//Data Fetching hook with auto refreshing 
function useTodos(n) {
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    //Every 5 seconds the backend calls goes and return fresh set of todos
    const interval = setInterval( () => {
      const fetchTodos = async () => {
      const response = await axios.get('http://localhost:3000/todos')
      setTodos(response.data)
      setLoading(false)
      }
      fetchTodos();
    }, n*1000)

    //This will initially fetch the data as the above code will take 5 seconds to give 1st output
    const fetchTodos = async () => {
      const response = await axios.get('http://localhost:3000/todos')
        setTimeout( () => {
          setTodos(response.data)
          setLoading(false)
        }, 1000)
      }
      fetchTodos();
      
      //The useEffect() is dependent on n, so if n changes from 5 to 10, we need to clear the old clock
      //If old clock is not cleared then 2 clocks will run parallely 
      return () => {
        clearInterval(interval)
      }
  }, [n])

  return {todos, loading};
}

function App() { 

  //useTodos() is a custom hook
  //Now if this hook is written in a specific file then I can use this hook anywhere (Code reusability)
  const {todos, loading} = useTodos(5);

  if(loading){
    return <div> Loading... </div>
  }

  return (
    <>
      {todos.map(todo => <Todo key = {todo.key} todo={todo}/>)}
    </>
  )
}

function Todo({todo}){
  return <div>
    <h1>{todo.title}</h1>
    <h3>{todo.description}</h3>
  </div>
}


export default App
