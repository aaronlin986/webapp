import { useState } from 'react';
import '../componentStyles/Cart.css'
import Item from './Item'
import Review from './Review'

const Cart = ({cart, removeFromCart, decrementItem, incrementItem}) => {
    const [showReview, setShowReview] = useState(false)
    const [collapse, setCollapse] = useState('cart--list-expand')

    const toggleShowReview = () => {
        setShowReview(!showReview)
    }

    const toggleCollapse = () => {
        if(collapse === 'cart--list-expand'){
            setCollapse('cart--list-collapse')
        }
        else{
            setCollapse('cart--list-expand')
        }
    }

    return (
        <div className={'cart'}>    
            <h1 onClick={toggleCollapse}>Cart</h1>   
            <div className={`${collapse}`}>
                <p className={'divider'}></p>
                <ul className={'cart--list'}>
                        {cart.map(item => 
                            <li key={item.id}>
                                <Item 
                                    item={item}
                                    removeFromCart={removeFromCart}
                                    decrementItem={decrementItem}
                                    incrementItem={incrementItem}
                                />
                            </li>
                        )}
                </ul>
                <button onClick={toggleShowReview}>Review</button>
            </div>
            {showReview && <Review cart={cart} toggleShow={toggleShowReview}/>}
        </div>
    );
};

export default Cart;