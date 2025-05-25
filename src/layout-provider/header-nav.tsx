import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const Headernav = () => {
    return (
        <div className='container__header__border'>
            {/* Header */}
            <div className='container__header'>
                <Link href="/">
                    {/* Logo */}
                    <div className='container__header__logo'>
                        {/* Image */}
                        <div className="container__header__logo__image">
                            <img src="https://res.cloudinary.com/dahc6jmn4/image/upload/v1708113924/logo_3_yz8ygv.png" alt="Logo Makeda Beauty" />
                        </div>
                        {/* Description */}
                        <div className="container__header__logo__description">
                            <h1 className='container__header__logo__description__title'>Makeda Beauty</h1>
                        </div>
                    </div>
                </Link>

                {/* Pages Link */}
                <div>
                    <div>
                        <ul className="container__footer__navigation__list">
                            {/* Accueil */}
                            <li>
                                <Link href="/">
                                    <span className="container__footer__navigation__list__link">
                                        Accueil
                                    </span>
                                </Link>
                            </li>
                            {/* Head Spa */}
                            <li>
                                <Link href="/headspa">
                                    <span className="container__footer__navigation__list__link">
                                        Head Spa
                                    </span>
                                </Link>
                            </li>
                            {/* Hairneedling */}
                            <li>
                                <Link href="/hairneedling">
                                    <span className="container__footer__navigation__list__link">
                                        Hairneedling
                                    </span>
                                </Link>
                            </li>
                            {/* Braids */}
                            <li>
                                <Link href="/braids">
                                    <span className="container__footer__navigation__list__link">
                                        Braids
                                    </span>
                                </Link>
                            </li>
                            {/* Shop */}
                            <li>
                                {/* <Link to="/"> */}
                                <span className="container__footer__navigation__list__link">
                                    Shop
                                </span>
                                {/* </Link> */}
                            </li>
                            {/* Contact */}
                            <li>
                                <Link href="/contact">
                                    <span className="container__footer__navigation__list__link">
                                        Contact
                                    </span>
                                </Link>
                            </li>
                            {/* Carte Cadeaux */}
                            <li>
                                {/* <Link to="/"> */}
                                <span className="container__footer__navigation__list__link">
                                    Carte Cadeaux
                                </span>
                                {/* </Link> */}
                            </li>
                            {/* Panier */}
                            <li>
                                {/* <Link to="/"> */}
                                <span className="container__footer__navigation__list__link">
                                    Panier
                                </span>
                                {/* </Link> */}
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Login Button */}
                <Button className='container__homecover__button__primary__header container__homecover__button__primary'>
                    <Link href="/login">Se connecter</Link>
                </Button>
            </div>
        </div >
    )
}

export default Headernav