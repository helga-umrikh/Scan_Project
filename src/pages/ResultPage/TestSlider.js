import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


export const TestSlider = () => {
  return (
    <Swiper
        slidesPerView={3}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        grabCursor={true}
        // keyboard={{
        //   enabled: true,
        // }}
        // breakpoints={{
        //   769: {
        //     slidesPerView: 2,
        //     slidesPerGroup: 2,
        //   },
        // }}
        navigation={true}
        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
      >
        <SwiperSlide>
          <div>Swiper slide</div>
        </SwiperSlide>
        <SwiperSlide>
          <div>Swiper slide</div>
        </SwiperSlide>
        <SwiperSlide>
          <div>Swiper slide</div>
        </SwiperSlide>
        <SwiperSlide>
          <div>Swiper slide</div>
        </SwiperSlide>
        <SwiperSlide>
          <div>Swiper slide</div>
        </SwiperSlide>
        <SwiperSlide>
          <div>Swiper slide</div>
        </SwiperSlide>
        <SwiperSlide>
          <div>Swiper slide</div>
        </SwiperSlide>
        <SwiperSlide>
          <div>Swiper slide</div>
        </SwiperSlide>
        <SwiperSlide>
          <div>Swiper slide</div>
        </SwiperSlide>
      </Swiper>
  )
}

export default TestSlider