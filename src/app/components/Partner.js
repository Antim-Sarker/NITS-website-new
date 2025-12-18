"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Partner() {
  const containerRef = useRef(null);

  // Auto-scroll animation
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let position = 0;
    const speed = 0.7; // Adjust speed if needed

    const scroll = () => {
      position -= speed;
      if (Math.abs(position) >= container.scrollWidth / 2) {
        position = 0;
      }
      container.style.transform = `translateX(${position}px)`;
      requestAnimationFrame(scroll);
    };

    scroll();
  }, []);

  // Partner logos
  const logos = [
    "/partners/Oracle.jpg",
    "/partners/dell.png",
    "/partners/edb.png",
    "/partners/huawei.png",
    "/partners/redhat.png",
    "/partners/microsoft.png",
    "/partners/police.png",
  ];

  return (
    <section id="partners" className="py-12 bg-white">
      <h2 className="text-center text-2xl md:text-3xl font-bold mb-8">
        Our Partners
      </h2>

      <div className="overflow-hidden">
        <div ref={containerRef} className="flex gap-x-8 will-change-transform">
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="w-[240px] h-[120px] flex items-center justify-center flex-shrink-0 border rounded-lg p-1"
            >
              <div className="relative w-full h-full">
                <Image
                  src={logo}
                  alt={`partner-${index}`}
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
