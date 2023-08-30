import './TaskPreview.css';

export default function TaskPreview(props) {

    return (
        <>
            <section className='tasks-list-wrapper'>
                <h4>{props.title}</h4>
                <div className='buttons-list-wrapper'>
                    <button className='tasks_button'><span className='tasks_button-icon edit-icon'></span></button>
                    <button className='tasks_button'>
                        <span className='tasks_button-icon delete-icon' onClick={() => props.handleDeleteNote(props.id)}></span>
                    </button>
                </div>
            </section>
        </>
    )
}