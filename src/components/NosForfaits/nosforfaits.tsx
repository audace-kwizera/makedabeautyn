import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

const NosForfaitsBody = () => {
    return (
        <div className='container__hairneedling container__headspa container'>
            {/* Head Spa */}
            <div className='container__body__card'>
                {/* Title */}
                <div className="container__policy__header__hairneedling__braid container__policy__header__hairneedling container__policy__header">
                    <span className="container__policy__header container__policy__header__title__body">
                        NOS FORFAITS
                    </span>
                </div>

                {/* Body */}
                <div className='container__braid__body__mobile container__hairneedling__body container__card__hairneedling'>
                    {/* Card 1 */}
                    <div className='body__card__side__hairneedling__card__width__braids body__card__side__hairneedling__card__width body__card__side__hairneedling__card body__card__side__hairneedling container__body__card__hairneedling body__card__side body__card'>
                        {/* Photo */}
                        {/* <div>
                            <img
                                src="https://res.cloudinary.com/dahc6jmn4/image/upload/v1734211493/ybazbdg9yqe5qcstkfkz.jpg"
                                alt="Féerique"
                                className='body__card__hairneedling__image__cover'
                            />
                        </div> */}
                        {/* Title */}
                        <div className='body__card__hairneedling__title'>
                            <span className='body__card__hairneedling__title__name'>Continuez votre voyage capillaire vers sa destination final: La guérison.</span>
                            <span className='body__card__hairneedling__title__name'>"Retrouvez votre santé capillaire avec ce rituel d'exception inclus dans nos forfaits"</span>
                        </div>
                        <br />
                        <br />
                        {/* Prestation */}
                        {/* 1 seance 1 zone */}
                        <div>
                            <div className='body__card__hairneedling__description__container__prestation body__card__hairneedling__description__container'>
                                {/* Titre */}
                                <span className='body__card__hairneedling__description__titre body__card__hairneedling__description'>Formule nirvana<br />+<br />6 séances de soins capillaires  personnalisée</span><br />
                                {/* Description */}
                                <p className='body__card__hairneedling__description__text body__card__hairneedling__description'>"Conçu pour répondre aux besoins unique de votre chevelure,d'assurer un suivi personnalisé  tout en prolongeant les bienfaits du head spa. Nous commençons par un Diagnostic capillaire approfondi: un bilan de santé de vos cheveux et cuir chevelu pour identifier leurs besoins.<br /><br />Nous enchainons avec le soin capillaire sur mesure:<br /> A chaque passage, un soin à base de poudres naturelles, poudres ayurvédique, huiles nourrissantes naturelles...<br />
                                Ces soins garantis sans silicone,sans parabènes nourrissent et renforcent vos cheveux tout en respectant leur nature.
                                Ce forfait est repartis sur deux séances par mois pendant 3 mois et chaque  RDV dure 30 minutes."</p><br />
                                <p className='body__card__hairneedling__description__text body__card__hairneedling__description'>Merci d'appeler au moment de la réservation pour s'assurer du choix de la couleur.</p><br />
                                {/* Prix */}
                                <p className='body__card__hairneedling__description__text body__card__hairneedling__description'> 4 h 30 min </p>
                                {/* Prix */}
                                <p className='body__card__hairneedling__description__text body__card__hairneedling__description'> 350 € </p>
                                {/* Bouton */}
                                {/* Section Bouton */}
                                {/* <div className='container__homecover__button__primary__hairneedling__card container__homecover__button__headspa__card container__homecover__button'>
                                    <Button className='container__homecover__button__primary__headspa__card container__homecover__button__primary'>PRENDRE RDV</Button>
                                </div> */}
                            </div>
                        </div>
                        <br />

                        {/* Prestation */}
                        {/* 1 seance 2 zones */}
                        <div>
                            <div className='body__card__hairneedling__description__container__prestation body__card__hairneedling__description__container'>
                                {/* Titre */}
                                <span className='body__card__hairneedling__description__titre body__card__hairneedling__description'>Formule nirvana<br />+<br />Nattes collés ( 2 à 6 ) avec extensions</span>
                                <br />
                                {/* Temps */}
                                <span className='body__card__hairneedling__description__text body__card__hairneedling__description'>2 h 30 min</span>
                                {/* Prix */}
                                <span className='body__card__hairneedling__description__text body__card__hairneedling__description'> 170 € </span>
                                {/* Bouton */}
                                {/* Section Bouton */}
                                {/* <div className='container__homecover__button__primary__hairneedling__card container__homecover__button__headspa__card container__homecover__button'>
                                    <Button className='container__homecover__button__primary__headspa__card container__homecover__button__primary'>PRENDRE RDV</Button>
                                </div> */}
                            </div>
                        </div>
                        <br />

                        {/* Prestation */}
                        {/* 4 seance */}
                        <div>
                            <div className='body__card__hairneedling__description__container__prestation body__card__hairneedling__description__container'>
                                {/* Titre */}
                                <span className='body__card__hairneedling__description__titre body__card__hairneedling__description'>Formule nirvana<br />+<br />Nattes collés ( 2 à 6 ) avec extensions</span>
                                {/* Temps */}
                                <span className='body__card__hairneedling__description__text body__card__hairneedling__description'>2 h 15 min</span>
                                {/* Prix */}
                                <span className='body__card__hairneedling__description__text body__card__hairneedling__description'> 160 €</span>
                                {/* Bouton */}
                                {/* Section Bouton */}
                                {/* <div className='container__homecover__button__primary__hairneedling__card container__homecover__button__headspa__card container__homecover__button'>
                                    <Button className='container__homecover__button__primary__headspa__card container__homecover__button__primary'>PRENDRE RDV</Button>
                                </div> */}
                            </div>
                        </div>
                        <br />

                        {/* Prestation */}
                        {/* 6 séances */}
                        <div>
                            <div className='body__card__hairneedling__description__container__prestation body__card__hairneedling__description__container'>
                                {/* Titre */}
                                <span className='body__card__hairneedling__description__titre body__card__hairneedling__description'>Formule diadème<br />+<br />Nattes collés ( 2 à 6 ) avec extensions</span>
                                {/* Temps */}
                                <span className='body__card__hairneedling__description__text body__card__hairneedling__description'> 2 h 15 min </span>
                                {/* Prix */}
                                <span className='body__card__hairneedling__description__text body__card__hairneedling__description'> 140 €</span>
                                {/* Bouton */}
                                {/* Section Bouton */}
                                {/* <div className='container__homecover__button__primary__hairneedling__card container__homecover__button__headspa__card container__homecover__button'>
                                    <Button className='container__homecover__button__primary__headspa__card container__homecover__button__primary'>PRENDRE RDV</Button>
                                </div> */}
                            </div>
                        </div>
                        <br />

                        {/* Prestation */}
                        {/* 6 séances */}
                        <div>
                            <div className='body__card__hairneedling__description__container__prestation body__card__hairneedling__description__container'>
                                {/* Titre */}
                                <span className='body__card__hairneedling__description__titre body__card__hairneedling__description'>Formule diadème<br />+<br />Nattes collés ( 2 à 6 ) avec extensions</span>
                                {/* Temps */}
                                <span className='body__card__hairneedling__description__text body__card__hairneedling__description'> 2 h </span>
                                {/* Prix */}
                                <span className='body__card__hairneedling__description__text body__card__hairneedling__description'> 115 € </span>
                                {/* Bouton */}
                                {/* Section Bouton */}
                                {/* <div className='container__homecover__button__primary__hairneedling__card container__homecover__button__headspa__card container__homecover__button'>
                                    <Button className='container__homecover__button__primary__headspa__card container__homecover__button__primary'>PRENDRE RDV</Button>
                                </div> */}
                            </div>
                        </div>
                        <br />
                    </div>

                    {/* Bouton */}
                    {/* Section Bouton */}
                    <div className='container__braid__button__mobile body__card__side__hairneedling__card__width__braids__mobile body__card__side__hairneedling__card__width__braids container__homecover__button__hairneedling container__homecover__button'>
                        <Button className='container__homecover__button__primary'><Link className='container__homecover__button__primary__text' href="https://www.planity.com/makeda-beauty-head-spa-67240-bischwiller">NOS SERVICES</Link></Button>
                    </div>

                    {/* Image */}
                    {/* <div className='body__card__side__background__image__braids__mobile body__card__side__background__image__braids body__card__side__background__image body__card__side__background container__body__card__hairneedling body__card__side body__card'> */}
                    {/* Photo */}
                    {/* <div className='container__card__side__background__image__photo container__card__side__background__image'>
                            <img
                                src="https://res.cloudinary.com/dahc6jmn4/image/upload/v1720286916/pexels-j-scott-photography-67121182-9702500_jvtfcd.jpg"
                                alt="Braids Image"
                                className='body__card__hairneedling__image body__card__headspa__image'
                            />
                        </div>
                    </div> */}

                    {/* Image */}
                    <div className='body__card__side__background__braid body__card__side__background__image__braids__mobile body__card__side__background__image__braids body__card__side__background__image body__card__side__background container__body__card__hairneedling body__card__side body__card'>
                        {/* Photo */}
                        <div className='container__card__side__background__image__photo container__card__side__background__image'>
                            <img
                                src="https://res.cloudinary.com/planity/image/upload/c_crop,w_2245,h_1336,x_0,y_8/t_d_main,f_auto/hdtuiqlyyeces8wn7pvo"
                                alt="Braids Image"
                                className='body__card__braid__image__mobile body__card__hairneedling__image body__card__headspa__image'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NosForfaitsBody