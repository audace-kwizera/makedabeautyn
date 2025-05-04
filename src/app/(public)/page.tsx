'use client';
import Homecover from '@/components/HomeCover/homecover';
import { Button } from '@/components/ui/button';
import Footer from '@/layout-provider/footer';
import Link from 'next/link';
import React from 'react';

const Homepage = () => {
  return (
    <div>

      {/* Header */}
      <div className='container__header'>
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

        {/* Pages Link */}
        <div>
          <div>
            <ul className="container__footer__navigation__list">
              {/* Accueil */}
              <li>
                {/* <Link to="/"> */}
                <span className="container__footer__navigation__list__link">
                  Accueil
                </span>
                {/* </Link> */}
              </li>
              {/* Head Spa */}
              <li>
                {/* <Link to="/"> */}
                <span className="container__footer__navigation__list__link">
                  Head Spa
                </span>
                {/* </Link> */}
              </li>
              {/* Hairneedling */}
              <li>
                {/* <Link to="/"> */}
                <span className="container__footer__navigation__list__link">
                  Hairneedling
                </span>
                {/* </Link> */}
              </li>
              {/* Braids */}
              <li>
                {/* <Link to="/"> */}
                <span className="container__footer__navigation__list__link">
                  Braids
                </span>
                {/* </Link> */}
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
                {/* <Link to="/"> */}
                <span className="container__footer__navigation__list__link">
                  Contact
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

      {/* Corps */}
      <div className='container__body'>
        <div className=''>
          <div className=''>

            <Homecover></Homecover>

            {/* Section Bouton */}
            <div className='container__homecover__button'>
              <Button className='container__homecover__button__primary'>NOS SERVICES</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />

    </div>


  )
}

export default Homepage