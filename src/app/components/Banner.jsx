'use client'

import React from 'react'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'

export default function Banner() {
    const [sliderRef, instanceRef] = useKeenSlider(
        { loop: true},
        {
            slideChanged() {
                console.log('slide changed')
            },
        },
        [
            // add plugins here
        ]
    )
    return (
        <div ref={sliderRef} className="keen-slider">
            {[1, 2, 3, 4, 5, 6].map((num) => (
                <div key={num} className="keen-slider__slide relative text-white">
                    <div className='absolute inset-0 bg-black/20 z-10 rounded-2xl px-30 flex items-center'>
                        <div className='w-3/6 space-y-8'>
                            <h1 className='text-6xl font-bold'>Affordable Price For Car Servicing</h1>
                            <p className='text-xl'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className='space-x-4'>
                                <button className='btn btn-error rounded btn-xl text-white'>Discover More</button>
                                <button className="btn btn-outline btn-white rounded btn-xl">Latest-project</button>
                            </div>
                        </div>
                    </div>
                    <img src={`/assets/images/banner/${num}.jpg`} className='rounded-xl w-full h-[750px]' />
                </div>
            ))}

        </div>
    )
}
