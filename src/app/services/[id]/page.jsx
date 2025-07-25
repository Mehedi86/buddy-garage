import dbConnect from '@/lib/dbConnect';
import { ObjectId } from 'mongodb';
import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

export default async function page({ params }) {
    const p = await params;
    const serviceCollection = dbConnect("services");
    const service = await serviceCollection.findOne({ _id: new ObjectId(p.id) });
    return (
        <div>
            {/* banner section */}
            <section>
                <div className="container mx-auto relative mt-10 mb-20">

                    {/* Background image */}
                    <img
                        src="/assets/images/checkout/checkout.png"
                        className="w-full h-[300px] object-cover rounded-xl"
                        alt="checkout"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/20 z-10 rounded-xl"></div>

                    {/* Angled banner */}
                    <div className="absolute top-5 left-5 z-20">
                        <div className="bg-[#FF3C00] text-white px-6 py-2 text-sm font-semibold custom-clip">
                            Home/Service Details
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className='container mx-auto grid grid-cols-12 gap-4'>
                    {/* left side */}
                    <div className='col-span-8 '>
                        <div className='h-[350px] w-full'>
                            <img src={service.img} className='w-full h-full object-fill rounded' alt="" />
                        </div>
                        <div className='my-12 space-y-4'>
                            <h1 className='text-2xl font-bold'>{service.title}</h1>
                            <p className='text-neutral-400'>{service.description}</p>
                        </div>
                        <div className='grid grid-cols-2 gap-4'>
                            {service.facility.map((singleFacility, idx) =>
                                <div key={idx} className='p-12 bg-stone-200 rounded-xl space-y-2 border-t-2 border-t-[#FF3C00]'>
                                    <h1 className='text-xl font-bold'>{singleFacility.name}</h1>
                                    <p className='text-neutral-400'>{singleFacility.details}</p>
                                </div>
                            )}
                        </div>
                    </div>
                    {/* right side */}
                    <div className='col-span-4'>
                        <div className='bg-stone-300 p-6 rounded'>
                            <h1 className='text-xl font-bold'>Services</h1>
                            {service.facility.map((singleFacility, idx) =>
                                <div key={idx} className='flex justify-between items-center p-4 bg-neutral-50 my-4 rounded'>
                                    <p>{singleFacility.name}</p>
                                    <FaArrowRight size={20} className='text-red-500' />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
