import './BoardRoute.scss';
import NewHeader from '../NewHeader/NewHeader';
import ProfileSidePanel from '../ProfileSidePanel/ProfileSidePanel';

export default function BoardRoute(proprs) {

    return (
        <>
            <NewHeader openSidenav={proprs.openSidenav} />
            <main className='main-route-page' >
                <div className='wrapper' >
                    <section className='main-route-content' >
                        <div className='route-button-wrapper'>
                            <button className='app_button dark-button'>
                                <span className='back-icon'></span>
                                <a href='/main-route' className='dark-button-title'>Back</a>
                            </button>
                            <h3>New board</h3>
                            <button className='app_button dark-button'>
                                <span className='add-column-icon'></span>
                                Add column
                            </button>
                        </div>
                        
                    </section>
                    <ProfileSidePanel />
                </div>
            </main>
        </>
    )
}