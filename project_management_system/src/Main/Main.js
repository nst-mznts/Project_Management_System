import './Main.scss';
import main_img from './main_img.svg';
import Header from '../Header/Header';

export default function Main() {

    return (
        <>
        <Header />
        <main className='main-page'>
            <div className='wrapper'>
                <section className='main_content'>
                    <div className='main_features'>
                        <h2 className='header-h2'>Manage your daily tasks</h2>
                        <p className='paragraph main_paragraph'>Manage your daily tasks and perform them on time easily</p>
                        <h2 className='header-h2'>Main features:</h2>
                        <ul className='features-list'>
                            <li className='features-list-item'>Create boards</li>
                            <li className='features-list-item'>Create and transfer tasks</li>
                            <li className='features-list-item'>Search tasks</li>
                            <li className='features-list-item'>Adaptive layout</li>
                        </ul>
                        <a className='app_button colored-button' href='/login'>Get started</a>
                    </div>
                    <img src={main_img} className='main_content_image' alt='people' />
                </section>
            </div>
        </main>
        </>
    )
}
