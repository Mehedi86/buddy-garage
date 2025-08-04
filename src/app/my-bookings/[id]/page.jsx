'use client';

import React, { use, useEffect, useState } from 'react';
import Image from 'next/image';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function UpdateBooking({ params }) {
  const { id } = use(params); 

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  console.log(data)

  useEffect(() => {
    const fetchBooking = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/my-bookings/${id}`);
        const result = await res.json();
        setData(result);
      } catch (error) {
        console.error('Failed to fetch booking:', error);
        toast.error('Failed to load booking data');
      } finally {
        setLoading(false);
      }
    };

    fetchBooking();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const form = e.target;
    const updatedBooking = {
      date: form.date.value,
      phone: form.phone.value,
      address: form.address.value,
    };

    try {
      const res = await fetch(`http://localhost:3000/api/my-bookings/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedBooking),
      });

      if (res.ok) {
        toast.success('Booking updated successfully!');
      } else {
        toast.error('Failed to update booking');
      }
    } catch (error) {
      console.error('Update error:', error);
      toast.error('An error occurred');
    }
  };

  if (loading) return <div className="p-10 text-center">Loading...</div>;
  if (!data) return <div className="p-10 text-center">No booking found.</div>;

  return (
    <div className="w-full px-4 md:px-8 lg:px-16 py-10">
      <ToastContainer />
      <div className="relative h-60 md:h-72 lg:h-[320px] rounded-xl overflow-hidden shadow-md mb-12">
        <Image
          src={data?.img || "/placeholder.png"}
          alt="service"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/20 flex items-center justify-center">
          <h1 className="text-white text-2xl md:text-4xl font-bold">
            Update Info - {data?.serviceTitle}
          </h1>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6 md:p-10 max-w-4xl mx-auto">
        <form onSubmit={handleUpdate} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                defaultValue={data?.name || ""}
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
                defaultValue={data?.email || ""}
                className="w-full input input-bordered"
                readOnly
              />
            </div>
            <div>
              <label className="block mb-2 font-medium text-gray-700">Due Amount</label>
              <input
                type="text"
                name="price"
                defaultValue={data?.price}
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
                defaultValue={data?.phone || ""}
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
                defaultValue={data?.address || ""}
                className="w-full input input-bordered"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full md:w-auto px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300"
            >
              Update Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
