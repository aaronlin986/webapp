import Item from './Item'

const Cart = ({items}) => {
    return (
        <div>   
            {/* Each item will have it's own component, 
            which will also have an ID number we can use as a key in li*/}
            <ul>
                {items.map(({item, count}) => 
                    <li>
                        <Item name={item.name} count={count}/>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Cart;