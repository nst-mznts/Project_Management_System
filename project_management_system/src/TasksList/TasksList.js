import './TasksList.css';
import TaskPreview from '../TaskPreview/TaskPreview';

export default function TasksList(props) {

    return (
        <>
        {props.data.map((item, index) => <TaskPreview key={index} title={item.title} id={item.id} handleDeleteNote={props.handleDeleteNote} />)}
        </>
    )
}