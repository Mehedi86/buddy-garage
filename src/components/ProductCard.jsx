import React from 'react'
import { FaStar } from "react-icons/fa";

export default function ProductCard({ productData }) {
    const { name, price, img } = productData;
    return (
        <div className='border border-neutral-200 rounded-xl p-6'>
            <div className='bg-neutral-200 rounded-lg p-4'>
                <img src={img} className='rounded-xl w-full h-[250px]' />
            </div>
            <div className='pt-2 text-center space-y-4'>
                <div className='flex justify-center items-center'>
                    {[1, 2, 3, 4, 5].map(num => <FaStar key={num} size={20} className='text-amber-400' />)}
                </div>
                <h1 className='text-2xl font-bold'>{name}</h1>
                <p className='text-red-400 font-semibold'>Cost: {price}</p>
            </div>
        </div>
    )
}
