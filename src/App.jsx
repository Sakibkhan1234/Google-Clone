import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './GoogleComponent/Home'
import Searchpage from './GoogleComponent/Searchpage'
import Pola from './GoogleComponent/Pola'
import Images from './GoogleComponent/Images'
import Videos from './GoogleComponent/Videos'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
       <Route element={<Home/>} path='/'/>
       {/* <Route element={<Searchpage/>} path='/search'/> */}
       <Route element={<Searchpage/>} path='/all'/>
       <Route element={<Pola/>}  path='/news'/>
       <Route element={<Images/>} path='/images'/>
       <Route element={<Videos/>} path='/videos'/>
       <Route path='/maps'/>
       <Route path='/more'/>
       <Route path='/settings'/>
       <Route path='/tools'/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
