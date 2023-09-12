import './MainRoute.scss';
import Header from '../Header/Header';
import ProfileSidePanel from '../ProfileSidePanel/ProfileSidePanel';
import TasksList from '../TasksList/TasksList';
import ModalWindow from '../ModalWindow/ModalWindow';
import BoardRoute from '../BoardRoute/BoardRoute';
import tasks from '../data/tasksList';
import { nanoid } from 'nanoid';
import { useRef, useState } from 'react';

export default function MainRoute() {
    const [board, setBoard] = useState(tasks);
    const [tasksClass, setTasksClass] = useState('hidden');
    const [tasksId, setTasksId] = useState('');
    const [boardId, setBoardId] = useState('');
    const [boardClass, setBoardClass] = useState('');
    const [taskPreviewTitle, setTaskPreviewTitle] = useState('');
    const [taskPreviewInput, setTaskPreviewInput] = useState('hidden');

    const mainContent = useRef();
    const profileSidenav = useRef();
    const popup = useRef();
 


    const backToMainRoute = () => {
        setTasksClass('hidden');
        setBoardClass('');
    }

    const openTask =(event) => {
        console.log(event.target.id);
        setTasksId(event.target.id);
        setTasksClass('');
        setBoardClass('hidden');
    }

    const openPopUp = (event) => {
        popup.current.classList.add('active');
        console.log(event.target.id);
        setBoardId(event.target.id);
    }

    const closePopUp = () => {
        popup.current.classList.remove('active');
    }

    const closeSidenav = (e) => {
        e.preventDefault();
        profileSidenav.current.style.width = "0";
        mainContent.current.style.width = "100%";
    }

    const openSidenav = (e) => {
        e.preventDefault();
        profileSidenav.current.style.width = "260px";
        mainContent.current.style.width = "65%";
    }

    const BoardCreationHandler = () => {
        const newTask = {"id": nanoid(), "title": "New board", 'tasks': []};
        const newBoard = [...board, newTask];
        setBoard(newBoard);
    }

    const deleteBoardHandler = (id) => {
        closePopUp();
        const newBoard = board.filter(task => task.id !== id);
        setBoard(newBoard);
    }

    const editBoardTitleHandler = (event) => {
        event.preventDefault();
        setTaskPreviewInput('');
        setTaskPreviewTitle('hidden');
        /*
        let title = event.target.value;
        const newBoard = board.map(task => {
            if (task.id === event.target.id) {
                task.title = title;
            }
            return task;
        });*/
        //setBoard(newBoard);
        //setTaskPreviewInput('hidden');
        //setTaskPreviewTitle('');
    }

    return (
        <>
        <Header openSidenav={openSidenav} btnClass={''} startBtnClass={'hidden'}/>
        <main className='main-route-page' >
            <div className='wrapper' >
                <section className={`main-route-content ${boardClass}`} >
                    <button className='app_button dark-button' onClick={BoardCreationHandler}>
                        <span className='add-icon'></span>
                        New board
                    </button>
                    <div className='boards-wrapper' ref={mainContent}>
                        <TasksList data={board} handleEditTitle={editBoardTitleHandler} openPopUp={openPopUp} openTask={openTask} taskPreviewInput={taskPreviewInput} taskPreviewTitle={taskPreviewTitle}/>
                    </div>
                </section>
                <BoardRoute tasksClass={tasksClass} tasksId={tasksId} backToMainRoute={backToMainRoute}/>
                <ModalWindow  popup={popup} closePopUp={closePopUp} delete={deleteBoardHandler} boardId={boardId}/>
                <ProfileSidePanel closeSidenav={closeSidenav} profileSidenav={profileSidenav} openPopUp={openPopUp}/>
            </div>
        </main>
        </>
    )
}