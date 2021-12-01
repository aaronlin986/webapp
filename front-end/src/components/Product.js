import {useState} from 'react'
import '../componentStyles/Product.css'
import sample from '../resources/sample.jpg'

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
        <div className={'product'}>
            <img src={sample} alt='Sample' width='50%' height='50%'/>
            <p>{product.name}</p>
            <p>{product.cost}</p>
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