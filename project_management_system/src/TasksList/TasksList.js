import './TasksList.scss';
import TaskPreview from '../TaskPreview/TaskPreview';

export default function TasksList(props) {

    return (
        <>
        {props.data.map((item, index) => <TaskPreview key={index} title={item.title} id={item.id} handleDeleteBoard={props.handleDeleteBoard} editBoardTitle={props.editBoardTitle}handleEditTitle={props.handleEditTitle} deleteBoard={props.deleteBoard} taskPreviewInput={props.taskPreviewInput} taskPreviewTitle={props.taskPreviewTitle} openTask={props.openTask}/>)}
        </>
    )
}