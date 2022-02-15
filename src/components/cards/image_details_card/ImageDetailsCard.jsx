import './ImageDetailsCard.css';

//product.name.toUpperCase().substr(0, 20)
const ImageDetailsCard = ({ product }) => {
    return (
        <div className='image-details-card'>
            <img 
                alt='logo img' 
                src={ product.imgUrl }
                className="image-details-card-img"
            />
            <div className="image-details-product">
                <div>
                    <div className="image-details-product-heading">
                        <h4 className="image-details-product-title"> { product.productTitle }</h4>
                        <h5 className="image-details-product-sub-title"> { product.productSubTitle }</h5>
                        <div className='image-details-product-category'>
                            <span className='image-details-product-category-key'>
                                {"Category: "}
                            </span>
                            <span className='image-details-product-category-value'>
                                { product.category.name }
                            </span>
                        </div>
                    </div>
                    <div className="image-details-product-desc">
                        <p className="image-details-product-description"> { product.description /*.substr(0, 295)*/ }</p>
                        <p className="image-details-product-testimony"> { product.testimony /*.substr(0, 66)*/ }</p>
                    </div>
                    <div className="image-details-price-container">
                        <span className="image-details-product-price"> { 'R ' + product.price }</span>
                        <span className="image-details-product-price-desc"> { product.priceDesc }</span>
                        <br />
                        {
                            product.altPrice ? <div>
                                    <span className="image-details-product-alt-price"> { 'R ' + product.altPrice }</span>
                                    <span className="image-details-product-alt-price-desc"> { product.altPriceDesc }</span>
                                </div> : ''
                        }
                    </div>
                    <div className="image-details-btn-box">
                        <button className="image-details-btn">Place An Order</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImageDetailsCard;
