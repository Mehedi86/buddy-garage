import Link from 'next/link';
import React from 'react'
import { FaArrowRight } from "react-icons/fa";

export default function ServiceCard({ serviceData }) {
  const { img, title, price, _id } = serviceData;
  return (
    <div className='border border-neutral-200 rounded-xl p-6'>
      <img src={img} className='rounded-xl w-full h-[250px]' />
      <div className='pt-2'>
        <h1 className='text-2xl font-bold'>{title}</h1>
        <div className='flex justify-between items-center pt-4'>
          <p className='text-red-400 font-semibold'>Cost: {price}</p>
          <Link href={`/services/${_id}`}>
            <FaArrowRight size={20} className='text-red-400' />
          </Link>
        </div>
      </div>
    </div>
  )
}
