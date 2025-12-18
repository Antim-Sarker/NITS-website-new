import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Events() {
  const news = [
    {
      id: 1,
      title: "Temenos Training Session",
      description: "A breakthrough in seamless digital banking connectivity.",
      photo: "/news/image4.jpeg",
      date: "Aug 20, 2025",
    },
    {
      id: 2,
      title: "Annual Tech Conference 2025",
      description: "Showcasing innovation and future-ready IT solutions.",
      photo: "/news/image2.jpeg",
      date: "Sep 2, 2025",
    },
    {
      id: 3,
      title: "Partnership with Global Bank",
      description: "Strengthening global digital transformation initiatives.",
      photo: "/news/image3.jpeg",
      date: "Sep 12, 2025",
    },
    {
      id: 4,
      title: "Women Kabadi Sponsor",
      description: "Proud sponsor of the Bangladesh Kabaddi Federation.",
      photo: "/news/image5.jpeg",
      date: "Sep 12, 2025",
    },
  ];

  return (
    <section id="news" className="py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            News & Events
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-auto mx-auto">
            Stay updated with the latest happenings, achievements, and events from our team.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true, el: ".custom-pagination" }}
            navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-8"
          >
            {news.map((item, index) => (
              <SwiperSlide key={item.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden flex flex-col h-[420px]"
                >
                  {/* Image */}
                  <div className="w-full h-48 md:h-56 lg:h-64 relative flex-shrink-0">
                    <Image
                      src={item.photo}
                      alt={item.title}
                      fill
                      className="object-cover rounded-t-2xl"
                      unoptimized
                    />
                  </div>

                  {/* Content */}
                  <div className="p-4 flex flex-col flex-grow">
                    <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-1 flex-shrink-0">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm flex-grow">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Arrows */}
          <div className="custom-prev absolute top-1/2 -translate-y-1/2 left-0 z-20 cursor-pointer w-10 h-10 flex items-center justify-center rounded-full bg-black/40 text-white hover:bg-orange-500">
            <BsChevronLeft size={20} />
          </div>
          <div className="custom-next absolute top-1/2 -translate-y-1/2 right-0 z-20 cursor-pointer w-10 h-10 flex items-center justify-center rounded-full bg-black/40 text-white hover:bg-orange-500">
            <BsChevronRight size={20} />
          </div>

          {/* Pagination Dots */}
          <div className="custom-pagination absolute -bottom-4 left-1/2 -translate-x-1/2 z-20 flex space-x-2"></div>
        </div>
      </div>
    </section>
  );
}
