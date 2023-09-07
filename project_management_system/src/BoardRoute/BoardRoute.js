import './BoardRoute.scss';

export default function BoardRoute(props) {

    return (
        <>
            <section className={`main-route-content ${props.tasksClass}`} >
                <div className='route-button-wrapper'>
                    <button className='app_button dark-button' onClick={props.backToMainRoute}>
                        <span className='back-icon'></span>
                        <span className='dark-button-title'>Back</span>
                    </button>
                    <h3>New board {props.tasksId}</h3>
                    <button className='app_button dark-button'>
                        <span className='add-column-icon'></span>
                        <span className='dark-button-title'>Add column</span>
                    </button>
                </div>
            </section>
        </>
    )
}