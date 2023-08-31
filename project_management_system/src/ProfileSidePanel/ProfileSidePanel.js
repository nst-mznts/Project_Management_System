import './ProfileSidePanel.css';

export default function ProfileSidePanel(props) {

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
            <div onClick={props.openPopUp} className='sidenav-text'>
                <span className='bin-icon'></span>
                Delete profile
            </div>
        </div>
        </>
    )
}