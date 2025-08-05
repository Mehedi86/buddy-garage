'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

export default function Banner() {
  const [isMounted, setIsMounted] = useState(false);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="relative my-12 w-full max-w-7xl mx-auto rounded overflow-hidden">
      {/* Custom Navigation Buttons */}
      <button
        ref={prevRef}
        className="absolute z-20 bottom-20 -translate-y-1/2 right-40 bg-red-400 p-2 rounded-full text-white hover:bg-black/70"
      >
        <MdKeyboardArrowLeft size={30} />
      </button>
      <button
        ref={nextRef}
        className="absolute z-20 bottom-20 -translate-y-1/2 right-20 bg-red-400 p-2 rounded-full text-white hover:bg-black/70"
      >
        <MdKeyboardArrowRight size={30} />
      </button>

      {/* Swiper Slider */}
      <Swiper
        modules={[Autoplay, Navigation]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        loop={true}
        speed={1000}
        className="rounded-xl"
      >
        {[1, 2, 3, 4, 5, 6].map((num) => (
          <SwiperSlide key={num}>
            <div className="relative w-full h-[750px]">
              <img
                src={`/assets/images/banner/${num}.jpg`}
                alt={`Banner ${num}`}
                className="w-full h-full object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-black/30 z-10 flex items-center px-20">
                <div className="w-3/6 space-y-6 text-white z-20">
                  <h1 className="text-5xl font-bold">
                    Affordable Price For Car Servicing
                  </h1>
                  <p className="text-lg">
                    There are many variations of passages available, but the majority have suffered alteration in some form
                  </p>
                  <div className="space-x-4">
                    <button className="btn btn-error rounded text-white">Discover More</button>
                    <button className="btn btn-outline text-white rounded">Latest Project</button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
