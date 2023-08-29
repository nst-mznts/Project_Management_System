import './ProfileSidePanel.css';
import { useRef } from 'react';

export default function ProfileSidePanel(props) {
    const popup = useRef();

    const profileDeleteHandler = () => {
        popup.current.style.width = "260px";
    }

    const cancelHandler = () => {
        popup.current.style.width = "0";
    }

    return (
        <>
        <div ref={props.profileSidenav} className="sidenav">
            <div href=" " className="closebtn" onClick={props.closeSidenav}>
                Hi, User
                <div className='close-button'><span className='close-icon'></span></div>
            </div>
            <div className='sidenav-text'>
                <span className='logout-icon'></span>
                Log out
            </div>
            <div onClick={profileDeleteHandler} className='sidenav-text'>
                <span className='bin-icon'></span>
                Delete profile
            </div>
            <div ref={popup} className="popup">
                <p className='sidenav-text'>Are you sure you want to delete your account?</p>
                <div className='sidenav-buttons-wrapper'>
                    <button className='app_button light-button'><a href='/'>Delete profile</a></button>
                    <button onClick={cancelHandler} className='app_button colored-button'>Cancel</button>
                </div>
            </div>
        </div>
        </>
    )
}