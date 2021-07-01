// import React from 'react'
import { useState } from "react"
import LoginForm from "./components/LoginForm"

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
      Hello World
      <button onClick={loginPopup}>Sign In</button>
      <LoginForm show={showLoginForm} toggleShow={toggleShowLoginForm}/>
    </div>
  )
}

export default App
