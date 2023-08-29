import './NewHeader.css';
import Logo from '../Logo/Logo';
import Dropdown from '../Dropdown/Dropdown';
import Button from '../Button/Button';
import buttons from '../data/buttonsList';
import { useState } from 'react';

export default function NewHeader(props) {
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
                    <div className='header_button_icon'>
                        <span className='add-icon'></span>
                    </div>
                    <div className='header_button-wrapper'>
                        <Dropdown clickHandler={clickHandler} lang={lang} />
                        <Button classes={buttons.logout.classes} title={buttons.logout.title} span={buttons.logout.span} link={buttons.logout.link} to={buttons.logout.to} />
                        <button onClick={props.openSidenav} className='app_button dark-button'>
                            <span className='user-icon'></span>
                            Edit profile
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
