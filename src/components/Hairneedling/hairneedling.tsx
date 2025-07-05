import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

const HairneedlingBody = () => {
    return (

        <div className='container__hairneedling__mobile container__hairneedling container__headspa container'>
            {/* Head Spa */}
            <div className='container__body__card'>
                {/* Title */}
                <div className="container__policy__header__hairneedling container__policy__header">
                    <span className="container__policy__header container__policy__header__title__body">
                        NOS FORMULES
                    </span>
                </div>

                {/* Body */}
                <div className='container__hairneedling__body__mobile container__hairneedling__body container__card__hairneedling'>
                    {/* Card 1 */}
                    <div className='body__card__side__hairneedling__card__width body__card__side__hairneedling__card body__card__side__hairneedling container__body__card__hairneedling body__card__side body__card'>
                        {/* Photo */}
                        {/* <div>
                            <img
                                src="https://res.cloudinary.com/dahc6jmn4/image/upload/v1734211493/ybazbdg9yqe5qcstkfkz.jpg"
                                alt="Féerique"
                                className='body__card__hairneedling__image__cover'
                            />
                        </div> */}
                        <div>
                            <img
                                src="https://res.cloudinary.com/planity/image/upload/c_crop,w_2245,h_1336,x_0,y_126/q_auto,f_auto/semb3hfhznq66zmpamqf"
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
                                <span className='body__card__hairneedling__description__titre body__card__hairneedling__description'>La séance par zone  </span>
                                {/* Description */}
                                <span className='body__card__hairneedling__description__text body__card__hairneedling__description'> - Diagnostic capillaire </span>
                                <span className='body__card__hairneedling__description__text body__card__hairneedling__description'> - Hairneedling  </span>
                                {/* Time */}
                                <span className='body__card__hairneedling__description__text body__card__hairneedling__description'> 45min </span>
                                {/* Prix */}
                                <span className='body__card__hairneedling__description__text body__card__hairneedling__description'> 80 €</span>
                                {/* Bouton */}
                                {/* Section Bouton */}
                                {/* <div className='container__homecover__button__primary__hairneedling__card container__homecover__button__headspa__card container__homecover__button'>
                                    <Button className='container__homecover__button__primary__headspa__card container__homecover__button__primary'>PRENDRE RDV</Button>
                                </div> */}
                            </div>
                        </div>

                        {/* Prestation */}
                        {/* 1 seance 2 zones */}
                        <div>
                            <div className='body__card__hairneedling__description__container__prestation__card body__card__hairneedling__description__container__prestation body__card__hairneedling__description__container'>
                                {/* Titre */}
                                <span className='body__card__hairneedling__description__titre body__card__hairneedling__description'>Forfait 4 séances: </span>
                                {/* Description */}
                                <span className='body__card__hairneedling__description__text body__card__hairneedling__description'> - Diagnostic capillaire </span>
                                <span className='body__card__hairneedling__description__text body__card__hairneedling__description'> - Hairneedling </span>
                                <span className='body__card__hairneedling__description__text body__card__hairneedling__description'> - Luminodermie </span>
                                <span className='body__card__hairneedling__description__text body__card__hairneedling__description'> Cette prestation ne peut pas être réservée en ligne. </span>
                                <span className='body__card__hairneedling__description__text body__card__hairneedling__description'> Merci d'appeler le 07 51 58 61 04. </span>
                                {/* Time */}
                                <span className='body__card__hairneedling__description__text body__card__hairneedling__description'> 4h </span>
                                {/* Prix */}
                                <span className='body__card__hairneedling__description__text body__card__hairneedling__description'> 300 €</span>
                                {/* Bouton */}
                                {/* Section Bouton */}
                                {/* <div className='container__homecover__button__primary__hairneedling__card container__homecover__button__headspa__card container__homecover__button'>
                                    <Button className='container__homecover__button__primary__headspa__card container__homecover__button__primary'>PRENDRE RDV</Button>
                                </div> */}
                            </div>
                        </div>

                        {/* Prestation */}
                        {/* 4 seance */}
                        <div>
                            <div className='body__card__hairneedling__description__container__prestation body__card__hairneedling__description__container'>
                                {/* Titre */}
                                <span className='body__card__hairneedling__description__titre body__card__hairneedling__description'>Forfait 6 séances </span>
                                {/* Description */}
                                <span className='body__card__hairneedling__description__text body__card__hairneedling__description'> - Diagnostic capillaire </span>
                                <span className='body__card__hairneedling__description__text body__card__hairneedling__description'> - Hairneedling </span>
                                <span className='body__card__hairneedling__description__text body__card__hairneedling__description'> - Luminodermie </span>
                                <span className='body__card__hairneedling__description__text body__card__hairneedling__description'> Cette prestation ne peut pas être réservée en ligne. </span>
                                <span className='body__card__hairneedling__description__text body__card__hairneedling__description'> Merci d'appeler le 07 51 58 61 04. </span>
                                {/* Time */}
                                <span className='body__card__hairneedling__description__text body__card__hairneedling__description'> 6h </span>
                                {/* Prix */}
                                <span className='body__card__hairneedling__description__text body__card__hairneedling__description'> 450 €</span>
                                {/* Bouton */}
                                {/* Section Bouton */}
                                {/* <div className='container__homecover__button__primary__hairneedling__card container__homecover__button__headspa__card container__homecover__button'>
                                    <Button className='container__homecover__button__primary__headspa__card container__homecover__button__primary'>PRENDRE RDV</Button>
                                </div> */}
                            </div>
                        </div>
                    </div>


                    {/* Bouton */}
                    {/* Section Bouton */}
                    <div className='container__homecover__button__hairneedling__mobile container__homecover__button__hairneedling container__homecover__button'>
                        <Button className='container__homecover__button__primary'><Link className='container__homecover__button__primary__text' href="https://www.planity.com/makeda-beauty-head-spa-67240-bischwiller">NOS SERVICES</Link></Button>
                    </div>

                    {/* Image */}
                    <div className='body__card__side__background__image__mobile body__card__side__background__image body__card__side__background container__body__card__hairneedling body__card__side body__card'>
                        {/* Photo */}
                        {/* <div className='container__card__side__background__image'>
                            <img
                                src="https://res.cloudinary.com/dahc6jmn4/image/upload/v1734211493/otpoakzn6mojerw5gzta.jpg"
                                alt="Hairneedling Image"
                                className='body__card__hairneedling__image__mobile body__card__hairneedling__image body__card__headspa__image'
                            />
                        </div> */}
                        <div className='container__card__side__background__image'>
                            <img
                                src="https://res.cloudinary.com/planity/image/upload/c_crop,w_2245,h_1336,x_0,y_126/q_auto,f_auto/kwp6gekt4ygou9uyur1c"
                                alt="Hairneedling Image"
                                className='body__card__hairneedling__image__mobile body__card__hairneedling__image body__card__headspa__image'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HairneedlingBody