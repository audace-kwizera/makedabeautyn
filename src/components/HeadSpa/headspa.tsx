import React from 'react'
import { Button } from '../ui/button'

const HeadSpaBody = () => {
    return (
        <div className='container__headspa container'>
            {/* Head Spa */}
            <div className='container__body__card'>
                {/* Title */}
                <div className="container__policy__header">
                    <span className="container__policy__header container__policy__header__title__body">
                        NOS FORMULES
                    </span>
                </div>

                {/* Body */}
                <div className='container__card'>
                    {/* Card 1 */}
                    <div className='body__card__side body__card'>
                        {/* Photo */}
                        <div>
                            <img 
                                src="https://res.cloudinary.com/dahc6jmn4/image/upload/v1720286708/WhatsApp_Image_2024-05-15_at_17.37.59_rsghfi.jpg" 
                                alt="Féerique" 
                                className='body__card__headspa__image' 
                            />
                        </div>
                        {/* Title */}
                        <div className='body__card__headspa__title'>
                            <span className='body__card__headspa__title__name'>FEERIQUE</span>
                            <span className='body__card__headspa__title__time'>45 MN</span>
                        </div>
                        {/* Prix */}
                        <div>
                            <span className='body__card__headspa__price'>80 €</span>
                        </div>
                        {/* Description */}
                        <div>
                            <span className='body__card__headspa__description'>Rafraîchissez vos cheveux et votre âme avec ce forfait féérique</span>
                        </div>
                        {/* Liste */}
                        <div>
                            <ul>
                                <li>soin du visage</li>
                                <li>soin profond du cuir chevelu</li>
                                <li>massage épaules</li>
                                <li>massage nuque</li>
                            </ul>
                        </div>
                        {/* Bouton */}
                        {/* Section Bouton */}
                        {/* <div className='container__homecover__button__headspa__card container__homecover__button'>
                            <Button className='container__homecover__button__primary__headspa__card container__homecover__button__primary'>PRENDRE RDV</Button>
                        </div> */}
                    </div>

                    {/* Card 2 */}
                    <div className='body__card__center body__card'>
                        {/* Photo */}
                        <div>
                            <img 
                                src="https://res.cloudinary.com/dahc6jmn4/image/upload/v1720286708/WhatsApp_Image_2024-05-15_at_17.37.59_1_wvfxca.jpg" 
                                alt="Diademe"
                                className='body__card__headspa__image__center' 
                            />
                        </div>
                        {/* Title */}
                        <div className='body__card__headspa__title'>
                            <span className='body__card__headspa__title__name'>DIADEME</span>
                            <span className='body__card__headspa__title__time'>1 H 15 MN</span>
                        </div>
                        {/* Prix */}
                        <div>
                            <span className='body__card__headspa__price'>100 €</span>
                        </div>
                        {/* Description */}
                        <div>
                            <span className='body__card__headspa__description'>Retrouvez la beauté de vos cheveux et votre sérénité grâce à cette expérience de luxe</span>
                        </div>
                        {/* Liste */}
                        <div>
                            <ul>
                                <li>formule féérique</li>
                                <li>massage des trapèzes & cervicales</li>
                                <li>massages des bras & mains</li>
                                <li>massages des jambes & pieds</li>
                            </ul>
                        </div>
                        {/* Bouton */}
                        {/* Section Bouton */}
                        {/* <div className='container__homecover__button__headspa__card container__homecover__button'>
                            <Button className='container__homecover__button__primary__headspa__card container__homecover__button__primary'>PRENDRE RDV</Button>
                        </div> */}
                    </div>

                    {/* Card 3 */}
                    <div className='body__card__side body__card'>
                        {/* Photo */}
                        <div>
                            <img 
                                src="https://res.cloudinary.com/dahc6jmn4/image/upload/v1720286708/WhatsApp_Image_2024-05-15_at_17.37.18_dqmbhz.jpg" 
                                alt="Nirvana" 
                                className='body__card__headspa__image' 
                            />
                        </div>
                        {/* Title */}
                        <div className='body__card__headspa__title'>
                            <span className='body__card__headspa__title__name'>NIRVANA</span>
                            <span className='body__card__headspa__title__time'>1 H 30 MN</span>
                        </div>
                        {/* Prix */}
                        <div>
                            <span className='body__card__headspa__price'>120 €</span>
                        </div>
                        {/* Description */}
                        <div>
                            <span className='body__card__headspa__description'>Accordez à vos cheveux le soin personnalisée et exceptionnel qu'ils méritent, reprenez confiance en vous !</span>
                        </div>
                        {/* Liste */}
                        <div>
                            <ul>
                                <li>diagnostic capillaire</li>
                                <li>formule Diadème</li>
                                <li>soin profond personnalisé du cuir chevelu aux poudres et huiles végétales naturelles</li>
                            </ul>
                        </div>
                        {/* Bouton */}
                        {/* Section Bouton */}
                        {/* <div className='container__homecover__button__headspa__card container__homecover__button'>
                            <Button className='container__homecover__button__primary__headspa__card container__homecover__button__primary '>PRENDRE RDV</Button>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeadSpaBody