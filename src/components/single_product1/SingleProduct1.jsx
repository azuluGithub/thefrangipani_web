//npm packages
import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

//local imports
import './SingleProduct1.css';
import NavBar1 from '../navbar1/NavBar1';
import { testProducts } from '../products1/products';
import conditioners from '../../images/products/conditioners.png';

const SingleProduct1 = () => {
    
    const [ product, setProduct ] = useState(null);
    const { product_id } = useParams();

    useEffect(() => {
        const found = testProducts && testProducts.filter((p) => {
            return product_id === p._id;
        });
        setProduct(found[0]);
    }, [product_id]);

    const handleAddToCart = e => {}
    console.log(conditioners)
    if (!product)
        return (
            <div className='single-product-1'>
                <NavBar1 />
                <div className='product-1-not-found-wrapper'>
                    <h3 className='product-1-not-found-heading'>OOOOPS....</h3>
                    <p className='product-1-not-found-text'>No product was found!</p>
                </div>
            </div>
        )

    return (
        <div className='single-product-1'>
            <NavBar1 />
            <div className='single-product-1-wrapper'>
                <div className='single-product-1-split'>
                    <div className='single-product-1-content'>
                        <div className='single-product-1-content-image-box'>
                            <img 
                                alt='product img' 
                                src={conditioners}
                                className='single-product-1-content-image'
                            />
                        </div>
                        <p className='single-product-1-title'> { product.title } </p>
                        <p className='single-product-1-description'> { product.description } </p>
                        <div className='single-product-1-bottom-container'>
                            <div className='single-product-1-price-container'>
                                <span className='single-product-1-price'> {'R ' +  product.price } </span>
                                <span className='single-product-1-price-quantity'> { product.priceQuantity } </span>
                            </div>
                            {
                                product.priceAlt ?
                                    <div className='single-product-1-price-container'>
                                        <span className='single-product-1-price'> {'R ' +  product.priceAlt } </span>
                                        <span className='single-product-1-price-quantity'> { product.priceAltQuantity } </span>
                                    </div> : <div></div>
                            }
                        </div>
                        <div className='single-product-1-buttons-container'>
                            <Link className="link" to='/shop'>
                                <div className="single-product-1-button-box">
                                    <div className="single-product-1-button-shop" >continue shopping</div>
                                </div>
                            </Link>
                            <div 
                                className="single-product-1-button-box"
                                onClick={handleAddToCart}
                            >
                                <div className="single-product-1-button-cart" >add to cart</div>
                            </div>
                        </div>
                    </div>
                    <div className='single-product-1-image-box'>
                        <div className='single-product-1-image-sm'>
                            <img 
                                alt='product img' 
                                src={ conditioners }
                                className='single-product-1-image'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct1;
