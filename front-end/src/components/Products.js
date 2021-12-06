import Product from "./Product"
import '../componentStyles/Products.css'

const Products = ({products, addCart, productsView}) => {
    return (
        <div className={productsView}>
            {products.map(product => 
                <Product product={product} addCart={addCart}/>  
            )}
        </div>
    )
}

export default Products