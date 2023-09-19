import './Task.scss';

export default function Task(props) {

    return (
        <>
            <div className='task'>
                <p>{props.task}</p>
                <div className='tasks_button-wrapper'>
                    <button className='tasks_button' id={props.id} onClick={props.editBoardTitle}>
                        <span className='tasks_button-icon edit-icon' id={props.id}></span>
                    </button>
                    <button className='tasks_button' id={props.id} onClick={props.deleteBoard}>
                        <span className='tasks_button-icon delete-icon' id={props.id}></span>
                    </button>
                </div>
            </div>
        </>
    )
}