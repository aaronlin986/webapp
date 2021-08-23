// import React from 'react'
import { useState } from 'react';
import LoginForm from "./components/LoginForm"
import HeaderBar from "./components/HeaderBar"
import {
    BrowserRouter as Router, Switch, Route
} from 'react-router-dom';
import Admin from './components/Admin';
import Home from './components/Home';
import './componentStyles/App.css'

const App = () => {
  const [showLoginForm, setShowLoginForm] = useState(false)
  const [username, setUsername] = useState(localStorage.getItem('username'));
  
  const toggleShowLoginForm = () => {
    setShowLoginForm(!showLoginForm)
  }
  
  return (
    <Router>
      <HeaderBar name='Company Name' loginPopup={toggleShowLoginForm} username={username} />
      {showLoginForm && <LoginForm toggleShow={toggleShowLoginForm} setUsername={setUsername} />}
      <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/admin" component={Admin} />
      </Switch>
    </Router>
  )
}

export default App
