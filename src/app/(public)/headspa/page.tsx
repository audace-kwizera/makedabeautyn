import HeadSpaBody from '@/components/HeadSpa/headspa'
import Footer from '@/layout-provider/footer'
import Headernav from '@/layout-provider/header-nav'
import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const HeadSpa = () => {
    return (
        <div>
            {/* Header */}
            <Headernav></Headernav>

            {/* Body */}
            <HeadSpaBody />

            {/* Section Bouton */}
            <div className='container__homecover__button__hairneedling__headspa container__homecover__button__hairneedling container__homecover__button'>
                <Button className='container__homecover__button__primary'><Link className='container__homecover__button__primary__text' href="https://www.planity.com/makeda-beauty-head-spa-67240-bischwiller">NOS SERVICES</Link></Button>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    )
}

export default HeadSpa