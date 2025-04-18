import React from 'react'
import axios from 'axios'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AppLayout from './components/AppLayout'
import SingleVideogamePage from './pages/SingleVideogamePage'
import Videogames from './pages/Videogames'
import HomePage from './pages/HomePage'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>

          <Route path="/" element={<HomePage/>} />
          <Route path="/videogames" element={<Videogames/>} />
          <Route path="/videogames/:id" element={<SingleVideogamePage/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
