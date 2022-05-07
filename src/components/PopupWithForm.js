import React from 'react';

function PopupWithForm (props) {

        return (
            <div className={`popup popup_type_${props.name} popup_opened`}>
                <div className="popup__container">
                    <form action="#" name={props.name} className={`popup__form popup__form_type_${props.name}`} noValidate>
                        <h2 className="popup__title">{props.title}</h2>
                        {props.children}
                        <button type="submit" className={`popup__button-submit popup__button-submit_type_${props.name}`}>Сохранить
                        </button>
                    </form>
                    <button type="button" name={`button-close_type_${props.name}`} aria-label="Закрыть" onClick={props.onClose}
                            className={`popup__button-close popup__button-close_type_${props.name}`}></button>
                </div>
            </div>
        )

}
export default PopupWithForm;