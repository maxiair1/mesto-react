import React from "react";

function Card(props) {

    function handleClick() {
        props.onCardClick(props.card);
    }

    return (
        <article className="element" >
            <img src={props.card.link} alt={props.card.name} className="element__image" onClick={handleClick}/>
            <div className="element__title-field">
                <h2 className="element__title">{props.card.name}</h2>
                <div className="element__like">
                    <button type="button" name="button-like" aria-label="Нравится"
                            className="element__heart"></button>
                    <span className="element__heart-count">{props.card.likes.length}</span>
                </div>

            </div>
            <button type="button" name="button-trash" aria-label="Удалить" className="element__trash" ></button>
        </article>
    )
}
export default Card;