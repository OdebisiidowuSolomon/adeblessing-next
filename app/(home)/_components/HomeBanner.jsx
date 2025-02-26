'use client'

import Image from 'next/image'

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './style.css'
import '@/app/globals.css'

import { Autoplay, Pagination, Navigation } from 'swiper/modules';



function HomeBanner() {

    const swiperRef = useRef(null)

    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <>
            <Swiper
                // spaceBetween={30}
                // centeredSlides={true}
                // autoplay={{
                //   delay: 5000,
                //   disableOnInteraction: false,
                // }}
                pagination={{
                    clickable: true,
                }}
                // navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onSwiper={(swiper) => swiperRef.current = swiper}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper"
                // style={{ height: '100vh' }}
            >
                <SwiperSlide><SingleSlider /></SwiperSlide>
                <SwiperSlide><SingleSlider /></SwiperSlide>
               
                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>

            </Swiper>
            <button
                onClick={() => swiperRef.current?.slidePrev()}
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-red-700 text-white p-2 rounded"
            >
                Prev
            </button>
            <button
                onClick={() => swiperRef.current?.slideNext()}
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-blackl text-white p-2 rounded"
            >
                Next
            </button>
        </>
    );
}

export default HomeBanner



const SingleSlider = () => {
    return <div className="h-full w-full items-center flex bg-[url('/assets/images/slider1.jpg')] bg-cover bg-center bg-no-repeat">
        <div className='ml-[15%] flex flex-col items-start mt-16'>
            <div className=''>
                <p className='text-[orange] text-7xl leading-[80px] text-start'>The Story Of <br/>Modern<br/>Stylish Salon</p>
            </div>

            <div>
                <p className='text-white w-[45%] text-start mt-8'>The Tale of the Chic Modern SalonExpert stylists in a lighthearted and welcoming setting. This is something you deserve.</p>
            </div>

            <button className='mt-16 py-3 px-6 text-base text-white'>
                Shop Now
            </button>

        </div>
    </div>
}