// import React from 'react'
import { useState } from "react"
import LoginForm from "./components/LoginForm"
import HeaderBar from "./components/HeaderBar"
import Products from './components/Products'
import Cart from './components/Cart'

const App = () => {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])
  const [showLoginForm, setShowLoginForm] = useState(false)

  const toggleShowLoginForm = () => {
    setShowLoginForm(!showLoginForm)
  }

  const removeFromCart = (item) => {
    setCart(cart.filter(i => i.id !== item.id))
  }

  const decrementItem = (item) => {
    setCart(cart.map(i => 
      i.id === item.id 
      ? {...item, quantity: item.quantity - 1} 
      : i
    ))
  }

  const incrementItem = (item) => {
    setCart(cart.map(i => 
      i.id === item.id
      ? {...item, quantity: item.quantity + 1}
      : i
    ))
  }

  const addCart = (item) => {
    setCart(cart.concat(item))
  }

  //Temporary cart
  const items = [
    {
      name: "Item1",
      cost: 4,
      id: 1
    },
    {
      name: "Item2",
      cost: 2,
      id: 2
    },
    {
      name: "Item3",
      cost: 15,
      id: 3
    },
    {
      name: "Item4",
      cost: 1,
      id: 4
    },
    {
      name: "Item5",
      cost: 100,
      id: 5
    }
  ]
  
  return (
    <div>
      <div>
        <HeaderBar name='Company Name' loginPopup={toggleShowLoginForm}/>
        {showLoginForm && <LoginForm toggleShow={toggleShowLoginForm}/>}
        <Products products={items} addCart={addCart}/>
        <Cart 
          cart={cart} 
          removeFromCart={removeFromCart}
          decrementItem={decrementItem}
          incrementItem={incrementItem}
        />
      </div>
    </div>
  )
}

export default App
