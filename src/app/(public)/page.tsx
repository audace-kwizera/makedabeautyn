'use client';
import Homecover from '@/components/HomeCover/homecover';
import { Button } from '@/components/ui/button';
import Footer from '@/layout-provider/footer';
import Headernav from '@/layout-provider/header-nav';
import React from 'react';
import Link from 'next/link';

const Homepage = () => {
  return (
    <div>

      {/* Header */}
      <Headernav></Headernav>

      {/* Corps */}
      <div className='container__body'>
        <div>
          <div>

            <Homecover></Homecover>

            {/* Section Bouton */}
            <div className='container__homecover__button'>
              <Button className='container__homecover__button__primary'><Link className='container__homecover__button__primary__text' href="https://www.planity.com/makeda-beauty-head-spa-67240-bischwiller">NOS SERVICES</Link></Button>
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