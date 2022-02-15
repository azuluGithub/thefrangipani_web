import './Header1Contacts.css';

const Header1Contacts = () => {
    return (
        <div className='header1-contacts'>
            <div className='header1-contact header-contact-border-right'>
                <p className='header1-contact-label'> Email </p>
                <p className='header1-contact-detail'>thefrangipani@gmail.com</p>
            </div>
            <div className='header1-contact'>
                <p className='header1-contact-label'> Phone </p>
                <p className='header1-contact-detail'>+27 11 0000 0000</p>
            </div>
        </div>
    )
}

export default Header1Contacts;
