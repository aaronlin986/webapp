// import React from 'react'
import { useState } from "react"
import LoginForm from "./components/LoginForm"
import HeaderBar from "./components/HeaderBar"

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
  
  return (
    <div>
      <div>
        <HeaderBar name='Company Name' loginPopup={loginPopup}/>
        <LoginForm show={showLoginForm} toggleShow={toggleShowLoginForm}/>
      </div>
    </div>
  )
}

export default App
