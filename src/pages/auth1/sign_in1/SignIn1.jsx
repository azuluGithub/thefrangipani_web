//npm import
import { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

//local imports
import "../auth1.css";
import NavBar1 from '../../../components/navbar1/NavBar1';
import { clearMessagesAction } from '../../../store/actions/authActions';

const SignIn1 = ({ history }) => {

    const selectedPage = 'auth';
    const user = window.sessionStorage.getItem('user');
    const token = window.sessionStorage.getItem('token');

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    //when form is submitted, submit values to node server
    const dispatch = useDispatch();
    const handleFormSubmit = e => {
        e.preventDefault();
    }

    //get the loading from state inorder to disable the button when sending data to the server
    const isLoading = useSelector((state) => state.auth.isLoading);

    //get the message from redux
    const message = useSelector((state) => state.auth.message);
    
    //clear state success or error messages after 4s
    setTimeout(() => {
        if (message.length > 0) {
            dispatch(clearMessagesAction());
        }
    }, 4000);

    const messageClass = message => <p className='failure-message'>{message}</p>;

    if (token && user) {
        let  intended = history.location.state;
        if (intended) {
            //history.push(intended.form);
            return <Redirect to={intended.form} />;
        }
        if (user.role === "subscriber") {
            return <Redirect to="/subscriber"/>;
        } else {
            return <Redirect to="/admin" />
        }
    } 

    return (
        <div className='auth1'>
            <NavBar1 selectedPage={selectedPage}/>
            <div className='auth1-wrapper'>
                <div className='auth1-container'>
                    <form className='auth1-form' onSubmit={handleFormSubmit}>
                        <p className='auth1-header'>sign in</p>
                        { message ? messageClass(message) : ''}
                        <label className='auth1-label'>email:</label>
                            <input 
                            type="email" 
                            name="email" 
                            className="auth1-input" 
                            placeholder='e.g jonsnow@gmail.com'
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
                        <div className='auth1-bottom-container'>
                            <button
                                disabled={isLoading}
                                className='auth1-btn'
                                type="submit"
                            > sign in </button>
                            <div className='auth1-bottom-links'>
                                <Link className='link' to='/auth/signup'>
                                    <p className='auth1-link'>Create new account</p>
                                </Link>
                                <Link className='link' to='/auth/forgot'>
                                    <p className='auth1-link-forgot'>forgot password ?</p>
                                </Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignIn1;