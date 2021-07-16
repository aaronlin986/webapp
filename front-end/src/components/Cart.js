import Item from './Item'

const Cart = ({cart, removeFromCart, decrementItem, incrementItem}) => {
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
                    </li>)
                }
            </ul>
            <button>Review</button>
        </div>
    );
};

export default Cart;