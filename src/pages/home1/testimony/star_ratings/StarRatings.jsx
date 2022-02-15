import './StarRatings.css';
import star from '../../../../images/icons/star.png';

const StarRatings = () => {
    return (
        <div className='testimony-stars'>
                <div className='testmony-star'>
                    <img 
                        alt='star rating img' 
                        src={star}
                        className='testimony-star-image'
                    />
                </div>
                <div className='testmony-star'>
                    <img 
                        alt='star rating img' 
                        src={star}
                        className='testimony-star-image'
                    />
                </div>
                <div className='testmony-star'>
                    <img 
                        alt='star rating img' 
                        src={star}
                        className='testimony-star-image'
                    />
                </div>
                <div className='testmony-star'>
                    <img 
                        alt='star rating img' 
                        src={star}
                        className='testimony-star-image'
                    />
                </div>
                <div className='testmony-star'>
                    <img 
                        alt='star rating img' 
                        src={star}
                        className='testimony-star-image'
                        />
                </div>
            </div>
    )
}

export default StarRatings
