import './Column.scss';

export default function Column(props) {

    return (
        <section className='column'>
            <div className='task-column'>
                <p >New task</p>
                <button className='tasks_button' onClick={props.editTitle}>
                    <span className='tasks_button-icon edit-icon' ></span>
                </button>
            </div>

            <button className='app_button dark-button'>
                <span className='add-icon'></span>
                Add task
            </button>
            
            <div className='task-column'>
            
            </div>
        </section>
    )
}