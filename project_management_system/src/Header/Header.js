import './Header.css';
import { NavLink } from "react-router-dom";

export default function Header() {

    return (
        <header>
            <div className='wrapper'>
                <nav className='header-navigation'>
                    <NavLink to='/'>
                        <div className='logo-wrapper'>
                            <span className='logo-icon'></span>
                            <h1 className='logo'>PMApp</h1>
                        </div>
                    </NavLink>
                    <div className='language-switch'>
                        <button className='language language-en active'>EN</button>
                        <button className='language language-ru'>RU</button>
                    </div>
                    <div className='header_button-wrapper'>
                        <button className='app_button dark-button'>
                            <span className='login-icon'></span>
                            <NavLink to='/login' className='dark-button-title'>Log in</NavLink>
                        </button>
                        <button className='app_button dark-button'>
                            <span className='signup-icon'></span>
                            <NavLink to='/signup' className='dark-button-title'>Sign up</NavLink>
                        </button>
                    </div>
                    <div className="burger" hidden>
                        <span className="burger-line burger-line-first"></span>
                        <span className="burger-line burger-line-second"></span>
                        <span className="burger-line burger-line-third"></span>
                        <span className="burger-line burger-line-fourth"></span>
                    </div>
                </nav>
            </div>
        </header>
    )
}
