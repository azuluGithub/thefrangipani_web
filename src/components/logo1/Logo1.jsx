//local imports
import './Logo1.css';
import logo1 from '../../images/logo/logo1.png';
import logo1Small from '../../images/logo/logo1Small.png';

const Logo1 = () => {
    return (
        <div className='logo1'>
            <img 
                alt='app logo img' 
                src={logo1}
                className='logo1-big'
            />
            <img 
                alt='app logo img' 
                src={logo1Small}
                className='logo1-small'
            />
        </div>
    )
}

export default Logo1;
