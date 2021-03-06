import { useState } from 'react';
import Products from './Products'
import Cart from './Cart'

const Home = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
  
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

    //Temporary cart
    const items = [
      {
        name: "Item1",
        quantity: 2,
        cost: 4,
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
    ];

    const addCart = (item) => {
        setCart(cart.concat(item))
    }

    return (
        <div>
            <Products products={items} addCart={addCart}/>
            <Cart 
                cart={cart} 
                removeFromCart={removeFromCart}
                decrementItem={decrementItem}
                incrementItem={incrementItem}
            />
        </div>
    )
}

export default Home;