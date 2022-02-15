//npm import
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

//local imports
import "../auth1.css";
import NavBar1 from '../../../components/navbar1/NavBar1';
import { clearMessagesAction } from '../../../store/actions/authActions';

const Forgot1 = () => {

    //shows the selected tab on navbar
    const selectedPage = 'auth';

    //form values which changes when values from input changes
    const [ email, setEmail ] = useState('');

    //when form is submitted, submit values to node server
    const dispatch = useDispatch();

    const handleFormSubmit = e => {
        e.preventDefault();
        //dispatch(forgotAction({ email }));
    }

    //get the loading from state inorder to disable the button when sending data to the server
    const isLoading = useSelector((state) => state.auth.isLoading);

    //get the message from redux
    const message = useSelector((state) => state.auth.message);

    //clear state and success or error messages after 4s
    setTimeout(() => {
        if (message.length > 0) {
            dispatch(clearMessagesAction());
        }
        if (message.includes('Please check your email')) {
            setEmail('');
        }
    }, 4000);

    //set alert color for success and error messages
    const messageClass = message => {
        return message.includes('Please check your email') ? 
            <p className='success-message'>{message}</p> 
            : 
            <p className='failure-message'>{message}</p>;
    }

    return (
        <div className='auth1'>
            <NavBar1 selectedPage={selectedPage}/>
            <div className='auth1-wrapper'>
                <div className='auth1-container'>
                    <form className='auth1-form' onSubmit={handleFormSubmit}>
                        <p className='auth1-header'>forgot password</p>
                        { message ? messageClass(message) : ''}
                        <label className='auth1-label'>enter email address:</label>
                        <input 
                            type="email" 
                            name="email" 
                            className="auth1-input" 
                            placeholder='e.g jonsnow@gmail.com'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <div className='auth1-bottom-container'>
                            <button
                                disabled={isLoading}
                                className='auth1-btn'
                                type="submit"
                            > submit </button>
                            <div className='auth1-bottom-links'>
                                <Link className='link' to='/auth/signin'>
                                    <p className='auth1-link'>log into your account</p>
                                </Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Forgot1;