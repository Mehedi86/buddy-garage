import Image from 'next/image'
import React from 'react'

export default function Contact() {
    return (
        <div className='bg-black h-[250px] w-full rounded-2xl text-white flex items-center justify-center my-24'>
            <div className='flex items-center justify-center gap-12'>
                <div className='flex gap-4 items-center'>
                    <Image src={'/assets/images/contact/date.png'} width={40} height={30} alt='date' />
                    <div>
                        <p className='text-lg font-semibold'>We are open monday-friday</p>
                        <h1 className='text-4xl'>7:00 am - 9:00 pm</h1>
                    </div>
                </div>
                <div className='flex gap-4 items-center'>
                    <Image src={'/assets/images/contact/dialer.png'} width={40} height={30} alt='date' />
                    <div>
                        <p className='text-lg font-semibold'>Have a question?</p>
                        <h1 className='text-4xl'>+893473257</h1>
                    </div>
                </div>
                <div className='flex gap-4 items-center'>
                    <Image src={'/assets/images/contact/location.png'} width={40} height={30} alt='date' />
                    <div>
                        <p className='text-lg font-semibold'>Need a repair? our address</p>
                        <h1 className='text-4xl'>Liza Street, New York</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
