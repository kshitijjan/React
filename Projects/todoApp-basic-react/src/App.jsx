import { BrowserRouter, Routes, Route, useNavigate } from "react-router"
import { AllTodos } from "./pages/AllTodos";
import { RecoilRoot } from "recoil";
import { NotCompletedTodos } from "./pages/NotCompletedTodos";
import { Home } from "./pages/Home";
import { Search } from "./pages/Search";


function App() {
 return <div>
  <RecoilRoot>
  <BrowserRouter>
  <NavBar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/alltodos' element={<AllTodos/>}/>
      <Route path='/notcompletedtodos' element={<NotCompletedTodos/>}/>
      <Route path='/search' element={<Search/>}/>
    </Routes>
  </BrowserRouter>
  </RecoilRoot>
  
 </div>
}

const NavBar = () => {
  const navigate = useNavigate();
  return <div>
    <button onClick={ () => {navigate('/')}}>Home</button>
    <button onClick={ () => {navigate('/alltodos')}}>All Todos</button>
    <button onClick={ () => {navigate('/notcompletedtodos')}}>Pending Todos</button>
    <button onClick={ () => {navigate('/search')}}>Search a todo</button>
  </div>
}
export default App
