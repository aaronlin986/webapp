import { useState } from 'react';
import '../componentStyles/Cart.css'
import Item from './Item'
import Review from './Review'

const Cart = ({cart, removeFromCart, decrementItem, incrementItem, toggleView}) => {
    const [showReview, setShowReview] = useState(false)
    const [collapse, setCollapse] = useState('cart-button')

    const toggleShowReview = () => {
        setShowReview(!showReview)
    }

    const toggleCollapse = () => {
        if(collapse === 'cart-button-expanded'){
            setCollapse('cart-button')
            toggleView()
        }
        else{
            setCollapse('cart-button-expanded')
            toggleView()
        }
    }

    return (
        <div className={`${collapse}`} onClick={toggleCollapse}>
            
        </div>
        // <div className={'cart'}>    
        //     <h1 onClick={toggleCollapse}>Cart</h1>   
        //     <div className={`${collapse}`}>
        //         <p className={'divider'}></p>
        //         <ul className={'cart--list'}>
        //                 {cart.map(item => 
        //                     <li key={item.id}>
        //                         <Item 
        //                             item={item}
        //                             removeFromCart={removeFromCart}
        //                             decrementItem={decrementItem}
        //                             incrementItem={incrementItem}
        //                         />
        //                     </li>
        //                 )}
        //         </ul>
        //         <div className={'cart--actions'}>
        //             <button onClick={toggleShowReview}>Review</button>
        //         </div>
        //     </div>
        //     {showReview && <Review cart={cart} toggleShow={toggleShowReview}/>}
        // </div>
    );
};

export default Cart;