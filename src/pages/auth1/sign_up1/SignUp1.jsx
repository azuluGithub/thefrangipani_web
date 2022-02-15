//npm import
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//local imports
import "../auth1.css";
import NavBar1 from '../../../components/navbar1/NavBar1';
import { clearMessagesAction } from '../../../store/actions/authActions';

const SignUp1 = () => {

    //shows the selected tab on navbar
    const selectedPage = 'auth';

    //form values which changes when values from input changes
    const [ firstname, setFirstname ] = useState('');
    const [ lastname, setLastname ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ cpassword, setCpassword ] = useState('');

    //when form is submitted, submit values to node server
    const dispatch = useDispatch();
    const handleFormSubmit = e => {
        e.preventDefault();
    }

    //get the loading from state inorder to disable the button when sending data to the server
    const isLoading = useSelector((state) => state.auth.isLoading);

    //get the success or error message after request has been processed
    const message = useSelector((state) => state.auth.message);

    //clear state and success or error messages after 4s
    setTimeout(() => {
        if (message.length > 0) {
            dispatch(clearMessagesAction());
        }
        if (message.includes('Please verify your email')) {
            setFirstname('');
            setLastname('');
            setEmail('');
            setPassword('');
            setCpassword('');
        }
    }, 4000);

    //set alert color for success and error messages
    const messageClass = message => {
        return message.includes('Please verify your email') ? 
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
                        <p className='auth1-header'>sign up</p>
                        { message ? messageClass(message) : ''}
                        <label className='auth1-label'>firstname:</label>
                        <input
                            type="text" 
                            name="firstname" 
                            className="auth1-input" 
                            placeholder='e.g jon'
                            value={firstname}
                            onChange={(e) => setFirstname(e.target.value)}
                        />
                        <label className='auth1-label'>lastname:</label>
                        <input 
                            type="text" 
                            name="lastname" 
                            className="auth1-input" 
                            placeholder='e.g snow'
                            value={lastname}
                            onChange={(e) => setLastname(e.target.value)}
                        />
                        <label className='auth1-label'>email:</label>
                            <input 
                            type="email" 
                            name="email" 
                            className="auth1-input" 
                            placeholder='e.g jonsow@gmail.com'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label className='auth1-label'>password:</label>
                        <input 
                            type="password" 
                            name="password" 
                            className="auth1-input"
                            autoComplete='off'
                            placeholder='e.g @j0n5n0W'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <label className='auth1-label'>confirm password:</label>
                        <input 
                            type="password" 
                            name="cpassword" 
                            className="auth1-input" 
                            placeholder='e.g @j0n5n0W'
                            value={cpassword}
                            autoComplete='off'
                            onChange={(e) => setCpassword(e.target.value)}
                        />
                        <div className='auth1-bottom-container'>
                            <button
                                disabled={isLoading}
                                className='auth1-btn'
                                type="submit"
                            > sign up </button>
                            <Link className='link' to='/auth/signin'>
                                <p className='auth1-link'>log into your account</p>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUp1;