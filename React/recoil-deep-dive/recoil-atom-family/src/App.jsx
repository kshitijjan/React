import { RecoilRoot, useRecoilValue } from 'recoil'
import './App.css'
import { todoAtom } from './atom'

function App() {

  return <div>
    <RecoilRoot>
      <RenderTodo id={1}/>
      <RenderTodo id={2}/>
    </RecoilRoot>
  </div>
}

const RenderTodo = ({id}) => {

  const todos = useRecoilValue(todoAtom(id))

  return <div>
    {todos.title}
    {todos.description}
  </div>
}

export default App
