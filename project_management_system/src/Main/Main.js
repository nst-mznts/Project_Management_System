import './Main.css';
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
                        <h2 className='main_content_title'>Manage your daily tasks</h2>
                        <p className='main_content_text'>Manage your daily tasks and perform them on time easily</p>
                        <h2 className='main_content_title'>Main features:</h2>
                        <ul>
                            <li>Create boards</li>
                            <li>Create and transfer tasks</li>
                            <li>Search tasks</li>
                            <li>Team Collaboration</li>
                            <li>Adaptive layout</li>
                        </ul>
                        <button className='app_button colored-button'><a href='/login'>Get started</a></button>
                        
                    </div>
                    <img src={main_img} className='main_content_image' alt='people' />
                </section>
            </div>
        </main>
        </>
    )
}
