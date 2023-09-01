import './Error.scss';
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
                        
                        <button className='app_button dark-button'><a href='/main-route' className='dark-button-title'>Back</a></button>
                    </section>
                </div>
            </main>
        </>
    )
}