
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
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
  const todo = useRecoilValue(todoAtom(id))

  return <div>
    Title: {todo.title}
    <br></br>
    Description: {todo.description}
  </div>
}

export default App
