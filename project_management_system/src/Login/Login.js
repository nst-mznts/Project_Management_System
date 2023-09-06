import { NavLink } from "react-router-dom";
import { useRef, useState } from "react";
import Header from '../Header/Header';
import './Login.scss';

export default function Login () {
    let loginMessage = useRef();
    let passwordMessage = useRef();
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [formValid, setFormValid] = useState(false);

    

    const handleUserInput = (e) => {
        const input = e.target.value;

        switch(e.target.id){
            case 'login':
                setLogin(input);
                if (input.length === 0) {
                    loginMessage.current.classList.add('active');
                } else if (input.length > 0 && input.length < 4) {
                    loginMessage.current.innerText = 'Min length of login - 4 chars';
                    loginMessage.current.classList.add('active');
                } else if (input.length > 3) {
                    loginMessage.current.innerText = 'Please enter your login';
                    loginMessage.current.classList.remove('active');
                }
                break;
            case 'password':
                setPassword(input);
                if (input.length === 0) {
                    passwordMessage.current.classList.add('active');
                } else if (input.length > 0 && input.length < 8) {
                    passwordMessage.current.innerText = 'Min length of password - 8 chars';
                    passwordMessage.current.classList.add('active');
                } else if (input.length > 7) {
                    passwordMessage.current.innerText = 'Please enter your password';
                    passwordMessage.current.classList.remove('active');
                }
                break;
            default:
                break;
        }

        if (login.length > 3 && password.length > 7) {
            setFormValid(true);
        }
    }

    return (
        <>
        <Header btnClass={'hidden'} startBtnClass={''}/>
        <main className='login-page'>
            <div className='wrapper'>
                <section className='login-content'>
                    <form className='login-form' action="/main-route">
                        <h2 className='header-h2'>Log in</h2>
                        <div className='form-subtitle'>
                            <p className='paragraph'>Don't have an account?</p>
                            <NavLink to='/signup' className='form-link'>Sign up</NavLink>
                        </div>
                        <div className='input-wrapper'>
                            <div><p className="message-invalid" ref={loginMessage}>Please enter your login</p></div>
                            <input required id="login" name='login' defaultValue={login} className="form-input" type="text" placeholder=" " onChange={handleUserInput} />
                            <label className='input-label' htmlFor="login">Login</label>
                        </div>
                        <div className='input-wrapper'>
                            <div><p className="message-invalid" ref={passwordMessage}>Please enter your password</p></div>
                            <input required id="password" name='password' defaultValue={password} className="form-input" type="password" placeholder=" " onChange={handleUserInput} />
                            <label className='input-label' htmlFor="password">Password</label>
                        </div>
                        <button disabled={!formValid} type="submit" className='app_button dark-button submit-button'>Log in</button>
                    </form>
                </section>
            </div>
        </main>
        </>
    )
}
