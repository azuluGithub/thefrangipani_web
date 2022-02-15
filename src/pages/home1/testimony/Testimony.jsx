import StarRatings from './star_ratings/StarRatings';
import './Testimony.css';
import phoe from '../../../images/user/phoe.jpg';
import darren from '../../../images/user/darren.jpg';
import bethany from '../../../images/user/bethany.jpg';

const Testimony = () => {
    return (
        <>
            <div className='testimony-before-box'></div>
            <div className='testimony'>
                <div className='testimony-wrapper'>
                    <p className='testimony-heading'>Testimonials</p>
                    <div className='testimony-split'>
                        <div className='testimony-text-container'>
                            <StarRatings />
                            <p className='testimony-text'>
                                {'“It\'s just nice! The smell and feel on my lips are great”'}
                            </p>
                            <div className='testimony-bottom'>
                                <img 
                                    alt='customer img' 
                                    src={phoe}
                                    className='testimony-user-image'
                                />
                                <div className='testimony-name-box'>
                                    <p className='testimony-name'>Phoebe-Ann</p>
                                    <p className='testimony-name-position'>Customer</p>
                                </div>
                            </div>
                        </div>
                        <div className='testimony-text-container'>
                            <StarRatings />
                            <p className='testimony-text'>
                                {'“Best products I\'ve used in a long time, highly recommended ”'}
                            </p>
                            <div className='testimony-bottom'>
                                <img 
                                    alt='customer img' 
                                    src={darren}
                                    className='testimony-user-image'
                                />
                                <div className='testimony-name-box'>
                                    <p className='testimony-name'>Darren</p>
                                    <p className='testimony-name-position'>Customer</p>
                                </div>
                            </div>
                        </div>
                        <div className='testimony-text-container'>
                            <StarRatings />
                            <p className='testimony-text'>
                                {'“I carry my lip balms where ever I go. Frangipani lip balms are simply the best ”'}
                            </p>
                            <div className='testimony-bottom'>
                                <img 
                                    alt='customer img' 
                                    src={bethany}
                                    className='testimony-user-image'
                                />
                                <div className='testimony-name-box'>
                                    <p className='testimony-name'>Bethany</p>
                                    <p className='testimony-name-position'>Customer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='testimony-before-after'></div>
        </>
    )
}

export default Testimony;
