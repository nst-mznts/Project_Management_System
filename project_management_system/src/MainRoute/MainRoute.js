import './MainRoute.css';
import NewHeader from '../NewHeader/NewHeader';
import ProfileSidePanel from '../ProfileSidePanel/ProfileSidePanel';
import { useRef } from 'react';

export default function MainRoute() {
    const profileSidenav = useRef();

    const closeSidenav = (e) => {
        e.preventDefault();
        profileSidenav.current.style.width = "0";
    }
    const openSidenav = (e) => {
        e.preventDefault();
        profileSidenav.current.style.width = "260px";
    }

    return (
        <>
        <NewHeader openSidenav={openSidenav} />
        <main className='main-route-page'>
            <div className='wrapper'>
                <ProfileSidePanel closeSidenav={closeSidenav} profileSidenav={profileSidenav} />
            </div>
        </main>
        </>
    )
}