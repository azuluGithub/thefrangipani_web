import './ContactUs.css';

const ContactUs = () => {
    return (
        <div className='contact-us'>
            <div className='contact-us-wrapper'>
                <div className="contact-us-container">
                    <p className='contact-us-header'>Don't be shy! Contact me</p>
                    <form className='contact-us-form'>
                        <label className='contact-us-label'>Name:</label>
                        <input 
                            type="text" 
                            name="user_name" 
                            className="contact-us-input" 
                            placeholder=''
                            value=''
                            onChange={() => {}}
                        />
                        <label className='contact-us-label'>Email:</label>
                        <input 
                            type="text" 
                            name="user_email" 
                            className="contact-us-input" 
                            placeholder=''
                            value=''
                            onChange={() => {}}
                        />
                        <label className='contact-us-label'>Subject:</label>
                            <input 
                            type="text" 
                            name="user_subject" 
                            className="contact-us-input" 
                            placeholder=''
                            value=''
                            onChange={() => {}}
                        />
                        <textarea  
                            name="message"
                            value=''
                            onChange={() => {}}
                            id="contact-us-text-area" 
                            className="contact-us-text-area"
                        ></textarea>
                        <button
                            className='contact-us-btn'
                            type="submit"
                        > SUBMIT </button>
                    </form>
                    <div className="contact-us-message-container">
                        <p className="contact-us-message">
                            Keep an eye out for new developments!
                        </p>
                        <p className="contact-us-message">
                            Home products for natural healthy cleaning that are biodegradable will be available soon.
                        </p>
                        <p className="contact-us-message">
                            Natural living with the best nature has to offer is something we all need to strive for. 
                            Nature wasn't intended to harm but to help and by going natural we're helping nature back.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs;