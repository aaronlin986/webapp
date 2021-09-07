import OrderService from '../services/Order'

const Review = ({cart, toggleShow}) => {
    const submitOrder = () => {
        OrderService.submitOrder(cart)
    }

    return (
        <div className={'modal--show'}>
            <div className='modal--content'>
                <div className='close' onClick={toggleShow}>
                    &times;
                </div>
                <ul>
                    {cart.map(item => 
                        <li key={item.id}>
                            <p>
                                {/* Include img here */}
                                {item.name}
                                <span>{item.quantity} {item.cost}</span>
                            </p>
                        </li>
                    )}
                </ul>
                <button onClick={submitOrder}>Submit</button>
            </div>
        </div>
    )
}

export default Review