'use client'
import SectionTitle from '@/components/SectionTitle'
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function Testimonial() {

    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        const testimonialData = async () => {
            const res = await fetch('http://localhost:3000/api/testimonials');
            const data = await res.json();
            setTestimonials(data)
        }
        testimonialData();
    }, [])
    
    return (
        <div>
            <SectionTitle
                subTitle="What Customer Says"
                title="Testimonial"
                details="the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
            />
            <div className="max-w-5xl mx-auto px-4 py-10">
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={30}
                    slidesPerView={2}
                    navigation={true}
                    loop={true}
                    className="testimonial-swiper"
                >
                    {testimonials.map((item) => (
                        <SwiperSlide key={item._id}>
                            <div className="p-6 border border-neutral-200 rounded-lg shadow bg-white h-[200px]">
                                <div className="flex items-center gap-4 mb-4">
                                    <img
                                        src={item.img}
                                        alt={item.name}
                                        className="w-12 h-12 rounded-full object-cover"
                                    />
                                    <div>
                                        <h3 className="font-semibold text-lg">{item.name}</h3>
                                        <p className="text-sm text-gray-500">{item.role}</p>
                                    </div>
                                    <div className="ml-auto text-pink-300 text-4xl font-bold">”</div>
                                </div>
                                <p className="text-gray-600 text-sm mb-4">{item.text}</p>
                                <div className="text-orange-400">
                                    {"★".repeat(item.rating)}
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}
