import './ProfileSidePanel.scss';

export default function ProfileSidePanel(props) {

    return (
        <>
        <div ref={props.profileSidenav} className="sidenav">
            <div className="closebtn" onClick={props.closeSidenav}>
                Hi, User
                <div className='close-button'><span className='close-icon'></span></div>
            </div>
            <div className='sidenav-text sidenav-link'>
                <span className='logout-icon'></span>
                Log out
            </div>
            <div onClick={props.openPopUp} className='sidenav-text sidenav-link'>
                <span className='bin-icon'></span>
                Delete profile
            </div>
        </div>
        </>
    )
}