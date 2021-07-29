import { useState } from 'react';
import '../componentStyles/Cart.css'
import Item from './Item'
import Review from './Review'

const Cart = ({cart, removeFromCart, decrementItem, incrementItem}) => {
    const [showReview, setShowReview] = useState(false)

    const toggleShowReview = () => {
        setShowReview(!showReview)
    }

    return (
        <div className={'cart'}>    
            <h1>Cart</h1>   
            <ul className={'cart-list'}>
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
            {showReview && <Review cart={cart} toggleShow={toggleShowReview}/>}
        </div>
    );
};

export default Cart;