import './MainRoute.scss';
import NewHeader from '../NewHeader/NewHeader';
import ProfileSidePanel from '../ProfileSidePanel/ProfileSidePanel';
import TasksList from '../TasksList/TasksList';
import ModalWindow from '../ModalWindow/ModalWindow';
import tasks from '../data/tasksList';
import { nanoid } from 'nanoid';
import { useRef, useState } from 'react';

export default function MainRoute() {
    const [board, setBoard] = useState(tasks);
    const mainContent = useRef();
    const profileSidenav = useRef();
    const popup = useRef();


    const openPopUp = () => {

        popup.current.classList.add('active');

        //mainContent.current.style.width = "70%";
        
    }

    const closePopUp = () => {
        //popup.current.style.width = "0";
        popup.current.classList.remove('active');
        //popup.current.style.width = "0";
        //mainContent.current.style.width = "100%";
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
        const newTask = {"id": nanoid(), "title": "New board"};
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
        <NewHeader openSidenav={openSidenav} />
        <main className='main-route-page' >
            <div className='wrapper' >
                <section className='main-route-content' >
                    <button className='app_button dark-button' onClick={BoardCreationHandler}>
                        <span className='add-icon'></span>
                        New board
                    </button>
                    <div className='boards-wrapper' ref={mainContent}>
                        <TasksList data={board} handleDeleteBoard={deleteBoardHandler} handleEditTitle={editBoardTitleHandler} openPopUp={openPopUp}/>
                    </div>
                </section>
                <ModalWindow  popup={popup} closePopUp={closePopUp} delete={deletionHandler}/>
                <ProfileSidePanel closeSidenav={closeSidenav} profileSidenav={profileSidenav} openPopUp={openPopUp}/>
            </div>
        </main>
        </>
    )
}