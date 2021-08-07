const Review = ({cart, toggleShow}) => {
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
                <button>Submit</button>
            </div>
        </div>
    )
}

export default Review