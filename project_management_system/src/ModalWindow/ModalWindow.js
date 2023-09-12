import './ModalWindow.scss';

export default function ModalWindow(props) {

    return (
        <>
            <div ref={props.popup} className="popup__bg">
                <div className="popup">
                    <p className='popup-text'>Please confirm the action</p>
                    <div className='popup-buttons-wrapper'>
                        <button className='app_button dark-button popup-btn' onClick={() => props.delete(props.boardId)}>Delete</button>
                        <button onClick={props.closePopUp} className='app_button light-button'>Cancel</button>
                    </div>
                </div>
            </div>
        </>
    )
}