"use client";

import Image from "next/image";
import { useCallback, useState } from "react";
import { Swiper as SwiperType } from "swiper";
import { AudioPlayer } from "react-audio-play";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, FreeMode, Navigation, Thumbs } from "swiper/modules";

import { albums } from "@/lib/data";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

export const AlbumsSlider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  const handleSwiper = useCallback((swiper: SwiperType) => {
    setThumbsSwiper(swiper);
  }, []);

  return (
    <>
      <Swiper
        effect={"coverflow"}
        speed={1000}
        spaceBetween={80}
        allowTouchMove={false}
        thumbs={{
          swiper: thumbsSwiper,
        }}
        modules={[EffectCoverflow, FreeMode, Navigation, Thumbs]}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        className="album-slider"
      >
        {albums.map(({ id, img, title, tracks }) => (
          <SwiperSlide key={id} className="mb-12">
            <div className="p-6 xl:p-12 w-full flex flex-col xl:flex-row items-center gap-x-12 bg-secondary/80 rounded-[10px]">
              <div className="relative hidden xl:block size-75 xl:size-125 cursor-pointer rounded-[10px] overflow-hidden">
                <Image
                  src={img}
                  alt={title}
                  fill
                  priority
                  className="object-contain"
                />
              </div>
              <div className="w-full h-125 flex-1 flex">
                <ul className="flex-1 flex flex-col xl:px-12">
                  {tracks.map(({ title, src }, index) => (
                    <li key={title} className="w-full h-125 flex flex-1">
                      <div className="flex-1 flex items-center gap-x-2 capitalize font-medium xl:font-semibold">
                        <p className="text-accent text-sm xl:text-lg">
                          0{index + 1}.
                        </p>
                        <p className="text-sm xl:text-base">{title}</p>
                      </div>
                      <div>
                        <AudioPlayer
                          style={{
                            background: "transparent",
                            boxShadow: "none",
                            width: "100%",
                          }}
                          src={src}
                          loop
                          preload="none"
                          color="#ffffff"
                          volume={20}
                          volumePlacement="bottom"
                          className="album-player"
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={handleSwiper}
        breakpoints={{
          320: {
            slidesPerView: 2,
            speed: 10,
          },
          425: {
            slidesPerView: 2,
            speed: 30,
          },
          768: {
            slidesPerView: 3,
            speed: 30,
          },
          1024: {
            slidesPerView: 4,
            speed: 30,
          },
          1310: {
            slidesPerView: 5,
            speed: 30,
          },
        }}
        spaceBetween={20}
        slidesPerView={5}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="thumb-slider"
      >
        {albums.map(({ id, img, title }) => (
          <SwiperSlide
            key={id}
            className="relative group overflow-hidden border-2 border-transparent w-63.5 rounded-[10px]"
          >
            <div className="relative size-48 sm:size-90 md:size-60 cursor-pointer">
              <Image
                src={img}
                alt={title}
                fill
                priority
                className="object-contain group-hover:scale-105 transition-all duration-300"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
