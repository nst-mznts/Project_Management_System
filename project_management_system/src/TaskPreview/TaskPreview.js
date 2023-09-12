import './TaskPreview.scss';

export default function TaskPreview(props) {

    return (
        <>
            <section className='tasks-list-wrapper' >
                {/** <input type='text' className="tasks-title" defaultValue={props.title} id={props.id} onChange={props.handleEditTitle} onClick={props.openTask}/>*/}
                <p className={`tasks-title ${props.taskPreviewTitle}`} onClick={props.openTask}>{props.title}</p>
                <input className={`tasks-title ${props.taskPreviewInput}`} id={props.id} onChange={props.handleEditTitle} placeholder='type in a new title'/>
                <div className='tasks_button-wrapper'>
                    <button className='tasks_button' id={props.id} onClick={props.handleEditTitle}>
                        <span className='tasks_button-icon edit-icon' id={props.id}></span>
                    </button>
                    <button className='tasks_button' id={props.id} onClick={props.openPopUp}>
                        <span className='tasks_button-icon delete-icon' id={props.id}></span>
                    </button>
                </div>
            </section>
        </>
    )
}