"use client";

import Loading from "@/components/Loading";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { useLoading } from "../context/LoadingContext";

const Page = () => {
    const [bookings, setBooking] = useState([]);
    const { loading, setLoading } = useLoading();

    useEffect(() => {
        const setMyBookings = async () => {
            setLoading(true); // Start loading
            try {
                const res = await fetch('http://localhost:3000/api/service');
                const data = await res.json();
                setBooking(data);
            } catch (error) {
                console.error("Failed to fetch bookings:", error);
            } finally {
                setLoading(false); // Stop loading
            }
        };
        setMyBookings();
    }, [setLoading]);

    const handleDelete = async (id) => {
        try {
            const res = await fetch(`http://localhost:3000/api/service/${id}`, {
                method: "DELETE",
            });
            const data = await res.json();
            const remaining = bookings.filter(item => item._id !== id);
            setBooking(remaining);
        } catch (error) {
            console.error("Failed to delete:", error);
        }
    };

    if (loading) return <Loading />;

    return (
        <div className="container mx-auto">
            <ToastContainer />
            {/* Banner */}
            <div className="relative h-72">
                <Image
                    className="absolute h-72 w-full object-cover"
                    src="/assets/images/about_us/parts.jpg"
                    alt="service"
                    width={1920}
                    height={1080}
                    style={{ width: "90vw" }}
                />
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                    <h1 className="text-white text-3xl font-bold ml-8">My Bookings</h1>
                </div>
            </div>

            {/* Bookings Table */}
            <div className="mt-12 overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Service Name</th>
                            <th>Price</th>
                            <th>Booking Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.map(({ serviceTitle, _id, date, price }, index) => (
                            <tr key={_id}>
                                <td>{index + 1}</td>
                                <td>{serviceTitle}</td>
                                <td>{price}</td>
                                <td>{date}</td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <Link href={`/my-bookings/update/${_id}`}>
                                            <button className="btn btn-primary">Edit</button>
                                        </Link>
                                        <button
                                            onClick={() => handleDelete(_id)}
                                            className="btn btn-error"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Page;
