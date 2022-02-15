import './About.css';
import lipBalms from '../../../images/transparent/lipBalms.png';

const About = () => {
    return (
        <div className='about'>
            <div className='about-wrapper'>
                <div className='about-split'>
                    <div className='about-image-box'>
                        <div className='about-sm-image-box'>
                            <img 
                                alt='header background img' 
                                src={lipBalms}
                                className='about-image'
                            />
                        </div>
                    </div>
                    <div className='about-content'>
                        <p className='about-content-header'>About Me</p>
                        <p className='about-content-text'>
                            Hello! My name is Frances. I am a Somatologist who is creating natural bath and body care products for home, with no waste from product manufacturing and recyclable or reusable packaging. Natural butters, oils, fragrances and soap bases are used to ensure clean chemical free products, perfect for your outer body. Our inner bodies are just as important. What we put into our bodies is as much a care as what we put onto our bodies. A blog of nutritional and treatment information will become available to allow you to take 100% care of your beautifully unique personage. Looking after yourself is more important than you realise.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
