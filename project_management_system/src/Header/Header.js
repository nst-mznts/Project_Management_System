import './Header.scss';
import Logo from '../Logo/Logo';
import Dropdown from '../Dropdown/Dropdown';
import { NavLink } from "react-router-dom";
import { useRef, useState } from 'react';

export default function Header() {
    const [lang, setLang] = useState('EN');
    const dropdown = useRef();

    const clickHandler = (event) => {
        event.preventDefault();
        dropdown.current.style.display = 'block';
    }

    const languageHandler = (event) => {
        event.preventDefault();
        let id = event.target.id;
        setLang(id);
        dropdown.current.style.display = 'none';
    }

    return (
        <header>
            <div className='wrapper'>
                <nav className='header-navigation'>
                    <Logo />
                    <div className='header_button-wrapper'>
                        <Dropdown clickHandler={clickHandler} lang={lang} dropdown={dropdown} languageHandler={languageHandler}/>
                        <NavLink className='app_button dark-button' to='/login'>
                            <span className='login-icon'></span>
                            <span className='dark-button-title'>Log in</span>
                        </NavLink>
                        <NavLink className='app_button dark-button' to='/signup'>
                            <span className='signup-icon'></span>
                            <span className='dark-button-title'>Sign up</span>
                        </NavLink>
                    </div>
                </nav>
            </div>
        </header>
    )
}
