import React, {useState, useEffect} from 'react';
import {api} from '../utils/Api.js';
import Card from "./Card.js";

function Main({onEditAvatar, onEditProfile, onAddPlace, onCardClick}) {

    const [userName, setUserName] = useState('');
    const [userDescription, setUserDescription] = useState('');
    const [userAvatar, setUserAvatar] = useState('');
    const [isProfileLoading, setIsProfileLoading] = useState(false);
    const [isCardsLoading, setIsCardsLoading] = useState(false);
    const [cards, setCards] = useState([]);


    useEffect(() => {
        setIsProfileLoading(true);
        api.getProfile()
            .then(res => {
                setUserName(res.name);
                setUserAvatar(res.avatar);
                setUserDescription(res.about);
            })
            .catch((err) => console.log('Ошибка загрузки профиля: ', err))
            .finally(() =>  setIsProfileLoading(false));
    }, [])

    useEffect(() => {
        setIsCardsLoading(true);
        api.getCards()
            .then(res => {
                setCards(res.map(card => {
                    return ({
                        _id: card._id,
                        name: card.name,
                        link: card.link,
                        likes: card.likes
                    })
                }))

            })
            .catch((err) => console.log('Ошибка загрузки карточек: ', err))
            .finally(() =>  setIsCardsLoading(false));
        ;
    }, [])


    return (
        <main className="content">
            <section className="profile page__adaptive page__profile">
                {isProfileLoading && <span>Профиль загружаются...</span>}
                <figure className="profile__avatar" onClick={onEditAvatar}>
                    <img src={userAvatar} alt="Аватар" className="profile__avatar-image"/>
                </figure>
                <div className="profile__info">
                    <div className="profile__info-text">
                        <h1 className="profile__title">{userName}</h1>
                        <p className="profile__subtitle">{userDescription}</p>
                    </div>
                    <button type="button" name="button-edit" aria-label="Редактировать профиль"
                            className="profile__button-edit" onClick={onEditProfile}></button>
                </div>
                <button type="button" name="button-add" aria-label="Добавить фото" className="profile__button-add"
                        onClick={onAddPlace}></button>
            </section>
            <section className="elements page__adaptive page__elements">
                {isCardsLoading && <span >Карточки загружаются...</span>}

                {
                    cards.map(card =>
                        (<Card card={card} onCardClick={onCardClick} key={card._id}/>)
                    )
                }
            </section>
        </main>
    )

}

export default Main;