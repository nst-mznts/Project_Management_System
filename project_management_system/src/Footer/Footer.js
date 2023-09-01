import './Footer.scss';

export default function Footer() {

    return (
        <footer>
            <div className='wrapper'>
            <nav className='header-navigation'>
                <p className='paragraph'>2023</p>
                <a className='link' href='https://github.com/nst-mznts' target='blank'>
                    <span className='git-icon'></span>
                    nst-mznts
                </a>
                <a href='https://rs.school/react/' target='blank'><img src='https://rs.school/images/rs_school_js.svg' className='rs_school-logo' alt='rs.school logo' /></a>
            </nav>
            </div>
        </footer>
    )
}