import React from 'react'
import Home from './Components/Home'
import Category from './Components/Category'
import Selling from './Components/Selling'
import Trip from './Components/Trip'
import Company from './Components/Company'
import SendMessage from './Components/SendMessage'
import Footer from './Components/Footer'


const App = () => {
  return (
    <div className='px-4'>
    <Home/>
    <Category/>
    <Selling/>
    <Trip/>
    <Company/>
    <SendMessage/>
    <Footer/>
    </div>
  )
}

export default App
