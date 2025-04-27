'use client';
import Homecover from '@/components/HomeCover/homecover';
import { Button } from '@/components/ui/button';
import Footer from '@/layout-provider/footer';
import Link from 'next/link';
import React from 'react';

const Homepage = () => {
  return (
    <div className='flex flex-col'>

      {/* Header */}
      <div className='container__header flex justify-between items center bg-white-200 py-5 px-20'>
        {/* Logo */}
        <div className='container__header__logo'>
          {/* Image */}
          <div className="container__header__logo__image">
            <img src="https://res.cloudinary.com/dahc6jmn4/image/upload/v1708113924/logo_3_yz8ygv.png" alt="Logo Makeda Beauty" />
          </div>
          {/* Description */}
          <div className="container__header__logo__description">
            <h1 className='container__header__logo__description__title font-bold! text-2xl'>Makeda Beauty</h1>
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
              {/* Carte Cadeaux */}
              <li>
                {/* <Link to="/"> */}
                <span className="container__footer__navigation__list__link">
                  Carte Cadeaux
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
        <Button>
          <Link href="/login">Se connecter</Link>
        </Button>
      </div>

      {/* Corps */}
      <div className='container__body bg-white mt-20 grid-cols-1 px-20 minh-h-[70vh] items-center grid gap-10'>
        <div className='col-span-1'>
          <div className='flex flex-col gap-5'>

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