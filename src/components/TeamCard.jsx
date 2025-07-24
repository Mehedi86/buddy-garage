import React from 'react'

export default function TeamCard({ memberData }) {

    const { name, expertise, img } = memberData;
    return (
        <div className='border border-neutral-200 rounded-xl p-6'>
            <img src={img} className='rounded-xl w-full h-[250px]' />
            <div className='pt-2 text-center space-y-2'>
                <h1 className='text-2xl font-bold'>{name}</h1>
                <p className='text-red-400 font-semibold'>{expertise}</p>
                <div className='flex justify-center'>
                    <img src="/assets/images/social/social-icons.png" alt="social-icons" />
                </div>
            </div>
        </div>
    )
}
