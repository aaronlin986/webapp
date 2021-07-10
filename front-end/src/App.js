// import React from 'react'
import { useState } from "react"
import LoginForm from "./components/LoginForm"
import HeaderBar from "./components/HeaderBar"
import Cart from './components/Cart'

const App = () => {
  const [showLoginForm, setShowLoginForm] = useState('modal-hide')

  const toggleShowLoginForm = () => {
    if(showLoginForm === 'modal-show'){
      setShowLoginForm('modal-hide')
    }
    else{
      setShowLoginForm('modal-show')
    }
  }

  const loginPopup = () => {
    toggleShowLoginForm()
  }

  const items = [
    {
      item: {name: "Item1"},
      count: 2
    },
    {
      item: {name: "Item3"},
      count: 1
    },
    {
      item: {name: "Item9"},
      count: 5
    }
  ]
  
  return (
    <div>
      <div>
        <HeaderBar name='Company Name' loginPopup={loginPopup}/>
        <LoginForm show={showLoginForm} toggleShow={toggleShowLoginForm}/>
        <Cart items={items}/>
      </div>
    </div>
  )
}

export default App
