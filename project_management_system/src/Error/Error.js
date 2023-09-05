import './Error.scss';
import { NavLink } from "react-router-dom";
import NewHeader from '../NewHeader/NewHeader';

export default function Error() {

    return (
        <>
            <NewHeader />
            <main className='error-page' >
                <div className='wrapper' >
                    <section className='error-content' >
                        <h4>Oops... Page not found!</h4>
                        <section className='error-404'>
                            <div className='error-icons-wrapper left'>
                                <span className='logo-icon'></span>
                                <span className='logo-icon small'></span>
                            </div>
                            <p className='error'>404</p>
                            <div className='error-icons-wrapper right'>
                                <span className='logo-icon small'></span>
                                <span className='logo-icon'></span>
                            </div>
                        </section>
                        <NavLink className='app_button dark-button' to='/main-route'>
                            <span className='back-icon'></span>
                            <span className='dark-button-title'>Back</span>
                        </NavLink>
                    </section>
                </div>
            </main>
        </>
    )
}