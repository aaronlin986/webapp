import Item from './Item'

const Cart = ({cart, removeFromCart, decrementItem, incrementItem}) => {
    return (
        <div>       
            {/* Each item will have it's own component, 
            which will also have an ID number we can use as a key in li*/}
            <ul>
                {cart.map(item => 
                    <li>
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