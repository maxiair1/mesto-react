import React, {useRef} from "react";
import PopupWithForm from "./PopupWithForm";


function EditAvatarPopup(props){

    const inputLink = useRef();

    function handleSubmit(e) {
        // Запрещаем браузеру переходить по адресу формы
        e.preventDefault();
        //console.log('ref: ', inputLink.current.value)
        props.onUpdateAvatar({avatar: inputLink.current.value});
    }

    return (

    <PopupWithForm
        name={"profile-avatar"}
        title={"Обновить аватар?"}
        onClose={props.onClose}
        buttonText={'Сохранить'}
        onSubmit={handleSubmit}>

        <label className="popup__label">
            <input id="avatar-link" type="url" name="addAvatar-link" ref={inputLink}
                   placeholder="Ссылка на картинку"
                   className="popup__input popup__input_field_about" required/>
            <span className="popup__input-error avatar-link-error"></span>
        </label>
    </PopupWithForm>
    )
}

export default EditAvatarPopup;