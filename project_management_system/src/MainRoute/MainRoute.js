import './MainRoute.scss';
import Header from '../Header/Header';
import ProfileSidePanel from '../ProfileSidePanel/ProfileSidePanel';
import TasksList from '../TasksList/TasksList';
//import BoardRoute from '../BoardRoute/BoardRoute';
import Column from '../Column/Column';
import tasks from '../data/tasksList';
import { ModalContext } from "../ModalWindow/ModalContext";
import { nanoid } from 'nanoid';
import React, { useRef, useState, useContext } from 'react';

export default function MainRoute() {
    const [board, setBoard] = useState(tasks);
    const [tasksClass, setTasksClass] = useState('hidden');
    //const [tasksId, setTasksId] = useState('');
    const [boardClass, setBoardClass] = useState('');
    const [currentTask, setCurrentTask] = useState([]);
    const [currentTaskData, setCurrentTaskData] = useState([]);

    const mainContent = useRef();
    const profileSidenav = useRef();
    const editInput = useRef();

    
 
    const { openModal, closeModal } = useContext(ModalContext);

    const handleClickRemoveButton = (event) => {
        openModal({
            title: 'Confirm the action',
            children: <>
            <p className='popup-text'>Do you really want to delete the board?</p>
            <div className='popup-buttons-wrapper'>
                <button className='app_button dark-button popup-btn' onClick={() => deleteBoardHandler(event.target.id)}>Delete</button>
                <button onClick={closeModal} className='app_button light-button'>Cancel</button>
            </div>
            </>
        });
    }

    const handleClickRemoveProfileButton = () => {
        openModal({
            title: 'Confirm the action',
            children: <>
            <p className='popup-text'>Do you really want to delete your profile?</p>
            <div className='popup-buttons-wrapper'>
                <button className='app_button dark-button popup-btn' onClick={backToMainPage}>Delete</button>
                <button onClick={closeModal} className='app_button light-button'>Cancel</button>
            </div>
            </>
        });
    }

    const handleClickEditButton = (event) => {
        openModal({
            title: 'Edit title',
            children: <>
            <input ref={editInput} className='popup-input' placeholder='type in a new title'/>
            <div className='popup-buttons-wrapper'>
                <button className='app_button dark-button popup-btn' onClick={() => editBoardTitleHandler(event.target.id)}>Save</button>
                <button onClick={closeModal} className='app_button light-button'>Cancel</button>
            </div>
            </>
            
        });
    }

    const backToMainPage = () => {
        closeModal();
        window.location='/'
    }

    const backToMainRoute = () => {
        setTasksClass('hidden');
        setBoardClass('');
    }

    const openTask =(event) => {
        //сделать проверку, чтобы переключение на другую страницу 
        //было только на нажатию на карточку (не кнопки удалить и редактировать)
        event.stopPropagation();
        const array = board.filter(task => task.id === event.target.id);
        setCurrentTask(array[0]);
        setCurrentTaskData(array[0].tasks)
        //setTasksId(event.target.id);
        setTasksClass('');
        setBoardClass('hidden');
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
        const newBoard = board.filter(task => task.id !== id);
        setBoard(newBoard);
        closeModal();
    }

    const editBoardTitleHandler = (titleId) => {
        let title = editInput.current.value;
        const newBoard = board.map(task => {
            if (task.id === titleId) {
                task.title = title;
            }
            return task;
        });
        setBoard(newBoard);
        closeModal();
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
                        <TasksList data={board} editBoardTitle={handleClickEditButton} handleEditTitle={editBoardTitleHandler} deleteBoard={handleClickRemoveButton} openTask={openTask} />
                    </div>
                </section>

                <section className={`main-route-content ${tasksClass}`}>
                    <div className='route-button-wrapper'>
                        <button className='app_button dark-button' onClick={backToMainRoute}>
                            <span className='back-icon'></span>
                            <span className='dark-button-title'>Back</span>
                        </button>
                        <h3>{currentTask.title}</h3>
                        <button className='app_button dark-button'>
                            <span className='add-column-icon'></span>
                            <span className='dark-button-title'>Add column</span>
                        </button>
                    </div>
                    <div className='route-tasks-wrapper'>
                        {currentTaskData.map(item=><Column key={nanoid()} title={item.title} tasks={item.task} editTitle={handleClickEditButton}/>)}
                    </div>
                </section>
                <ProfileSidePanel closeSidenav={closeSidenav} profileSidenav={profileSidenav} openPopUp={handleClickRemoveProfileButton}/>
            </div>
        </main>
        </>
    )
}