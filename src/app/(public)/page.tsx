'use client';
import Homecover from '@/components/HomeCover/homecover';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

const Homepage = () => {
  return (
    <div className='flex flex-col'>
     
    <div className='flex justify-between items center bg-gray-200 py-5 px-20'>
      <h1 className='font-bold! text-2xl text-black'>Makeda Beauty</h1>
      {/* Login Button */}
      <Button>
        <Link href="/login">Se connecter</Link>
      </Button>
    </div>

    <div className='bg-white mt-20 lg:grid-cols-2 grid-cols-1 px-20 minh-h-[70vh] items-center grid gap-10'>
      <div className='col-span-1'>
        <div className='flex flex-col gap-5'>

          
          {/* Section Titre */}
          <h1 className='text-2xl font-bold!'>Head Spa</h1>
          <p className='text-sm text-gray-600'>Revitalisez votre esprit, rafraîchissez votre âme avec le Head Spa</p>
          
          <Homecover></Homecover>

           {/* Section Bouton */}
          <Button className='w-max'>NOS SERVICES</Button>
        </div>
      </div>
    </div>

    </div>


  )
}

export default Homepage