import React from 'react'

export default function AboutUs() {
  return (
    <div className='flex mt-30 min-h-[600px] space-x-2'>
      <div className='w-1/2 relative'>
        <img src={"/assets/images/about_us/person.jpg"} className='rounded-lg w-2/3' alt="" />
        <div className='absolute bg-white p-2 rounded-lg w-[400px] top-40 left-60'>
          <img src={"/assets/images/about_us/parts.jpg"} className='w-full' alt="" />
        </div>
      </div>
      <div className='w-1/2 space-y-3'>
        <p className='text-xl text-[#FF3811] font-bold'>About Us</p>
        <h1 className='text-4xl font-bold'>We are qualified <br /> & of experience <br /> in this field</h1>

        <div className='w-2/3 space-y-3 text-neutral-400 font-semibold'>
          <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>

          <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
        </div>
        <div>
          <button className='btn btn-error rounded btn-xl text-white'>Get More Info</button>
        </div>
      </div>
    </div>
  )
}
