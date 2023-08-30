import './MainRoute.css';
import NewHeader from '../NewHeader/NewHeader';
import ProfileSidePanel from '../ProfileSidePanel/ProfileSidePanel';
import TasksList from '../TasksList/TasksList';
import tasks from '../data/tasksList';
import { nanoid } from 'nanoid';
import { useRef, useState } from 'react';

export default function MainRoute() {
    const [board, setBoard] = useState(tasks);
    const profileSidenav = useRef();

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
        console.log(board);
    }

    const deleteBoardHandler = (id) => {
        const newBoard = board.filter((task) => task.id !== id);
        setBoard(newBoard);
        console.log(board);
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
                    <div className='boards-wrapper'><TasksList data={board} handleDeleteNote={deleteBoardHandler} /></div>
                </section>
                <ProfileSidePanel closeSidenav={closeSidenav} profileSidenav={profileSidenav} />
            </div>
        </main>
        </>
    )
}