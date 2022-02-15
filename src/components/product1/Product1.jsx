//npm package
import { Link } from "react-router-dom";
import meltAndPourShampooBars from '../../images/products/meltAndPourShampooBars.png';

//local
import './Product1.css';

const Product1 = ({ product }) => {

    const { title, description, price, priceQuantity } = product;
 
    return (
        <div className='product1'>
            <div className='product1-container'>
                <img 
                    alt='product img' 
                    src={ meltAndPourShampooBars }
                    className='product1-img'
                />
                <div className='product1-content'>
                    <p className='product1-category'> { '' } </p>
                    <p className='product1-title'> { title.substr(0, 32) } </p>
                    <p className='product1-description'> { description.substr(0, 70) + '...' } </p>
                    <div className='product1-bottom-container'>
                        <div className='product1-price-container'>
                            <span className='product1-empty-span'></span>
                            <span className='product1-price'> { 'R ' + price } </span>
                            <span className='product1-price-quantity'> { priceQuantity } </span>
                        </div>
                        <Link className="link" to={`/product/${product._id}`}>
                            <button className="product1-button" >view more</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product1;