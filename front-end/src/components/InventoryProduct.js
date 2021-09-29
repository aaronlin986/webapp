import React from 'react';
import sample from '../resources/sample.jpg';

const InventoryProduct = ({product}) => {
    return (
        <div>
            <p>{product.name}</p>
            <img src={sample} alt='Sample' width='50%' height='50%'/>
            <p>{product.cost}</p>
        </div>
    )
}

export default InventoryProduct;