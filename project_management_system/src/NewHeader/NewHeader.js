import './NewHeader.css';
import Logo from '../Logo/Logo';
import Button from '../Button/Button';
import buttons from '../data/buttonsList';

export default function NewHeader() {
    return (
        <header>
            <div className='wrapper'>
                <nav className='header-navigation'>
                    <Logo />
                    <div className='header_button_icon'>
                        <span className='add-icon'></span>
                    </div>
                    <div className='header_button-wrapper'>
                        <div className='language-switch'>
                            <button className='language language-en active'>EN</button>
                        </div>
                        <Button classes={buttons.logout.classes} title={buttons.logout.title} span={buttons.logout.span} link={buttons.logout.link} to={buttons.logout.to} />
                        <Button classes={buttons.account.classes} title={buttons.account.title} span={buttons.account.span} link={buttons.account.link} to={buttons.account.to} />
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
