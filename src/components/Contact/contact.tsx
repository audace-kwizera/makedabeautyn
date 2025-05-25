import React from 'react'
import { Button } from '../ui/button'

const Contactbody = () => {
  return (
    <div className='container container__contact'>

      {/* Title */}
      <div className='container__contact__header'>
        <span className='container__contact__header__title__contact container__contact__header container__contact__header__title'>CONTACT</span>
        <span className='container__contact__header__description__contact container__contact__header container__contact__header__description'>N'hésitez pas à nous contacter pour plus d'informations, ou envoyer nous un message en remplissant ce formulaire</span>
      </div>

      {/* Informations */}
      <div className='container__body container__body__contact container__body__contact__text'>
        <div className='body__contact__text body__contact__text__color'>
          {/* Addresse */}
          <span>4 bis Rue du Rhin</span>
          <span>Bischwiller, 67240, France</span>
        </div>

        <div className='body__contact__text'>
          {/* Mail */}
          <span>contact@makedabeauty.com</span>
        </div>

        <div className='body__contact__text body__contact__text__color'>
          {/* Telephone */}
          <span>Numéro</span>
        </div>

      </div>

      {/* Formulaire */}
      <div className='container__body container__body__contact'>

        {/* Form */}
        <div className='container__body__contact__form'>
          <form
            className="body__contact__form"
          // onSubmit={handleSubmit}
          >
            {/* Coordoonées */}
            <div className='container__body__contact__form__information'>
              <div className="container__body__contact__form__input">
                {/* Votre Name */}
                {/* <label htmlFor="name">Votre Nom : </label> */}
                <input
                  className="body__contact__form__input"
                  type="text"
                  name="name"
                  // value={name}
                  placeholder="Votre Nom"
                // onChange={handleChange}
                />
              </div>
              <div className="container__body__contact__form__input">
                {/* Votre Prénom */}
                {/* <label htmlFor="name">Votre adresse mail : </label> */}
                <input
                  className="body__contact__form__input"
                  type="text"
                  name="name"
                  // value={name}
                  placeholder="Votre Adresse Mail"
                // onChange={handleChange}
                />
              </div>
            </div>

            {/* Message */}
            <div className='container__body__contact__form__information__message'>
              <div className="container__body__contact__form__input">
                {/* Votre Message */}
                {/* <label htmlFor="name">Votre message : </label> */}
                <textarea
                  className="body__contact__form__input body__contact__form__input__message"
                  name="name"
                  rows={5}
                  // value={name}
                  placeholder="Votre message"
                // onChange={handleChange}
                />
              </div>
            </div>

            {/* Section Bouton */}
            <div className='container__homecover__button'>
              <Button className='container__homecover__button__primary'>Envoyer</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contactbody