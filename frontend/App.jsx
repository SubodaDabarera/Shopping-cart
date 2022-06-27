import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './Home'
import AllItems from './pages/AllItems'
import Cart from './pages/Cart'
import CreateProfile from './pages/CreateProfile'
import EditItems from './pages/EditItems'
import LogIn from './pages/LogIn'
import NewItem from './pages/NewItem'
import ViewCustomers from './pages/ViewCustomers'

const App = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element = {<LogIn/>} />
                <Route path='/profile' element = {<CreateProfile/>} />
                <Route path='/login' element= {<LogIn/>} />
                <Route path = '/allItems' element = {< AllItems/>} />
                <Route path = '/myCart' element = {<Cart />} />
                <Route path = '/addItems' element = {<NewItem />} />
                <Route path = '/myCustomers' element = {<ViewCustomers />} />
                <Route path = '/editItems' element = {<EditItems />} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App