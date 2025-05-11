'use client';
import Homecover from '@/components/HomeCover/homecover';
import { Button } from '@/components/ui/button';
import Footer from '@/layout-provider/footer';
import Headernav from '@/layout-provider/header-nav';
import Link from 'next/link';
import React from 'react';

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