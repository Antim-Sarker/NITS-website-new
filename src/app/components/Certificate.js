"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function Certificate() {
  const certificates = [
    { src: "/certifications/20022-1-2013-1.png", alt: "ISO 20022 Certificate" },
    { src: "/certifications/9001-2015-1.png", alt: "ISO 9001 Certificate" },
    { src: "/certifications/27001-2022-1.png", alt: "ISO 27001 Certificate" },
    { src: "/certifications/basis.png", alt: "Extra Certificate 1" },
    { src: "/certifications/bgm.png", alt: "Extra Certificate 2" },
    { src: "/certifications/chamber.jpeg", alt: "Extra Certificate 3" },
  ];

  return (
    <section id="certifications" className="py-8 bg-[#f7931e]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-white">
          Our Certifications
        </h2>

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={16}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          navigation
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop
          className="rounded-2xl"
        >
          {certificates.map((cert, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-2xl shadow-md p-4 sm:p-6 flex items-center justify-center">
                <div className="relative w-64 sm:w-72 md:w-80 h-64 sm:h-80 md:h-96">
                  <Image
                    src={cert.src}
                    alt={cert.alt}
                    fill
                    className="object-contain rounded-lg"
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
