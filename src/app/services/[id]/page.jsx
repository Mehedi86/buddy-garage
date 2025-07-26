import dbConnect from '@/lib/dbConnect';
import { ObjectId } from 'mongodb';
import React from 'react';
import { FaArrowRight } from "react-icons/fa6";

export default async function page({ params }) {
    const otherServices = ['Full Car Repair', 'Engine Repair', 'Automatic Services', 'Engine Oil Change', 'Battery Charge'];
    const p = await params;
    const serviceCollection = dbConnect("services");
    const service = await serviceCollection.findOne({ _id: new ObjectId(p.id) });

    return (
        <div>
            {/* banner section */}
            <section>
                <div className="container mx-auto relative mt-10 mb-20">
                    <img
                        src="/assets/images/checkout/checkout.png"
                        className="w-full h-[300px] object-cover rounded-xl"
                        alt="checkout"
                    />
                    <div className="absolute inset-0 bg-black/20 z-10 rounded-xl"></div>
                    <div className="absolute top-5 left-5 z-20">
                        <div className="bg-[#FF3C00] text-white px-6 py-2 text-sm font-semibold custom-clip">
                            Home/Service Details
                        </div>
                    </div>
                </div>
            </section>

            {/* content section */}
            <section>
                <div className='container mx-auto grid grid-cols-12 gap-6'>
                    {/* LEFT SIDE */}
                    <div className='col-span-8'>
                        {/* Service Image */}
                        <div className='h-[350px] w-full'>
                            <img src={service.img} className='w-full h-full object-fill rounded-xl' alt="" />
                        </div>

                        {/* Title & Description */}
                        <div className='my-12 space-y-4'>
                            <h1 className='text-3xl font-bold'>{service.title}</h1>
                            <p className='text-neutral-500 leading-relaxed'>{service.description}</p>
                        </div>

                        {/* Facility Grid */}
                        <div className='grid grid-cols-2 gap-4'>
                            {service.facility.map((singleFacility, idx) =>
                                <div key={idx} className='p-6 bg-stone-100 rounded-xl space-y-2 border-t-2 border-t-[#FF3C00]'>
                                    <h1 className='text-xl font-semibold'>{singleFacility.name}</h1>
                                    <p className='text-neutral-500'>{singleFacility.details}</p>
                                </div>
                            )}
                        </div>

                        {/* More description */}
                        <div className='mt-8 text-neutral-500'>
                            <p>
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                                alteration in some form, by injected humour, or randomised words which don’t look even slightly believable.
                                If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing
                                hidden in the middle of text.
                            </p>
                        </div>

                        {/* Steps section */}
                        <div className='mt-12'>
                            <h1 className='text-2xl font-bold mb-6'>3 Simple Steps to Process</h1>
                            <div className='grid grid-cols-3 gap-4'>
                                {[1, 2, 3].map((step) => (
                                    <div key={step} className='text-center p-6 bg-stone-100 rounded-xl'>
                                        <div className='bg-red-200 p-2 w-14 h-14 mx-auto flex items-center justify-center rounded-full mb-3'>
                                            <div className='w-full h-full mx-auto flex items-center justify-center rounded-full bg-[#FF3C00] text-white text-lg font-bold'>
                                                {`0${step}`}
                                            </div>
                                        </div>
                                        <h3 className='font-bold text-lg'>{`STEP ${step === 1 ? 'ONE' : step === 2 ? 'TWO' : 'THREE'}`}</h3>
                                        <p className='text-neutral-500 mt-2 text-sm'>It uses a dictionary of over 200.</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Video Section */}
                        <div className='my-12'>
                            <div className='relative'>
                                <img src="/assets/images/homeCarousel/2.jpg" alt="Video" className='rounded-xl w-full h-[400px] object-cover' />
                                <div className='absolute inset-0 flex justify-center items-center'>
                                    <button className='w-16 h-16 bg-[#FF3C00] rounded-full flex items-center justify-center text-white text-2xl'>
                                        ▶
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className='col-span-4 space-y-6'>

                        {/* Services Section */}
                        <div className='bg-stone-200 p-6 rounded-xl'>
                            <h1 className='text-xl font-bold mb-4'>Services</h1>
                            {otherServices.map((otherService, idx) =>
                                <div key={idx} className='flex justify-between items-center p-4 bg-white my-2 rounded shadow-sm'>
                                    <p className='font-medium'>{otherService}</p>
                                    <FaArrowRight size={18} className='text-red-500' />
                                </div>
                            )}
                        </div>

                        {/* Download Section */}
                        <div className='bg-black p-6 rounded-xl text-white space-y-4'>
                            <h1 className='text-xl font-bold'>Download</h1>

                            <div className='flex items-center justify-between'>
                                <div className='flex items-center gap-4'>
                                    <img src="/file.svg" className='w-9 h-9' alt="file" />
                                    <p>Our Brochure</p>
                                </div>
                                <div className='bg-[#FF3C00] p-4'>
                                    <FaArrowRight size={18} className='text-white' />
                                </div>
                            </div>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center gap-4'>
                                    <img src="/file.svg" className='w-9 h-9' alt="file" />
                                    <p>Company Details</p>
                                </div>
                                <div className='bg-[#FF3C00] p-4'>
                                    <FaArrowRight size={18} className='text-white' />
                                </div>
                            </div>
                        </div>

                        {/* Car Doctor Section */}
                        <div className='bg-[#1a1a1a] text-white p-6 rounded-xl space-y-4 text-center'>
                            <h1 className='text-xl font-bold'>Car Doctor</h1>
                            <p>Need Help? We Are Here To Help You</p>
                            <button className='bg-[#FF3C00] px-4 py-2 rounded-full font-bold'>Car Doctor Special</button>
                            <p className='text-sm'>Save up to 60% off</p>
                            <button className='bg-white text-[#FF3C00] px-4 py-2 rounded-full font-bold'>Get a Quote</button>
                        </div>

                        {/* Price & Checkout */}
                        <div className='bg-stone-100 p-6 rounded-xl space-y-4 text-center'>
                            <h2 className='text-2xl font-bold'>Price ${service.price}</h2>
                            <button className='bg-[#FF3C00] text-white px-6 py-3 rounded font-bold'>
                                Proceed Checkout
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
