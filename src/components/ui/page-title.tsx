import React from 'react'

const PageTitle = ({ title }: { title: string }) => {
  return (
    <div>
      <span className='container__policy__header__title'>
        {title}
      </span>
    </div>
  )
}

export default PageTitle