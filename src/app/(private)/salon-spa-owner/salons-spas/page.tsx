import { Button } from '@/components/ui/button'
import PageTitle from '@/components/ui/page-title'
import Link from 'next/link'
import React from 'react'

const SalonsSpasList = () => {
  return (
    <div>
      <div>
        <PageTitle title='Salons & Spas' />
        <Button>
          <Link href="/salons-spa-owner/salons-spas/add">
            Add Salon/Spa
          </Link>
        </Button>
      </div>
    </div>
  )
}

export default SalonsSpasList