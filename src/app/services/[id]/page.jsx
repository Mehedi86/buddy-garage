import dbConnect from '@/lib/dbConnect';
import { ObjectId } from 'mongodb';
import React from 'react'

export default async function page({ params }) {
    const p = await params;
    const serviceCollection = dbConnect("services");
    const service = await serviceCollection.findOne({ _id: new ObjectId(p.id) });
    return (
        <div>
            <section>
                <div className="container mx-auto relative">

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
        </div>
    )
}
