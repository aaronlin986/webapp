// import React from 'react'
import { useState } from "react"
import LoginForm from "./components/LoginForm"

const App = () => {

  const loginPopup = () => {
  }
  
  return (
    <div>
      Hello World
      <button onClick={loginPopup}>Sign In</button>
      <LoginForm/>
    </div>
  )
}

export default App
