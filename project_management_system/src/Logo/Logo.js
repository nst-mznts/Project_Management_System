import './Logo.scss';
import { NavLink } from "react-router-dom";

export default function Logo() {
    return (
        <>
            <NavLink to='/'>
                <div className='logo-wrapper'>
                    <span className='logo-icon'></span>
                    <h1 className='logo'>PMApp</h1>
                </div>
            </NavLink>
        </>
    )
}