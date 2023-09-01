import './Dropdown.scss';

export default function Dropdown(props) {

    return (
        <>
        <div className="dropdown">
            <div className='language-switch' onClick={props.clickHandler}>{props.lang}</div>
            <div className="dropdown-content" ref={props.dropdown} onClick={props.languageHandler}>
                <div className='language' id='EN'>EN</div>
                <div className='language' id='RU'>RU</div>
            </div>
        </div>
        </>
    )
}