import './ModalWindow.css';

export default function ModalWindow(props) {

    return (
        <>
            <div ref={props.popup} className="popup">
                    <p className='popup-text'>Please confirm the action</p>
                    <div className='sidenav-buttons-wrapper'>
                        <button className='app_button light-button' onClick={props.delete}>Delete</button>
                        <button onClick={props.closePopUp} className='app_button colored-button'>Cancel</button>
                    </div>
            </div>
        </>
    )
}