// import React from 'react'
import { useState, useEffect } from 'react';
import LoginForm from "./components/LoginForm"
import HeaderBar from "./components/HeaderBar"
import Products from './components/Products'
import Cart from './components/Cart'
import Admin from './components/Admin';
import {
    BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';
import adminAPI from './services/Admin';

const App = () => {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])
  const [showLoginForm, setShowLoginForm] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false);
  
  useEffect(() => {
    adminAPI.verifyAdmin().then((result) => {
      if (result.error) {
  
      } 
      if (result.ok) {
        setIsAdmin(result.IsAdmin);
      }
    })
  });

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
      quantity: 2,
      cost: 4.5,
      id: 1
    },
    {
      name: "Item3",
      quantity: 1,
      cost: 2,
      id: 2
    },
    {
      name: "Item9",
      quantity: 5,
      cost: 15,
      id: 3
    }
  ]
  
  return (
    <div>
      <div>
        <HeaderBar name='Company Name' loginPopup={toggleShowLoginForm}/>
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                {
                  isAdmin &&
                  <li>
                    <Link to="/admin">Admin</Link>
                  </li>
                }
              </ul>
            </nav>

            <Switch>
              <Route path="/admin">
                <Admin />
              </Route>
            </Switch>
          </div>
        </Router>
        {showLoginForm && <LoginForm toggleShow={toggleShowLoginForm}/>}
        <Products products={items} addCart={addCart}/>
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
