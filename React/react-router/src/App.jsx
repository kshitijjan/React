import { useState } from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'

import './App.css'
import Landing from './components/Landing'
import Dashboard from './components/Dashboard'


function App() {
  return <div>

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
      </Routes>
      <Buttons/>
    </BrowserRouter>

  </div>
}

const Buttons = () =>{
  
  const navigate = useNavigate();
  return <div>
    <div>
    <button onClick={ () => {navigate('/')}}> Landing </button>
    <button onClick={ () => {navigate('/dashboard')}}> Dashboard </button>
    </div>
  </div>

}

export default App
