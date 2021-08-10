import Product from "./Product"
import '../componentStyles/Products.css'

const Products = ({products, addCart}) => {
    return (
        <div className={'products'}>
            {products.map(product => 
                <Product product={product} addCart={addCart}/>  
            )}
        </div>
    )
}

export default Products