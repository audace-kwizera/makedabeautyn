import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

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
                            <span className='body__card__headspa__description__text body__card__headspa__description'>Un voyage magique de bien-être qui commence par un soin visage relaxant, suivi d'une détox capillaire purifiante.Votre cuir chevelu est ensuite choyé avec un soin nourrissant,composé de deux shampoing et un masque ultra hydratant .puis un massage apaisant de la nuque et des cervicales.
                                PS: séchage inclus.</span>
                        </div>
                        {/* Liste */}
                        {/* <div>
                            <ul>
                                <li>soin du visage</li>
                                <li>soin profond du cuir chevelu</li>
                                <li>massage épaules</li>
                                <li>massage nuque</li>
                            </ul>
                        </div> */}
                        {/* Bouton */}
                        {/* Section Bouton */}
                        {/* <div className='container__homecover__button__headspa__card container__homecover__button'>
                            <Button className='container__homecover__button__primary__headspa__card container__homecover__button__primary'>PRENDRE RDV</Button>
                        </div> */}
                    </div>

                    {/* Bouton */}
                    {/* Section Bouton */}
                    <div className='container__homecover__button__hairneedling__mobile container__homecover__button__hairneedling container__homecover__button'>
                        <Button className='container__homecover__button__primary'><Link className='container__homecover__button__primary__text' href="https://www.planity.com/makeda-beauty-head-spa-67240-bischwiller">NOS SERVICES</Link></Button>
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
                            <span className='body__card__headspa__description__text body__card__headspa__description'>Découvrez la Formule Diadème, un soin d'exception digne d'une reine, où chaque geste est une pierre précieuse posée sur votre couronne de bien-être.
                                Ce rituel commence par un éclatant soin du visage, suivi d'une détox capillaire et d'un soin en profondeur du cuir chevelu, véritable joyau de votre détente. Laissez-vous ensuite envelopper par l'hydro-massage de la nuque, des trapèzes et des cervicales, avant de savourer des massages des bras, des mains, des jambes, et des pieds  pour une sérénité absolue
                                PS:séchage inclus.boisson chaude ou froide offerte + petit gâteau</span>
                        </div>
                        {/* Liste */}
                        {/* <div>
                            <ul>
                                <li>formule féérique</li>
                                <li>massage des trapèzes & cervicales</li>
                                <li>massages des bras & mains</li>
                                <li>massages des jambes & pieds</li>
                            </ul>
                        </div> */}
                        {/* Bouton */}
                        {/* Section Bouton */}
                        {/* <div className='container__homecover__button__headspa__card container__homecover__button'>
                            <Button className='container__homecover__button__primary__headspa__card container__homecover__button__primary'>PRENDRE RDV</Button>
                        </div> */}
                    </div>

                    {/* Bouton */}
                    {/* Section Bouton */}
                    <div className='container__homecover__button__hairneedling__mobile container__homecover__button__hairneedling container__homecover__button'>
                        <Button className='container__homecover__button__primary'><Link className='container__homecover__button__primary__text' href="https://www.planity.com/makeda-beauty-head-spa-67240-bischwiller">NOS SERVICES</Link></Button>
                    </div>

                    {/* Card 3 */}
                    <div className='body__card__side body__card'>
                        {/* Photo */}
                        {/* <div>
                            <img 
                                src="https://res.cloudinary.com/dahc6jmn4/image/upload/v1720286708/WhatsApp_Image_2024-05-15_at_17.37.18_dqmbhz.jpg" 
                                alt="Nirvana" 
                                className='body__card__headspa__image' 
                            />
                        </div> */}
                        <div>
                            <img
                                src="https://res.cloudinary.com/planity/image/upload/dfy31zpmkibz6tbqp7ms.jpg"
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
                            <span className='body__card__headspa__description__text body__card__headspa__description'>Cette formule Head Spa personnalisée a été conçue pour répondre aux besoins de celles et ceux qui souhaitent apporter une solution à leurs cheveux abîmés : pellicules, sécheresse, excès de sébum, pointes fourchues, et bien plus</span>
                            <br />
                            <span className='body__card__headspa__description'>Votre expérience Nirvana: </span>
                            <ul>
                                <li>
                                    ✨ Diagnostic capillaire pour comprendre vos besoins uniques.
                                </li>
                                <li>
                                    ✨ Soin visage.
                                </li>
                                <li>
                                    ✨ Détox capillaire et soin profond du cuir chevelu pour purifier et revitaliser.
                                </li>
                                <li>
                                    ✨ Hydro-massage des zones clés : nuque, trapèzes, cervicales, bras, mains, jambes et pieds, pour une relaxation totale.
                                </li>
                                <li>
                                    ✨ Une routine capillaire personnalisée pour prolonger cet instant d'éveil chez vous ou à l'institut.
                                    ps: inclus séchage .boisson chaude ou froide offerte + petit gâteau
                                </li>
                            </ul>

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

                    {/* Card 4 */}
                    <div className='body__card__side body__card'>
                        {/* Photo */}
                        {/* <div>
                            <img 
                                src="https://res.cloudinary.com/dahc6jmn4/image/upload/v1720286708/WhatsApp_Image_2024-05-15_at_17.37.18_dqmbhz.jpg" 
                                alt="Nirvana" 
                                className='body__card__headspa__image' 
                            />
                        </div> */}
                        <div>
                            <img
                                src="https://res.cloudinary.com/planity/image/upload/c_crop,w_2245,h_1336,x_0,y_126/t_d_main,f_auto/kwp6gekt4ygou9uyur1c"
                                alt="Nirvana"
                                className='body__card__headspa__image'
                            />
                        </div>
                        {/* Title */}
                        <div className='body__card__headspa__title'>
                            <span className='body__card__headspa__title__name'>HEAD SPA INITIATION</span>
                            <span className='body__card__headspa__title__time'>30 MN</span>
                        </div>
                        {/* Prix */}
                        <div>
                            <span className='body__card__headspa__price'>60 €</span>
                        </div>
                        {/* Description */}
                        <div>
                            <span className='body__card__headspa__description__text body__card__headspa__description'>
                                "Débuter votre initiation dans l'univers du head spa par un massage crânien, suivie d'une détox capillaire puis deux shampoing et d'un masquer capillaire hyper hydratant revitalisant qui laissera vos cheveux soyeux.
                                Terminer en apothéose avec un massage relaxant  les trapèzes,de la nuque et des cervicales. Un premier pas idéal pour éveiller vos sens et explorer les bienfaits de nos soins Head Spa.
                                ps: séchage inclus."
                            </span>
                        </div>
                        {/* Liste */}
                        {/* <div>
                            <ul>
                                <li>diagnostic capillaire</li>
                                <li>formule Diadème</li>
                                <li>soin profond personnalisé du cuir chevelu aux poudres et huiles végétales naturelles</li>
                            </ul>
                        </div> */}
                        {/* Bouton */}
                        {/* Section Bouton */}
                        {/* <div className='container__homecover__button__headspa__card container__homecover__button'>
                            <Button className='container__homecover__button__primary__headspa__card container__homecover__button__primary '>PRENDRE RDV</Button>
                        </div> */}
                    </div>

                    {/* Card 5 */}
                    <div className='body__card__center body__card'>
                        {/* Photo */}
                        <div>
                            <img
                                src="https://res.cloudinary.com/planity/image/upload/c_crop,w_2245,h_1336,x_0,y_126/t_d_main,f_auto/yjpocdazwoqbygbvkce5"
                                alt="Diademe"
                                className='body__card__headspa__image__center'
                            />
                        </div>
                        {/* Title */}
                        <div className='body__card__headspa__title'>
                            <span className='body__card__headspa__title__name'>HEAD SPA KIDS</span>
                            <span className='body__card__headspa__title__time'>50 MN</span>
                        </div>
                        {/* Prix */}
                        <div>
                            <span className='body__card__headspa__price'>30 €</span>
                        </div>
                        {/* Description */}
                        <div>
                            <span className='body__card__headspa__description__text body__card__headspa__description'>
                                Un moment de douceur pour les petits aventuriers de 8 à 15 ans! 🎈 Ce soin magique commence par massage capillaire, suivi de deux shampoings ludiques  et un masque capillaire. Ensuite, place à la détente avec un massage relaxant du cuir chevelu et du décolleté. Le tout sublimé par notre merveilleux arc d’eau pour une expérience amusante et apaisante! 🌈✨
                                ps:le séchage est inlus
                            </span>
                        </div>
                        {/* Liste */}
                        {/* <div>
                            <ul>
                                <li>formule féérique</li>
                                <li>massage des trapèzes & cervicales</li>
                                <li>massages des bras & mains</li>
                                <li>massages des jambes & pieds</li>
                            </ul>
                        </div> */}
                        {/* Bouton */}
                        {/* Section Bouton */}
                        {/* <div className='container__homecover__button__headspa__card container__homecover__button'>
                            <Button className='container__homecover__button__primary__headspa__card container__homecover__button__primary'>PRENDRE RDV</Button>
                        </div> */}
                    </div>

                    {/* Card 6 */}
                    <div className='body__card__side body__card'>
                        {/* Photo */}
                        {/* <div>
                            <img 
                                src="https://res.cloudinary.com/dahc6jmn4/image/upload/v1720286708/WhatsApp_Image_2024-05-15_at_17.37.18_dqmbhz.jpg" 
                                alt="Nirvana" 
                                className='body__card__headspa__image' 
                            />
                        </div> */}
                        <div>
                            <img
                                src="https://res.cloudinary.com/planity/image/upload/c_crop,w_2245,h_1336,x_0,y_126/t_d_main,f_auto/semb3hfhznq66zmpamqf"
                                alt="Nirvana"
                                className='body__card__headspa__image'
                            />
                        </div>
                        {/* Title */}
                        <div className='body__card__headspa__title'>
                            <span className='body__card__headspa__title__name'>DRY HEAD SPA</span>
                            <span className='body__card__headspa__title__time'>30 MN</span>
                        </div>
                        {/* Prix */}
                        <div>
                            <span className='body__card__headspa__price'>30 €</span>
                        </div>
                        {/* Description */}
                        <div>
                            <span className='body__card__headspa__description__text body__card__headspa__description'>
                                Le Dry Head Spa est un massage relaxant qui soulage les maux de tête, les épaules raides, les insomnies et les malaises chroniques. Ce soin unique se fait sans eau, vos cheveux restent secs tout au long du traitement. Grâce à des pressions ciblées sur le cuir chevelu, le cou et les épaules, il aide à réduire les tensions et à améliorer la circulation sanguine, procurant ainsi une profonde sensation de détente et de bien-être.
                            </span>
                        </div>
                        {/* Liste */}
                        {/* <div>
                            <ul>
                                <li>diagnostic capillaire</li>
                                <li>formule Diadème</li>
                                <li>soin profond personnalisé du cuir chevelu aux poudres et huiles végétales naturelles</li>
                            </ul>
                        </div> */}
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