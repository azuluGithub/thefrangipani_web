import './Cart1.css';
import NavBar1 from '../../components/navbar1/NavBar1';
import Cart1List from './cart1_list/Cart1List';
import { cart1 } from './cart';

const Cart1 = () => {

    const selectedPage = 'cart';

    const handleQuantityIncrease = (c) => { }

    const handleQuantityDecrease = (c) => { }

    const handleRemove = (c) => { }

    if (!cart1.length)
        return (
            <div className='cart1'>
                <NavBar1 />
                <div className='empty-cart1-wrapper'>
                    <h3 className='empty-cart1-heading'>OOOOPS.....</h3>
                    <p className='empty-cart1-text'>Your cart is EMPTY!</p>
                </div>
            </div>
        )

    return (
        <>
            <NavBar1 selectedPage={selectedPage}/>
            <div className="cart1">
                <Cart1List 
                    cart={cart1}
                    handleRemove={handleRemove}
                    handleQuantityIncrease={handleQuantityIncrease}
                    handleQuantityDecrease={handleQuantityDecrease}
                />
            </div>
        </>
    )
}

export default Cart1;