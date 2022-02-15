import './Products1.css';
import Product1 from '../product1/Product1';
import Products1TopBar from './products1_top_bar/Products1TopBar';
import { testProducts } from './products';

const Products1 = () => {
    
    return (
        <>
            <Products1TopBar />
            <div className="products1-wrapper">
                {
                    testProducts && testProducts.map((product) => <Product1 
                                                            key={product._id} 
                                                            product={product}
                                                        />)
                }
            </div>
        </>
    )
}

export default Products1;