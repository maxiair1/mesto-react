import React from "react";

function ImagePopup(props) {

    return (
        <div className={`popup popup_type_photo-open ${props.isOpen ? 'popup_opened' : ''}`}>
            <div className="popup__image-container">
                <img src={props.card.link} alt={props.card.name} className="popup__image"/>
                <p className="popup__subtitle">{props.card.title}</p>
                <button type="button" name="button-close_type_photo-open" aria-label="Закрыть"
                        className="popup__button-close popup__button-close_type_photo-open" onClick={props.onClose}></button>
            </div>
        </div>)
}

export default ImagePopup;