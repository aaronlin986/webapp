import {useState} from 'react'

const Product = ({product, addCart}) => {
    const [quantity, setQuantity] = useState(0)

    const incrementQuantity = () => {
        setQuantity(quantity + 1)
    }

    const decrementQuantity = () => {
        if(quantity > 0){
            setQuantity(quantity - 1)
        }
    }
    
    return (
        <div>
            {/* img goes here */}
            <p>{product.name}</p>
            {product.cost}
            <p>
                {quantity}
                <button onClick={decrementQuantity}>-</button> 
                <button onClick={incrementQuantity}>+</button>
            </p>
            <button onClick={() => addCart({...product, quantity})}>Add to Cart</button>
        </div>
    )
}

export default Product