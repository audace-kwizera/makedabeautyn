import BraidsBody from '@/components/Braids/braids'
import { Button } from '@/components/ui/button'
import Footer from '@/layout-provider/footer'
import Headernav from '@/layout-provider/header-nav'
import React from 'react'

const Braids = () => {
    return (
        <div>

            {/* Header */}
            <Headernav></Headernav>

            <div className='container__body'>
                <div>
                    <div>

                        <BraidsBody></BraidsBody>

                        {/* Section Bouton */}
                        <div className='container__homecover__button__hairneedling container__homecover__button'>
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

export default Braids