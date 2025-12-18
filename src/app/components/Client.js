"use client";

import Image from "next/image";

export default function Partner() {
  const clientsLogo = [
    "/clients/GIB.png",
    "/clients/IPDC-logo.png",
    "/clients/janata.png",
    "/clients/mercantile.png",
    "/clients/Prime bank.jpg",
  ];

  return (
    <section id="clients" className="py-8 bg-white">
      <h2 className="text-center text-2xl md:text-3xl font-bold mb-8">
        Our Clients
      </h2>

      <p className="text-center text-gray-700 max-w-4xl mx-auto mb-8 px-4 text-sm sm:text-base">
        Nazihar IT Solution works with Temenos Core Banking Solutions, specifically applying 
        Temenos Transact, a next-generation core banking system that empowers financial institutions 
        to modernize and scale their operations. Transact delivers advanced product definition, 
        seamless transaction processing, unparalleled operational scalability, and functional depth 
        that cater to the diverse needs of Retail, Corporate, and Private Banks, as well as Wealth 
        Management institutions.
      </p>

      {/* Logo Carousel */}
      <div className="overflow-hidden">
        <div className="flex gap-x-4 sm:gap-x-6 md:gap-x-8 w-max animate-scroll">
          {[...clientsLogo, ...clientsLogo].map((logo, index) => (
            <div
              key={index}
              className="w-32 sm:w-40 md:w-[240px] h-24 sm:h-32 md:h-[120px] flex items-center justify-center flex-shrink-0 border rounded-lg p-2"
            >
              <div className="relative w-full h-full">
                <Image
                  src={logo}
                  alt={`client-${index}`}
                  fill
                  className="object-contain"
                  priority={index === 0} // only first logo prioritized
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </section>
  );
}
