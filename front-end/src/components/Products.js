import Product from "./Product"

const Products = ({products, addCart}) => {
    return (
        <table>
            <tbody>
                <tr>
                    {products.map(product => 
                        <td key={product.id}>
                            <Product product={product} addCart={addCart}/>
                        </td>
                    )}
                </tr>
            </tbody>
        </table>
    )
}

export default Products