import React from 'react'
import { Button } from '../ui/button'

const HairneedlingBody = () => {
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
                <div className='container__card__hairneedling'>
                    {/* Card 1 */}
                    <div className='container__body__card__hairneedling body__card__side body__card'>
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
                            <span className='body__card__headspa__title__name'>HAIRNEEDLING
                                PRESTATIONS</span>
                        </div>
                        {/* Prestation */}
                        <div>
                            <div className='body__card__hairneedling__description__container'>
                                {/* Titre */}
                                <span className='body__card__headspa__description'>1 séance 1 zone</span>
                                {/* Prix */}
                                <span className='body__card__headspa__description'>70 €</span>
                                {/* Bouton */}
                                {/* Section Bouton */}
                                <div className='container__homecover__button__headspa__card container__homecover__button'>
                                    <Button className='container__homecover__button__primary__headspa__card container__homecover__button__primary'>PRENDRE RDV</Button>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HairneedlingBody