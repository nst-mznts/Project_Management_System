import './Header.css';
import Logo from '../Logo/Logo';
import Button from '../Button/Button';
import buttons from '../data/buttonsList';

export default function Header() {
    return (
        <header>
            <div className='wrapper'>
                <nav className='header-navigation'>
                    <Logo />
                    <div className='header_button-wrapper'>
                        <div className='language-switch'>
                            <button className='language language-en active'>EN</button>
                        </div>
                        <Button classes={buttons.login.classes} title={buttons.login.title} span={buttons.login.span} link={buttons.login.link} to={buttons.login.to} />
                        <Button classes={buttons.signup.classes} title={buttons.signup.title} span={buttons.signup.span} link={buttons.signup.link} to={buttons.signup.to} />
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
