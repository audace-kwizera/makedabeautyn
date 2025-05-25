import React from 'react'
import { Button } from '../ui/button'

const HairneedlingBody = () => {
    return (

        <div className='container__hairneedling container__headspa container'>
            {/* Head Spa */}
            <div className='container__body__card'>
                {/* Title */}
                <div className="container__policy__header__hairneedling container__policy__header">
                    <span className="container__policy__header container__policy__header__title__body">
                        NOS FORMULES
                    </span>
                </div>

                {/* Body */}
                <div className='container__hairneedling__body container__card__hairneedling'>
                    {/* Card 1 */}
                    <div className='body__card__side__hairneedling__card__width body__card__side__hairneedling__card body__card__side__hairneedling container__body__card__hairneedling body__card__side body__card'>
                        {/* Photo */}
                        <div>
                            <img
                                src="https://res.cloudinary.com/dahc6jmn4/image/upload/v1734211493/ybazbdg9yqe5qcstkfkz.jpg"
                                alt="Féerique"
                                className='body__card__hairneedling__image__cover'
                            />
                        </div>
                        {/* Title */}
                        <div className='body__card__hairneedling__title'>
                            <span className='body__card__hairneedling__title__name'>HAIRNEEDLING</span>
                            <span className='body__card__hairneedling__title__name'>PRESTATIONS</span>
                        </div>
                        {/* Prestation */}
                        {/* 1 seance 1 zone */}
                        <div>
                            <div className='body__card__hairneedling__description__container__prestation body__card__hairneedling__description__container'>
                                {/* Titre */}
                                <span className='body__card__hairneedling__description'>1 séance 1 zone  </span>
                                {/* Prix */}
                                <span className='body__card__hairneedling__description'> 70 €</span>
                                {/* Bouton */}
                                {/* Section Bouton */}
                                <div className='container__homecover__button__primary__hairneedling__card container__homecover__button__headspa__card container__homecover__button'>
                                    <Button className='container__homecover__button__primary__headspa__card container__homecover__button__primary'>PRENDRE RDV</Button>
                                </div>
                            </div>
                        </div>

                        {/* Prestation */}
                        {/* 1 seance 2 zones */}
                        <div>
                            <div className='body__card__hairneedling__description__container__prestation body__card__hairneedling__description__container'>
                                {/* Titre */}
                                <span className='body__card__hairneedling__description'>1 séance 2 zone  </span>
                                {/* Prix */}
                                <span className='body__card__hairneedling__description'> 140 €</span>
                                {/* Bouton */}
                                {/* Section Bouton */}
                                <div className='container__homecover__button__primary__hairneedling__card container__homecover__button__headspa__card container__homecover__button'>
                                    <Button className='container__homecover__button__primary__headspa__card container__homecover__button__primary'>PRENDRE RDV</Button>
                                </div>
                            </div>
                        </div>

                        {/* Prestation */}
                        {/* 4 seance */}
                        <div>
                            <div className='body__card__hairneedling__description__container__prestation body__card__hairneedling__description__container'>
                                {/* Titre */}
                                <span className='body__card__hairneedling__description'>4 séance  </span>
                                {/* Prix */}
                                <span className='body__card__hairneedling__description'> 230 €</span>
                                {/* Bouton */}
                                {/* Section Bouton */}
                                <div className='container__homecover__button__primary__hairneedling__card container__homecover__button__headspa__card container__homecover__button'>
                                    <Button className='container__homecover__button__primary__headspa__card container__homecover__button__primary'>PRENDRE RDV</Button>
                                </div>
                            </div>
                        </div>
                        
                        {/* Prestation */}
                        {/* 6 séances */}
                        <div>
                            <div className='body__card__hairneedling__description__container__prestation body__card__hairneedling__description__container'>
                                {/* Titre */}
                                <span className='body__card__hairneedling__description'>6 séances  </span>
                                {/* Prix */}
                                <span className='body__card__hairneedling__description'> 370 €</span>
                                {/* Bouton */}
                                {/* Section Bouton */}
                                <div className='container__homecover__button__primary__hairneedling__card container__homecover__button__headspa__card container__homecover__button'>
                                    <Button className='container__homecover__button__primary__headspa__card container__homecover__button__primary'>PRENDRE RDV</Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Image */}
                    <div className='body__card__side__background__image body__card__side__background container__body__card__hairneedling body__card__side body__card'>
                        {/* Photo */}
                        <div className='container__card__side__background__image'>
                            <img
                                src="https://res.cloudinary.com/dahc6jmn4/image/upload/v1734211493/otpoakzn6mojerw5gzta.jpg"
                                alt="Hairneedling Image"
                                className='body__card__hairneedling__image body__card__headspa__image'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HairneedlingBody