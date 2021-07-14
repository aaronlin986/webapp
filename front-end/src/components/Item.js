const Item = ({item, decrementItem, incrementItem, removeFromCart}) => { 
    return (
        // on hover name, shows img
        <p>
            <button onClick={() => removeFromCart(item)}>&times;</button>
            {item.name} 
            <button onClick={() => decrementItem(item)}>-</button> 
            <button onClick={() => incrementItem(item)}>+</button> 
            <span>{item.count} {item.cost}</span>
        </p>
    );
};

export default Item;