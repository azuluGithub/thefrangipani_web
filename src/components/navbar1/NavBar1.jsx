//npm package
import { Link } from "react-router-dom";
import { FaUser, FaShoppingBasket } from 'react-icons/fa';
//import { useSelector } from 'react-redux';

//local import
import "./NavBar1.css";
import Logo1 from "../logo1/Logo1";

const NavBar1 = ({ selectedPage }) => {
    
    //IF USER IS LOGGED
    const token = window.sessionStorage.getItem('token');
    const jsonUser = window.sessionStorage.getItem('user');

    let user = null;
    if (jsonUser) {
        user = JSON.parse(jsonUser);
    }
    
    //CONDITIONALLY RENDER HOME LINK: SUBSCRIBED USER, ADMIN, NOT LOGGED IN PEOPLE
    const routeUser = () => {
        if (token && user) {
            if (user.role === "subscriber") {
                return <Link className="link" to="/subscriber">
                    <span
                        className={ selectedPage === 'subscriber' ? "navbar1-item-selected navbar1-item" : "navbar1-item" }
                    >
                        home
                    </span>
                </Link>
            } else {
                return <Link className="link" to="/admin">
                    <span
                        className={ selectedPage === 'admin' ? "navbar1-item-selected navbar1-item" : "navbar1-item" }
                    >
                        home
                    </span>
                </Link>
            }
        } else {
            return <Link className="link" to="/">
                <span
                    className={ selectedPage === 'home' ? "navbar1-item-selected navbar1-item" : "navbar1-item" }
                >
                    home
                </span>
            </Link>
        }
    }

    //CONDITIONALLY RENDER USER LINK: SUBSCRIBED USER, ADMIN, NOT LOGGED IN PEOPLE
    const routeAuthUser = () => {
        if (token && user) {
            if (user.role === "subscriber") {
                return <Link  className="link" to="/subscriber/profile">
                    <div
                        className={ selectedPage === 'profile' ? "navbar1-item-selected navbar1-item-last" : "navbar1-item-last" }
                    >
                        <FaUser/>
                    </div>
                </Link>
            } else {
                return <Link className="link" to={`/admin/profile/${user._id}`}>
                    <div
                        className={ selectedPage === 'profile' ? "navbar1-item-selected navbar1-item-last" : "navbar1-item-last" }
                    >
                        <FaUser/>
                    </div>
                </Link>
            }
        } else {
            return <Link className="link" to="/auth/signin">
                <div
                        className={ selectedPage === 'auth' ? "navbar1-item-selected navbar1-item-last" : "navbar1-item-last" }
                    >
                        <FaUser/>
                    </div>
                </Link>
        }
    }

    return (
        <nav className="navbar1">
            <div className="navbar1-container">

                <Logo1 />

                <div className="navbar1-links">
                    {
                        routeUser()
                    }
                    <Link className="link" to='/shop'>
                        <span
                            className={ selectedPage === 'shop' ? "navbar1-item-selected navbar1-item" : "navbar1-item" }
                        >
                            shop
                        </span>
                    </Link>
                </div>

                <div className="navbar1-links">
                    <Link 
                        className="link" 
                        to="/cart"
                    >
                        <div
                            className={ selectedPage === 'cart' ? "navbar1-item-selected navbar1-cart" : "navbar1-cart" }
                        >
                            <FaShoppingBasket/>
                            <div className="navbar1-cart-badge">
                                { '4' }
                            </div>
                        </div>
                    </Link>
                    {
                        routeAuthUser()
                    }
                </div>
            </div>
        </nav>
    )
}

export default NavBar1;