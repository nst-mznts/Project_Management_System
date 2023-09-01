import './TaskPreview.scss';

export default function TaskPreview(props) {

    return (
        <>
            <a href='/board-route' className='tasks-list-wrapper'>
                <input type='text' className="tasks-title" defaultValue={props.title} id={props.id} onChange={props.handleEditTitle}/>
                <button className='tasks_button'>
                    <span className='tasks_button-icon delete-icon' onClick={props.openPopUp}></span>
                </button>
            </a>
        </>
    )
}