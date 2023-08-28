import { NavLink } from "react-router-dom";
import Header from '../Header/Header';
import './Signup.css';

export default function Signup() {
    return (
        <>
        <Header />
        <main className='login-page'>
            <div className='wrapper'>
                <section className='login-content'>
                    <form className='login-form'>
                        <h2 className='form-title'>Registration</h2>
                        <div className='form-subtitle'>
                            <p className='form-text'>Already have an account? </p>
                            <NavLink to='/login' className='form-link'>Log in</NavLink>
                        </div>

                        <div className='input-wrapper'>
                            <input required id="name" type="text" placeholder=" " />
                            <label className='input-label' htmlFor="name">Name</label>
                        </div>
                        <div className='input-wrapper'>
                            <input required id="login" type="text" placeholder=" " />
                            <label className='input-label' htmlFor="login">Login</label>
                        </div>
                        <div className='input-wrapper'>
                            <input required id="password" type="password" placeholder=" " />
                            <label className='input-label' htmlFor="password">Password</label>
                        </div>
                        
                        <button type="submit" className='app_button dark-button submit-button'>Sign up</button>
                    </form>
                </section>
            </div>
        </main>
        </>
    )
}
