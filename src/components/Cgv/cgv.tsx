import React from 'react'

const Cgvbody = () => {
    return (
        <div className='container container__policy'>
            <div className='container__policy__body'>
                {/* Title */}
                <div className="container__policy__header">
                    <span className="container__policy__header container__policy__header__title">
                        A PROPOS & CGV
                    </span>
                </div>

                {/* Description */}
                <div className="container__policy__body container__policy__body__description">
                    <span className='container__policy__body container__policy__body__description'>
                        Chez MAKEDA BEAUTY, nous nous efforçons d'offrir à chaque client une expérience de spa relaxante et mémorable. Afin de maintenir notre plus haut niveau de service à la clientèle, nous respecterons les politiques suivantes :
                    </span>
                </div>
            </div>

            {/* Reservation */}
            <div>
                {/* Title */}
                <div className="container__policy__header">
                    <span className="container__policy__header container__policy__header__title__body">
                        RESERVATIONS
                    </span>
                </div>

                {/* Description */}
                <div className="container__policy__body container__policy__body__description">
                    <span className='container__policy__body container__policy__body__description__body'>
                        Chez MAKEDA BEAUTY vous pouvez prendre rendez-vous pour tout type de service. Les rendez-vous peuvent être pris en ligne sur notre site web <a href="/">https://www.makedabeauty.com</a> ou par téléphone pendant les heures d'ouverture. Si nous manquons votre appel, veuillez nous laisser un message vocal ou un SMS avec votre nom complet, l'heure et les services que vous souhaitez réserver; nous vous rappellerons dès que possible. Veuillez également nous informer de toute allergie, réaction à un produit ou autre problème de santé lors de la prise de rendez-vous.</span>
                    {/* <span className='container__policy__body container__policy__body__description__body'>
                        Un acompte de 40 % est requis lors de la réservation. Cet acompte garantit votre réservation et sera déduit du coût total des services fournis. Le paiement peut être effectué en toute sécurité en ligne via notre site web ou par téléphone. Un message de confirmation vous sera envoyé par notre système automatisé une fois votre rendez-vous confirmé avec succès.</span> */}
                </div>
            </div>

            {/* CANCELLATIONS */}
            <div>
                {/* Title */}
                <div className="container__policy__header">
                    <span className="container__policy__header container__policy__header__title__body">CANCELLATIONS</span>
                </div>

                {/* Description */}
                <div className="container__policy__body container__policy__body__description">
                    <span className='container__policy__body container__policy__body__description__body'>Nous comprenons que la vie peut être bien remplie et que des changements sont parfois inévitables. Pour mieux vous servir, notre système vous enverra un rappel 48 heures avant votre rendez-vous. Si vous devez annuler ou reprogrammer, merci de nous en informer au moins 24 heures à l'avance.</span>
                    <div className="container__policy__body container__policy__body__description">
                        <ul className='container__policy__body container__policy__body__description__body__list'>
                            <li>
                                <b className='list__policy__description__title'>Annulations dans les 24 heures : </b>
                                <span className='list__policy__description__text'>Nous vous prions de bien vouloir comprendre que l'acompte de 40 % versé lors de la réservation ne sera pas remboursable.</span>
                            </li>
                            <li>
                                <b className='list__policy__description__title'>Absences sans préavis : </b>
                                <span className='list__policy__description__text'>Étant donné que nos techniciennes ont réservé du temps pour votre rendez-vous et ne peuvent pas prendre d'autres clients, le montant total du service sera facturé.</span>
                            </li>
                            <li>
                                <b className='list__policy__description__title'>Retards : </b>
                                <span className='list__policy__description__text'>Si vous arrivez avec plus de 15 minutes de retard, nous pourrions devoir reprogrammer votre rendez-vous ou raccourcir la durée de votre service afin de respecter l'horaire des autres clients.</span>
                            </li>
                        </ul>
                    </div>
                    <span className='container__policy__body container__policy__body__description__body'>Merci pour votre coopération et votre compréhension. Nous avons hâte de prendre soin de vous !</span>
                </div>
            </div>

            {/* GIFT CARDS/CERTIFICATES*/}
            <div>
                {/* Title */}
                <div className="container__policy__header">
                    <span className="container__policy__header container__policy__header__title__body">
                        CARTE CADEAUX
                    </span>
                </div>

                {/* Description */}
                <div className="container__policy__body container__policy__body__description">
                    <span className='container__policy__body container__policy__body__description__body'>
                        Les cartes et certificats cadeaux sont disponibles à l'achat en boutique ou sur notre site web. Les cartes cadeaux expirent au bout d'un an.</span>
                    <span className='container__policy__body container__policy__body__description__body'>Pour les utiliser, le code unique figurant sur la carte ou le certificat est requis.
                        Nous ne sommes pas responsables des cartes ou certificats cadeaux perdus ou utilisés sans autorisation.</span>
                </div>
            </div>

            {/* SATISFACTION CLIENT*/}
            <div>
                {/* Title */}
                <div className="container__policy__header">
                    <span className="container__policy__header container__policy__header__title__body">
                        SATISFACTION CLIENT
                    </span>
                </div>

                {/* Description */}
                <div className="container__policy__body container__policy__body__description">
                    <span className='container__policy__body container__policy__body__description__body'>
                        Nous nous efforçons toujours d'offrir le meilleur service à nos clients. Votre satisfaction est notre fierté. Si nous ne répondons pas à vos attentes, nous serions ravis d'en discuter avec vous. Vous pouvez nous appeler ou nous écrire à l'adresse suivante : contact@makedabeauty.com.</span>
                    <span className='container__policy__body container__policy__body__description__body'>Bien que nous ne proposions pas de remboursement pour les services rendus, nous serons heureux de corriger tout problème jusqu’à ce que vous soyez 100 % satisfait(e).</span>
                </div>
            </div>

            {/* NOUS CONTACTER */}
            <div>
                {/* Title */}
                <div className="container__policy__header">
                    <span className="container__policy__header container__policy__header__title__body">
                        NOUS CONTACTER
                    </span>
                </div>

                {/* Description */}
                <div className="container__policy__body container__policy__body__description">
                    <span className='container__policy__body container__policy__body__description__body'>
                        Vous pouvez prendre rendez-vous en ligne ou par téléphone.</span>
                    <span className='container__policy__body container__policy__body__description__body'>Si vous nous contactez via Instagram, Facebook ou par e-mail, veuillez indiquer votre prénom, nom de famille, numéro de téléphone, ainsi qu'un message précisant le service que vous souhaitez réserver ou vos questions, afin que nous puissions vous rappeler.</span>
                </div>
            </div>
        </div>
    )
}

export default Cgvbody