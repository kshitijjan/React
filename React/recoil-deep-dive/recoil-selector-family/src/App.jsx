
import { RecoilRoot, useRecoilState, useRecoilValue, useRecoilValueLoadable } from 'recoil'
import './App.css'
import { todoAtom } from './atoms'

function App() {


  return <div>
    <RecoilRoot>
      <RenderTodo id={1}/>
      <br/>
      <RenderTodo id={2}/> 
    </RecoilRoot>
  </div>
}

const RenderTodo = ({id}) => {
  const todo = useRecoilValueLoadable(todoAtom(id))
  // Loadable contains 2 things
  // 1. state -> loading, hasValue, hasError
  // 2. contents 

  if(todo.state === "loading"){
    return <div>
      loading...
    </div>
  }
  else if(todo.state === "hasValue"){
    return <div>
    Title: {todo.contents.title}
    <br></br>
    Description: {todo.contents.description}
  </div>
  }
  else if(todo.state === "hasError"){
    return <div>
      An error occured
    </div>
  }
  
}

export default App
