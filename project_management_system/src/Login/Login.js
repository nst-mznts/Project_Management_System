import { NavLink } from "react-router-dom";
import './Login.css';

export default function Login () {
    return (
        <main className='login-page'>
            <div className='wrapper'>
                <section className='login-content'>
                    <form className='login-form'>
                        <h2 className='form-title'>Log in</h2>
                        <div className='form-subtitle'>
                            <p className='form-text'>Don't have an account?</p>
                            <NavLink to='/signup' className='form-link'>Sign up</NavLink>
                        </div>

                        <div className='input-wrapper'>
                            <input required id="login" type="text" placeholder=" " />
                            <label className='input-label' htmlFor="login">Login</label>
                        </div>
                        <div className='input-wrapper'>
                            <input required id="password" type="password" placeholder=" " />
                            <label className='input-label' htmlFor="password">Password</label>
                        </div>
                        
                        <button type="submit" className='app_button dark-button submit-button'>Log in</button>
                    </form>
                </section>
            </div>
        </main>
    )
}
