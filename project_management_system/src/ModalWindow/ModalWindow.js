import React, { useContext, useState } from "react";
import './ModalWindow.scss';
import { ModalContext } from "./ModalContext";

export default function ModalWindow(props) {
    const { children, title } = props;
    const { closeModal } = useContext(ModalContext);

    const [closing, setClosing] = useState(false);

    const handleClose = () => {
        setClosing(true);

        const closeTimeout = setTimeout(() => {
            closeModal();
            clearTimeout(closeTimeout);
        }, 300)    
    }

    const backdropClasses = closing ? 'popup__bg backdrop-hide' : 'popup__bg';

    return (
        <>
            <div className={backdropClasses} onClick={handleClose}>
                <div className="popup" onClick={(event) => event.stopPropagation()}>
                    <div className="popup-header">
                        <h4 className="popup-header-title">{title}</h4>
                    </div>
                    {children}
                </div>
            </div>
        </>
    )
}