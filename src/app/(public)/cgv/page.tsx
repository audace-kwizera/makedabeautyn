import Cgvbody from '@/components/Cgv/cgv'
import Footer from '@/layout-provider/footer'
import Headernav from '@/layout-provider/header-nav'
import React from 'react'

const Cgv = () => {
    return (
        <div>
            {/* Header */}
            <Headernav></Headernav>

            {/* Corps */}
            <div className='container__body'>
                <div>
                    <div>
                        <Cgvbody />
                    </div>
                </div>
            </div>

            {/* Footer */}
            <Footer />

        </div>
    )
}

export default Cgv