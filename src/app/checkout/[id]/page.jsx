'use client';

import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Checkout = () => {
    const { data: session } = useSession();
    const params = useParams();
    const [service, setService] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadService = async () => {
            try {
                const res = await fetch(`http://localhost:3000/api/service/${params.id}`);
                const data = await res.json();
                setService(data);
                setLoading(false);
            } catch (error) {
                console.error("Failed to load service:", error);
                setLoading(false);
            }
        };
        if (params?.id) loadService();
    }, [params]);

    const handleBooking = async (event) => {
        event.preventDefault();
        const form = event.target;

        const newBooking = {
            email: session?.user?.email,
            name: session?.user?.name,
            address: form.address.value,
            phone: form.phone.value,
            date: form.date.value,
            serviceTitle: service.title,
            serviceID: service._id,
            price: service.price,
        };

        try {
            const resp = await fetch('http://localhost:3000/api/service', {
                method: 'POST',
                body: JSON.stringify(newBooking),
                headers: {
                    "content-type": "application/json"
                }
            });
            const response = await resp.json();
            toast.success(response?.message || "Booking successful");
            form.reset();
        } catch (err) {
            toast.error("Booking failed");
            console.error("Booking failed", err);
        }
    };

    if (loading) return <p className="text-center mt-12 text-lg font-medium">Loading...</p>;

    const { title, img, price } = service || {};

    return (
        <div className="w-full px-4 md:px-8 lg:px-16 py-10">
            <ToastContainer />
            <div className="relative h-60 md:h-72 lg:h-[320px] rounded-xl overflow-hidden shadow-md mb-12">
                <Image
                    src={img}
                    alt="service"
                    layout="fill"
                    objectFit="cover"
                    className="z-0"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/20 flex items-center justify-center">
                    <h1 className="text-white text-2xl md:text-4xl font-bold">
                        Checkout - {title}
                    </h1>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 md:p-10 max-w-4xl mx-auto">
                <form onSubmit={handleBooking} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block mb-2 font-medium text-gray-700">Name</label>
                            <input
                                type="text"
                                name="name"
                                defaultValue={session?.user?.name || ""}
                                className="w-full input input-bordered"
                                readOnly
                            />
                        </div>
                        <div>
                            <label className="block mb-2 font-medium text-gray-700">Date</label>
                            <input
                                type="date"
                                name="date"
                                className="w-full input input-bordered"
                                required
                            />
                        </div>
                        <div>
                            <label className="block mb-2 font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                name="email"
                                defaultValue={session?.user?.email || ""}
                                className="w-full input input-bordered"
                                readOnly
                            />
                        </div>
                        <div>
                            <label className="block mb-2 font-medium text-gray-700">Due Amount</label>
                            <input
                                type="text"
                                name="price"
                                defaultValue={price}
                                className="w-full input input-bordered"
                                readOnly
                            />
                        </div>
                        <div>
                            <label className="block mb-2 font-medium text-gray-700">Phone</label>
                            <input
                                type="text"
                                name="phone"
                                placeholder="Your Phone"
                                required
                                className="w-full input input-bordered"
                            />
                        </div>
                        <div>
                            <label className="block mb-2 font-medium text-gray-700">Present Address</label>
                            <input
                                type="text"
                                name="address"
                                placeholder="Your Address"
                                className="w-full input input-bordered"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="w-full md:w-auto px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300"
                        >
                            Confirm Order
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Checkout;
