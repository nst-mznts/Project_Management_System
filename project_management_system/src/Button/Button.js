import { NavLink } from "react-router-dom";

export default function Button(props) {
    return (
        <button className={`app_button ${props.classes}`}>
            <span className={props.span}></span>
            <NavLink to={props.to} className={props.link}>{props.title}</NavLink>
        </button>
    )
}