import '../componentStyles/Item.css'

const Item = ({item, decrementItem, incrementItem, removeFromCart}) => { 
    return (
        // on hover name, shows img
        <div className={'item'}>
            <button 
                className={'item--remove'}
                onClick={() => removeFromCart(item)}>
                    &times;
            </button>
            <div className={'item--info'}>
                <span className={'item--name'}>{item.name}</span>
                <div>
                    <button className={'buttons--circle'}
                        onClick={() => decrementItem(item)}>
                            &minus;
                    </button> 
                    <button className={'buttons--circle'}
                        onClick={() => incrementItem(item)}>
                            +
                    </button> 
                </div>
                <div className={'item--amount'}>
                    <span>{item.quantity} {item.cost}</span>
                </div>
            </div>
        </div>
    );
};

export default Item;