import './index.css';

function App() {
  return (
    <div className="App">
      <div className="page">
        <header className="header page__header">
          <div className="header__logo"></div>
        </header>
        <main className="content">
          <section className="profile page__adaptive page__profile">
            <figure className="profile__avatar">
              <img src="" alt="Аватар" className="profile__avatar-image" />
            </figure>
            <div className="profile__info">
              <div className="profile__info-text">
                <h1 className="profile__title">Жак-Ив Кусто</h1>
                <p className="profile__subtitle">Исследователь океана</p>
              </div>
              <button type="button" name="button-edit" aria-label="Редактировать профиль"
                      className="profile__button-edit"></button>
            </div>
            <button type="button" name="button-add" aria-label="Добавить фото" className="profile__button-add"></button>
          </section>
          <section className="elements page__adaptive page__elements"></section>
        </main>
        <footer className="footer page__adaptive page__footer">
          <p className="footer__copyright">&copy; 2022 Mesto Russia</p>
        </footer>
        <div className="popup popup_type_profile-edit">
          <div className="popup__container">
            <form action="#" name="profile-form" className="popup__form popup__form_type_profile-edit" noValidate>
              <h2 className="popup__title">Редактировать профиль</h2>
              <label className="popup__label">
                <input id="profile-name" type="text" name="profile-name" value="" placeholder="Имя"
                       className="popup__input popup__input_field_name" required minLength="2" maxLength="40"/>
                  <span className="popup__input-error profile-name-error"></span>
              </label>
              <label className="popup__label">
                <input id="profile-about" type="text" name="profile-about" value="" placeholder="О себе"
                       className="popup__input popup__input_field_about" required minLength="2" maxLength="200"/>
                  <span className="popup__input-error profile-about-error"></span>
              </label>
              <button type="submit" className="popup__button-submit popup__button-submit_type_profile-edit">Сохранить
              </button>
            </form>
            <button type="button" name="button-close_type_profile-edit" aria-label="Закрыть"
                    className="popup__button-close popup__button-close_type_profile-edit"></button>
          </div>
        </div>
        <div className="popup popup_type_card-add">
          <div className="popup__container">
            <form action="#" name="addCard-form" className="popup__form popup__form_type_card-add" noValidate>
              <h2 className="popup__title">Новое место</h2>
              <label className="popup__label">
                <input id="card-name" type="text" name="addCard-name" value="" placeholder="Название"
                       className="popup__input popup__input_field_name" required minLength="2" maxLength="30"/>
                  <span className="popup__input-error card-name-error"></span>
              </label>
              <label className="popup__label">
                <input id="card-link" type="url" name="addCard-link" value="" placeholder="Ссылка на картинку"
                       className="popup__input popup__input_field_about" required/>
                  <span className="popup__input-error card-link-error"></span>
              </label>
              <button type="submit" className="popup__button-submit popup__button-submit_type_card-add">Сохранить
              </button>
            </form>
            <button type="button" name="button-close_type_card-add" aria-label="Закрыть"
                    className="popup__button-close popup__button-close_type_card-add"></button>
          </div>
        </div>
        <div className="popup popup_type_photo-open">
          <div className="popup__image-container">
            <img src="#" alt="" className="popup__image"/>
              <p className="popup__subtitle"></p>
              <button type="button" name="button-close_type_photo-open" aria-label="Закрыть"
                      className="popup__button-close popup__button-close_type_photo-open"></button>
          </div>
        </div>
        <div className="popup popup_type_card-delete">
          <div className="popup__container">
            <form action="#" name="deleteCard-form" className="popup__form popup__form_type_card-delete" noValidate>
              <h2 className="popup__title">Вы уверены?</h2>
              <button type="submit" className="popup__button-submit popup__button-submit_type_card-delete">Да</button>
            </form>
            <button type="button" name="button-close_type_card-delete" aria-label="Закрыть"
                    className="popup__button-close popup__button-close_type_profile-edit"></button>
          </div>
        </div>
        <div className="popup popup_type_profile-avatar">
          <div className="popup__container">
            <form action="#" name="profileAvatar-form" className="popup__form popup__form_type_profile-avatar"
                  noValidate>
              <h2 className="popup__title">Обновить аватар?</h2>
              <label className="popup__label">
                <input id="avatar-link" type="url" name="addAvatar-link" value="" placeholder="Ссылка на картинку"
                       className="popup__input popup__input_field_about" required />
                  <span className="popup__input-error avatar-link-error"></span>
              </label>
              <button type="submit"
                      className="popup__button-submit popup__button-submit_type_profile-avatar">Сохранить
              </button>
            </form>
            <button type="button" name="button-close_type_card-add" aria-label="Закрыть"
                    className="popup__button-close popup__button-close_type_card-add"></button>
          </div>
        </div>
      </div>

      <template id="template-card">
        <article className="element">
          <img src="#" alt="" className="element__image" />
            <div className="element__title-field">
              <h2 className="element__title"></h2>
              <div className="element__like">
                <button type="button" name="button-like" aria-label="Нравится" className="element__heart"></button>
                <span className="element__heart-count"></span>
              </div>

            </div>
            <button type="button" name="button-trash" aria-label="Удалить" className="element__trash"></button>
        </article>
      </template>
      {/*<header className="App-header">*/}
      {/*  <img src={logo} className="App-logo" alt="logo" />*/}
      {/*  <p>*/}
      {/*    Edit <code>src/App.js</code> and save to reload.*/}
      {/*  </p>*/}
      {/*  <a*/}
      {/*    className="App-link"*/}
      {/*    href="https://reactjs.org"*/}
      {/*    target="_blank"*/}
      {/*    rel="noopener noreferrer"*/}
      {/*  >*/}
      {/*    Learn React*/}
      {/*  </a>*/}
      {/*</header>*/}
    </div>
  );
}

export default App;
