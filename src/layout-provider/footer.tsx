import React from 'react';
import { FaInstagram } from "react-icons/fa"
import { FaFacebookSquare } from "react-icons/fa"
import { FaTiktok } from "react-icons/fa"
import { FaWhatsapp } from "react-icons/fa"
import Link from 'next/link';

const Footer = () => {
    return (
        <div className='container container__footer'>
            {/* Titre */}
            <div className='container__footer__title'>
                <h5>Améliorer votre santé capillaire et mentale</h5>
            </div>

            <Link href="/">
                {/* Logo */}
                <div className='container__footer__logo'>
                    {/* Image */}
                    <div className="container__footer__logo__image">
                        <img src="https://res.cloudinary.com/dahc6jmn4/image/upload/v1708113924/logo_3_yz8ygv.png" alt="Logo Makeda Beauty" />
                    </div>

                    {/* Description */}
                    <div className="container__footer__logo__description">
                        <h1 className='container__footer__logo__description__title'>Makeda Beauty</h1>
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
                        {/* <li>
                            {/* <Link to="/"> 
                            <span className="container__footer__navigation__list__link">
                                Shop
                            </span>
                            {/* </Link> 
                        </li> */}
                        {/* Carte Cadeaux */}
                        <li>
                            {/* <Link to="/"> */}
                            <span className="container__footer__navigation__list__link">
                                Carte Cadeaux
                            </span>
                            {/* </Link> */}
                        </li>
                        {/* Panier */}
                        {/* <li>
                            {/* <Link to="/"> 
                            <span className="container__footer__navigation__list__link">
                                Panier
                            </span>
                            {/* </Link> 
                        </li> */}
                        {/* Contact */}
                        <li>
                            <Link href="/contact">
                                <span className="container__footer__navigation__list__link">
                                    Contact
                                </span>
                            </Link>
                        </li>
                        {/* A PROPOS & CGV */}
                        <li>
                            <Link href="/cgv">
                                <span className="container__footer__navigation__list__link">
                                    A Propos & CGV
                                </span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Social media */}
            <div>
                <ul className='container__footer__navigation__list'>
                    {/* Instagram */}
                    <li>
                        <span className="container__footer__navigation__list__link__social"><Link className='container__footer__navigation__list__link__social' href="https://www.instagram.com/makeda_beautys/"><FaInstagram /></Link></span>
                    </li>
                    {/* Facebook */}
                    <li>
                        <span className="container__footer__navigation__list__link__social"><Link className='container__footer__navigation__list__link__social' href="https://www.facebook.com/Makedabraids/"><FaFacebookSquare /></Link></span>
                    </li>
                    {/* Tik Tok */}
                    <li>
                        <span className="container__footer__navigation__list__link__social"><Link className='container__footer__navigation__list__link__social' href="https://www.tiktok.com/@makeda.beauty"><FaTiktok /></Link></span>
                    </li>
                    {/* WhatsApp */}
                    <li>
                        <span className="container__footer__navigation__list__link__social"><Link className='container__footer__navigation__list__link__social' href="https://wa.me/33751586104"><FaWhatsapp /></Link></span>
                    </li>
                </ul>
            </div>


        </div>
    )
}

export default Footer