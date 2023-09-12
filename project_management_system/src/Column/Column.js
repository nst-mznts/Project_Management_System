import './Column.scss';

export default function Column() {

    return (
        <section className='column'>
            <div className='task-column'>
                <p >New task</p>
                <button className='tasks_button'>
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