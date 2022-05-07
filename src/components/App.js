import React, {useState} from 'react';
import '../index.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";

function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState('');


    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true);
    }


    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true);
    }


    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true)
    }


    function handleCardClick(card) {
        setSelectedCard(card);
        setIsOpen(true)
    }


    function closeAllPopups() {
        setIsOpen(false);
        setIsAddPlacePopupOpen(false);
        setIsEditProfilePopupOpen(false);
        setIsEditAvatarPopupOpen(false);
        setSelectedCard('');
    }



    return (
        <div className="App">
            <div className="page">
                <Header/>
                <Main
                    onEditAvatar={handleEditAvatarClick}
                    onEditProfile={handleEditProfileClick}
                    onAddPlace={handleAddPlaceClick}
                    onCardClick={handleCardClick}
                />
                <Footer/>
                {isEditProfilePopupOpen && <PopupWithForm
                    name={"profile-edit"}
                    title={"Редактировать профиль"}
                    onClose={closeAllPopups}>
                    <label className="popup__label">
                        <input id="profile-name" type="text" name="profile-name"  placeholder="Имя"
                               className="popup__input popup__input_field_name" required minLength="2" maxLength="40"/>
                        <span className="popup__input-error profile-name-error"></span>
                    </label>
                    <label className="popup__label">
                        <input id="profile-about" type="text" name="profile-about"  placeholder="О себе"
                               className="popup__input popup__input_field_about" required minLength="2"
                               maxLength="200"/>
                        <span className="popup__input-error profile-about-error"></span>
                    </label>
                </PopupWithForm>}
                {isAddPlacePopupOpen && <PopupWithForm
                    name={"card-add"}
                    title={"Новое место"}
                    onClose={closeAllPopups}>
                    <label className="popup__label">
                        <input id="card-name" type="text" name="addCard-name"  placeholder="Название"
                               className="popup__input popup__input_field_name" required minLength="2"
                               maxLength="30"/>
                        <span className="popup__input-error card-name-error"></span>
                    </label>
                    <label className="popup__label">
                        <input id="card-link" type="url" name="addCard-link"
                               placeholder="Ссылка на картинку"
                               className="popup__input popup__input_field_about" required/>
                        <span className="popup__input-error card-link-error"></span>
                    </label>
                </PopupWithForm>}
                {isEditAvatarPopupOpen && <PopupWithForm
                    name={"profile-avatar"}
                    title={"Обновить аватар?"}
                    onClose={closeAllPopups}>
                    <label className="popup__label">
                        <input id="avatar-link" type="url" name="addAvatar-link"
                               placeholder="Ссылка на картинку"
                               className="popup__input popup__input_field_about" required/>
                        <span className="popup__input-error avatar-link-error"></span>
                    </label>
                </PopupWithForm>}
                {isOpen && <ImagePopup card={selectedCard} onClose={closeAllPopups} isOpen={isOpen}/>}
            </div>
        </div>
    );
}

export default App;
