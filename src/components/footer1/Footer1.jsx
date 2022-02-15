import { FaRegCopyright } from  "react-icons/fa";

import './Footer1.css';

const Footer1 = () => {
    return (
        <div className='footer1'>
            <div className='footer1-wrapper'>
                <FaRegCopyright className='footer1-icon'/>
                <span className='footer1-text'>The Frangipani. All rights reserved.</span>
            </div>
        </div>
    )
}

export default Footer1;