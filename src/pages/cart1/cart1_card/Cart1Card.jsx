//npm packages
import { useState } from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa';

//local imports
import "./Cart1Card.css";
import conditioners from '../../../images/products/conditioners.png';

const Cart1Card = ({ c,  handleRemove, handleQuantityIncrease, handleQuantityDecrease }) => {
    
    const [ quantity, setQuantity ] = useState(c.count);

    const increaseHandler = (c) => {
        handleQuantityIncrease(c)
        setQuantity(c.count + 1);
    }

    const decreaseHandler = (c) => {
        handleQuantityDecrease(c);
        setQuantity(c.count - 1);
    }

    const priceNumber = parseInt(c.price);

    return (
        <div className='cart-card-item'>
            <div className='cart-card-item-detail'>
                <img className='cart-img' alt="cart img" src={ conditioners }/>
            </div>
            <div className='cart-card-item-detail cart-card-item-name'>
                <span className='cart-card-item-value'>{ c.title }</span>
            </div>
            <div className='cart-card-item-detail'>
                <span className='cart-card-item-value'>{"R " + c.price } { c.priceQuantity || '' }</span>
            </div>
            <div className='cart-card-item-detail'>
                <div className="cart-card-item-quantity-box">
                    <FaMinus onClick={() => decreaseHandler(c)} className='cart-card-item-icon' />
                        <p className="cart-card-item-quantity">{quantity}</p>
                    <FaPlus onClick={() => increaseHandler(c)} className='cart-card-item-icon' />
                </div>
            </div>
            <div className='cart-card-item-detail cart-card-item-price'>
                <span className="cart-card-item-value">{"R " + priceNumber * quantity } </span>
            </div>
            <button className="cart-card-item-delete" onClick={() => handleRemove(c)}>Remove</button>
        </div>
    )
}

export default Cart1Card;