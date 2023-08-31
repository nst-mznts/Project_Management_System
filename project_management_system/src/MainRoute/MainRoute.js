import './MainRoute.css';
import NewHeader from '../NewHeader/NewHeader';
import ProfileSidePanel from '../ProfileSidePanel/ProfileSidePanel';
import TasksList from '../TasksList/TasksList';
import ModalWindow from '../ModalWindow/ModalWindow';
import tasks from '../data/tasksList';
import { nanoid } from 'nanoid';
import { useRef, useState } from 'react';

export default function MainRoute() {
    const [board, setBoard] = useState(tasks);
    const profileSidenav = useRef();
    const popup = useRef();

    const openPopUp = () => {
        popup.current.style.width = "260px";
    }

    const closePopUp = () => {
        popup.current.style.width = "0";
    }

    const closeSidenav = (e) => {
        e.preventDefault();
        profileSidenav.current.style.width = "0";
    }

    const openSidenav = (e) => {
        e.preventDefault();
        profileSidenav.current.style.width = "260px";
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

    const profileDeletionHandler = () => {
        window.location.href = "/";
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
        <main className='main-route-page'>
            <div className='wrapper'>
                <section className='main-route-content'>
                    <button className='app_button dark-button' onClick={BoardCreationHandler}>
                        <span className='add-icon'></span>
                        New board
                    </button>
                    <div className='boards-wrapper'><TasksList data={board} handleDeleteBoard={deleteBoardHandler} handleEditTitle={editBoardTitleHandler} popup={popup} /></div>
                </section>
                <ProfileSidePanel closeSidenav={closeSidenav} profileSidenav={profileSidenav} openPopUp={openPopUp}/>
                <ModalWindow popup={popup} closePopUp={closePopUp} delete={profileDeletionHandler}/>
            </div>
        </main>
        </>
    )
}