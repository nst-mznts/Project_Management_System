import './TasksList.scss';
import TaskPreview from '../TaskPreview/TaskPreview';

export default function TasksList(props) {

    return (
        <>
        {props.data.map((item, index) => <TaskPreview key={index} title={item.title} id={item.id} handleDeleteBoard={props.handleDeleteBoard} handleEditTitle={props.handleEditTitle} openPopUp={props.openPopUp} popup={props.popup} closePopUp={props.closePopUp} delete={props.deletionHandler}/>)}
        </>
    )
}