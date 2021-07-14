// import React from 'react'
import { useState } from "react"
import LoginForm from "./components/LoginForm"
import HeaderBar from "./components/HeaderBar"
import Cart from './components/Cart'

const App = () => {
  const [cart, setCart] = useState([])
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

  const removeFromCart = (item) => {
    setCart(cart.filter(i => i.id !== item.id))
  }

  const decrementItem = (item) => {
    setCart(cart.map(i => 
      i.id === item.id 
      ? {...item, count: item.count - 1} 
      : i
    ))
  }

  const incrementItem = (item) => {
    setCart(cart.map(i => 
      i.id === item.id
      ? {...item, count: item.count + 1}
      : i
    ))
  }

  //Temporary cart
  const items = [
    {
      name: "Item1",
      count: 2,
      cost: 4.5
    },
    {
      name: "Item3",
      count: 1,
      cost: 2
    },
    {
      name: "Item9",
      count: 5,
      cost: 15
    }
  ]
  
  return (
    <div>
      <div>
        <HeaderBar name='Company Name' loginPopup={loginPopup}/>
        <LoginForm show={showLoginForm} toggleShow={toggleShowLoginForm}/>
        <Cart 
          cart={items} 
          removeFromCart={removeFromCart}
          decrementItem={decrementItem}
          incrementItem={incrementItem}
        />
      </div>
    </div>
  )
}

export default App
