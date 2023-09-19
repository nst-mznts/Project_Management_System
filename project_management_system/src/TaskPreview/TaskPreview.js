import './TaskPreview.scss';

export default function TaskPreview(props) {

    return (
        <>
            <section className='tasks-list-wrapper' id={props.id} onClick={props.openTask}>
                <p className={`tasks-title ${props.taskPreviewTitle}`} id={props.id}>{props.title}</p>
                <div className='tasks_button-wrapper'>
                    <button className='tasks_button' id={props.id} onClick={props.editBoardTitle}>
                        <span className='tasks_button-icon edit-icon' id={props.id}></span>
                    </button>
                    <button className='tasks_button' id={props.id} onClick={props.deleteBoard}>
                        <span className='tasks_button-icon delete-icon' id={props.id}></span>
                    </button>
                </div>
            </section>
        </>
    )
}