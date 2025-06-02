import Footer from '@/layout-provider/footer'
import Headernav from '@/layout-provider/header-nav'
import React from 'react'
import { Button } from '@/components/ui/button'
import Contactbody from '@/components/Contact/contact'

const Contact = () => {
  return (
    <div>

      {/* Header */}
      <Headernav></Headernav>

      {/* Corps */}
      <div className='container__body'>
        <div>
          <div >

            <Contactbody />

          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />

    </div>
  )
}

export default Contact