import './MainRoute.scss';
import Header from '../Header/Header';
import ProfileSidePanel from '../ProfileSidePanel/ProfileSidePanel';
import TasksList from '../TasksList/TasksList';
import ModalWindow from '../ModalWindow/ModalWindow';
//import BoardRoute from '../BoardRoute/BoardRoute';
import tasks from '../data/tasksList';
import { nanoid } from 'nanoid';
import { useRef, useState } from 'react';

export default function MainRoute() {
    const [board, setBoard] = useState(tasks);
    const mainContent = useRef();
    const profileSidenav = useRef();
    const popup = useRef();


    const openTask =() => {
        window.location = '/board-route';
    }

    const openPopUp = () => {
        popup.current.classList.add('active');
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
        mainContent.current.style.width = "70%";
    }

    const BoardCreationHandler = () => {
        const newTask = {"id": nanoid(), "title": "New board", 'tasks': []};
        const newBoard = [...board, newTask];
        setBoard(newBoard);
    }

    const deleteBoardHandler = (id) => {
        const newBoard = board.filter(task => task.id !== id);
        setBoard(newBoard);
    }

    const deletionHandler = () => {
        console.log('delete');
    }

    const editBoardTitleHandler = (event) => {
        event.preventDefault();
        let title = event.target.value;
        const newBoard = board.map(task => {
            if (task.id === event.target.id) {
                task.title = title;
            }
            return task;
        });
        setBoard(newBoard);
    }

    return (
        <>
        <Header openSidenav={openSidenav} btnClass={''} startBtnClass={'hidden'}/>
        <main className='main-route-page' >
            <div className='wrapper' >
                <section className='main-route-content' >
                    <button className='app_button dark-button' onClick={BoardCreationHandler}>
                        <span className='add-icon'></span>
                        New board
                    </button>
                    <div className='boards-wrapper' ref={mainContent}>
                        <TasksList data={board} handleDeleteBoard={deleteBoardHandler} handleEditTitle={editBoardTitleHandler} openPopUp={openPopUp} openTask={openTask}/>
                    </div>
                </section>
                <ModalWindow  popup={popup} closePopUp={closePopUp} delete={deletionHandler}/>
                <ProfileSidePanel closeSidenav={closeSidenav} profileSidenav={profileSidenav} openPopUp={openPopUp}/>
            </div>
        </main>
        </>
    )
}