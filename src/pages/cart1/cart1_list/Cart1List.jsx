//local imports
import "./Cart1List.css";
import Cart1Card from "../cart1_card/Cart1Card";
import Cart1Summary from '../cart1_summary/Cart1Summary';

const Cart1List = ({ cart, handleRemove, handleQuantityDecrease, handleQuantityIncrease }) => {
    
    return (
        <div className='cart1-list-wrapper'>
            <div className="cart1-cart">
                <div className="cart1-cart-header">
                    <p className="left">your bag <span className="right">[{cart.length}]</span></p>
                </div>
                {
                    cart && cart.map((c) => {
                        return (
                            <Cart1Card 
                                c={c}
                                cart={cart} 
                                key={c.product_id}
                                handleRemove={handleRemove}
                                handleQuantityIncrease={handleQuantityIncrease}
                                handleQuantityDecrease={handleQuantityDecrease}
                            />
                        )
                    })
                }
            </div>
            <div className="cart1-cart-summary">
                <Cart1Summary cart={cart}/>
            </div>
        </div>
    )
}

export default Cart1List;