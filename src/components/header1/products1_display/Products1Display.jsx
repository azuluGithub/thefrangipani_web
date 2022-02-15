import './Products1Display.css';
import kidIcon from '../../../images/icons/kidIcon.png';
import faceIcon from '../../../images/icons/faceIcon.png';
import feetIcon from '../../../images/icons/feetIcon.png';
import bodyIcon from '../../../images/icons/bodyIcon.png';

const Products1Display = () => {
    return (
        <div className="products1-display-container">
            <div className="products1-display">
                <img 
                    alt='header background img' 
                    src={faceIcon}
                    className='products1-display-img'
                />
                <div className='products1-display-name'>face</div>
            </div>
            <div className="products1-display">
                <img 
                    alt='header background img' 
                    src={bodyIcon}
                    className='products1-display-img'
                />
                <div className='products1-display-name'>body</div>
            </div>
            <div className="products1-display">
                <img 
                    alt='header background img' 
                    src={feetIcon}
                    className='products1-display-img'
                />
                <div className='products1-display-name'>feet</div>
            </div>
            <div className="products1-display">
                <img 
                    alt='header background img' 
                    src={kidIcon}
                    className='products1-display-img'
                />
                <div className='products1-display-name'>kids</div>
            </div>
        </div>
    )
}

export default Products1Display;