"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import Image from "next/image";

export const Skills = () => {
  return (
    <div
      className="flex flex-col gap-[20px] items-center justify-center"
      id="skills"
    >
      <p className="text-4xl font-bold text-white mb-4">Skills</p>
      <Swiper
        spaceBetween={50}
        slidesPerView={5}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        loop={true}
        speed={4000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        modules={[Autoplay]}
        className="max-w-full my-0 mx-auto"
      >
        <SwiperSlide>
          <Image src="/images/react.svg" width={50} height={50} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/images/javascript.svg" width={50} height={50} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/images/html.svg" width={50} height={50} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/images/dotnet.svg" width={50} height={50} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/images/angular.svg" width={50} height={50} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/images/vue.svg" width={50} height={50} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/images/typescript.svg" width={50} height={50} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/images/tailwind.svg" width={50} height={50} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/images/nextjs.svg" width={50} height={50} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/images/strapi.svg" width={50} height={50} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
