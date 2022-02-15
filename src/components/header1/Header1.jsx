//npm package
import { Link } from "react-router-dom";

//local imports
import "./Header1.css";
import Header1Contacts from "./header1_contacts/Header1Contacts";
import Products1Display from "./products1_display/Products1Display";

import headerBg1 from '../../images/bg/headerBg1.png'

const Header1 = () => {
    
    return (
        <div className='header1'>
            <div className="header1-wrapper">
                <div className="header1-split">
                    <div className="header1-content">
                        <p className="header1-app-name-top">the</p>
                        <p className="header1-app-name-bottom">
                            frangi
                            <span className="header1-app-name-part">pani.</span>
                        </p>
                        <p className="header1-intro">
                            We create <strong>natural bath and body care products</strong> for home, with no waste from product manufacturing and recyclable or reusable packaging.
                        </p>
                        <Link className="link" to='/shop'>
                            <div className="header1-button-wrapper" >
                                <div className="header1-button" >shop now</div>
                            </div>
                        </Link>
                        <Products1Display />
                        <Header1Contacts />
                    </div>
                    <div className='header1-image-box'>
                        <img 
                            alt='header background img' 
                            src={headerBg1}
                            className='header1-bg'
                        />
                        <p className="header-image-big-letter">t
                            <span className="header-image-small-letter">f</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header1;