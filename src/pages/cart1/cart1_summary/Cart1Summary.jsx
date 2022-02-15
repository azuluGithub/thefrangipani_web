//npm package
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

//local import
import "./Cart1Summary.css";
import { addCartToDbAction, clearMessagesAction } from "../../../store/actions/cartActions";

const Cart1Summary = ({ cart }) => {

    const user = useSelector((state) => state.users.user);
    const addMessage = useSelector((state) => state.cart.add_cart_to_db_message);

    const dispatch = useDispatch();
    let history = useHistory();

    const saveOrderToDb = () => {
        dispatch(addCartToDbAction({ cart,  _id: user._id }));
    }

    if (addMessage === 'successful') {
        dispatch(clearMessagesAction());
        history.push("/checkout");
    }

    const calculateTotal = () => {
        const total = cart && cart.reduce((acc, c) => {
            return acc + (parseInt(c.price) * c.count);
        }, 0);

        return total;
    }

    return (
        <div className="cart-summary">
            <p className='cart-summary-title'> TOTAL COST</p>
            <p className="cart-summary-price"> { 'R ' + calculateTotal() }</p>
            {
                user ?
                (
                    <button
                            className="cart-checkout-btn"
                            onClick={saveOrderToDb}
                            disabled={!cart.length}
                        >
                            PROCEED TO CHECKOUT
                    </button>
                ) : (
                    <Link 
                        className="link" 
                        to= {{
                            pathname:"/auth/signin",
                            state: {
                                from: "/cart"
                            }
                        }}

                    >
                        <button className="cart-checkout-btn">LOGIN TO CHECKOUT</button>
                    </Link>
                )
            }
        </div>
    )
}

export default Cart1Summary;
