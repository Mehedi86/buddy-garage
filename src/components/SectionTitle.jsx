import React from 'react'

export default function SectionTitle({ title, subTitle, details }) {
    return (
        <div className='text-center space-y-4 py-12'>
            <h1 className='text-xl text-[#FF3811] font-bold'>{title}</h1>
            <p className='text-4xl font-bold'>{subTitle}</p>
            <p className='text-xl text-neutral-600 w-1/2 mx-auto'>{details}</p>
        </div>
    )
}
