import Headernav from '@/layout-provider/header-nav'
import Footer from '@/layout-provider/footer'
import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import PoseDeCilsBody from '@/components/PoseDeCils/posedecils'

const PoseDeCilsPage = () => {
  return (
    <div>
        {/* Header */}
        <Headernav></Headernav>

        <div className='container__body'>
                <div>
                    <div>
                        <PoseDeCilsBody></PoseDeCilsBody>

                        {/* Section Bouton */}
                        <div className='container__cils__content__button container__homecover__button'>
                            <Button className='container__homecover__button__primary'><Link className='container__homecover__button__primary__text' href="https://www.planity.com/makeda-beauty-head-spa-67240-bischwiller">NOS SERVICES</Link></Button>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Footer */}
            <Footer></Footer>
    </div>
  )
}

export default PoseDeCilsPage