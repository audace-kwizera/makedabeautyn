import HeadSpaBody from '@/components/HeadSpa/headspa'
import Footer from '@/layout-provider/footer'
import Headernav from '@/layout-provider/header-nav'
import React from 'react'

const HeadSpa = () => {
    return (
        <div>
            {/* Header */}
            <Headernav></Headernav>

            {/* Body */}
            <HeadSpaBody />

            {/* Footer */}
            <Footer />
        </div>
    )
}

export default HeadSpa