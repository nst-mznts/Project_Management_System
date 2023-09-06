import './TaskPreview.scss';

export default function TaskPreview(props) {

    return (
        <>
            <section className='tasks-list-wrapper' >
                <input type='text' className="tasks-title" defaultValue={props.title} id={props.id} onChange={props.handleEditTitle} onClick={props.openTask}/>
                <button className='tasks_button'  onClick={props.openPopUp}>
                    <span className='tasks_button-icon delete-icon' ></span>
                </button>
            </section>
        </>
    )
}