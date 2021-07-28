import { useState } from 'react';
import Item from './Item'
import Review from './Review'

const Cart = ({cart, removeFromCart, decrementItem, incrementItem}) => {
    const [showReview, setShowReview] = useState(false)

    const toggleShowReview = () => {
        setShowReview(!showReview)
    }

    return (
        <div>       
            <ul>
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