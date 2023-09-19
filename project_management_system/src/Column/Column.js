import Task from '../Task/Task';
import './Column.scss';

export default function Column(props) {

    return (
        <section className='column'>
            <div className='task-column'>
                <p >{props.title}</p>
                <div className='tasks_button-wrapper'>
                    <button className='tasks_button' id={props.id} onClick={props.editBoardTitle}>
                        <span className='tasks_button-icon edit-icon' id={props.id}></span>
                    </button>
                    <button className='tasks_button' id={props.id} onClick={props.deleteBoard}>
                        <span className='tasks_button-icon delete-icon' id={props.id}></span>
                    </button>
                </div>
            </div>

            <button className='app_button dark-button'>
                <span className='add-icon'></span>
                Add task
            </button>
            
            <div className='task-list'>
                {props.tasks.map(item=><Task task={item} />)}
            </div>
        </section>
    )
}