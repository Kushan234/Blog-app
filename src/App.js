import { Routes, Route } from 'react-router-dom'


import React from 'react'
import Home from './Pages/Home/Home'
import ArticleDetails from './Pages/ArticleDetails/ArticleDetails'

const App = () => {
  return (
    <div className='app'>
      <Routes>
      <Route index path='/' element={<Home />}/>
      <Route index path='/blog/:id' element={<ArticleDetails />}/>
      </Routes>
    </div>
  )
}

export default App