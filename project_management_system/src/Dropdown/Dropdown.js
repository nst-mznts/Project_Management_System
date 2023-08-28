import './Dropdown.css';

export default function Dropdown(props) {

    return (
        <>
        <div className="dropdown">
            <div className='language-switch'>{props.lang}</div>
            <div className="dropdown-content" onClick={props.clickHandler}>
                <div className='language' id='EN'>EN</div>
                <div className='language' id='RU'>RU</div>
            </div>
        </div>
        </>
    )
}