import './Header.css';
import Logo from '../Logo/Logo';
import Dropdown from '../Dropdown/Dropdown';
import Button from '../Button/Button';
import buttons from '../data/buttonsList';
import { useState } from 'react';

export default function Header() {
    const [lang, setLang] = useState('EN');

    const clickHandler = (event) => {
        event.preventDefault();
        let id = event.target.id;
        setLang(id);
    }

    return (
        <header>
            <div className='wrapper'>
                <nav className='header-navigation'>
                    <Logo />
                    <div className='header_button-wrapper'>
                        <Dropdown clickHandler={clickHandler} lang={lang} />
                        <Button classes={buttons.login.classes} title={buttons.login.title} span={buttons.login.span} link={buttons.login.link} to={buttons.login.to} />
                        <Button classes={buttons.signup.classes} title={buttons.signup.title} span={buttons.signup.span} link={buttons.signup.link} to={buttons.signup.to} />
                    </div>
                </nav>
            </div>
        </header>
    )
}
