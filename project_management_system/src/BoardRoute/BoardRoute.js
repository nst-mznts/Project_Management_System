import './BoardRoute.scss';
import { NavLink } from "react-router-dom";
import Header from '../Header/Header';
import ProfileSidePanel from '../ProfileSidePanel/ProfileSidePanel';

export default function BoardRoute(proprs) {

    return (
        <>
            <Header openSidenav={proprs.openSidenav} btnClass={''} startBtnClass={'hidden'}/>
            <main className='main-route-page' >
                <div className='wrapper' >
                    <section className='main-route-content' >
                        <div className='route-button-wrapper'>
                            <NavLink className='app_button dark-button' to='/main-route'>
                                <span className='back-icon'></span>
                                <span className='dark-button-title'>Back</span>
                            </NavLink>
                            <h3>Board {proprs.id}</h3>
                            <button className='app_button dark-button'>
                                <span className='add-column-icon'></span>
                                <span className='dark-button-title'>Add column</span>
                            </button>
                        </div>
                        
                    </section>
                    <ProfileSidePanel />
                </div>
            </main>
        </>
    )
}