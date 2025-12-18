"use client";

import Image from "next/image";
import Navbar from "./components/Navbar";
import dynamic from "next/dynamic";

// Lazy-load below the fold components
const Service = dynamic(() => import("./components/Service"));
const Client = dynamic(() => import("./components/Client"));
const Certificate = dynamic(() => import("./components/Certificate"));
const Product = dynamic(() => import("./components/Product"));
const Expertise = dynamic(() => import("./components/Expertise"));
const Feature = dynamic(() => import("./components/Feature"));
const MDmessage = dynamic(() => import("./components/MDmessage"));
const Partner = dynamic(() => import("./components/Partner"));
const Events = dynamic(() => import("./components/Events"));
const SCR = dynamic(() => import("./components/SCR"));
const Contact = dynamic(() => import("./components/Contact"));
const SocialTouch = dynamic(() => import("./components/SocialTouch"));
const Footer = dynamic(() => import("./components/Footer"));

export default function Home() {
  const fullTextLines = [
    "Nazihar IT Solution Ltd., a flagship company of Nazihar Group, is a premier software development powerhouse. With a global footprint and a comprehensive portfolio of software services, we harness the latest technologies to meet the evolving needs of our diverse clientele.",
    "High-quality software development services",
    "Cutting-edge technological solutions",
    "Reliable, scalable, and secure IT systems",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative h-[70vh] sm:h-[80vh] md:min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 opacity-90"></div>
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="/videos/video.mp4" type="video/mp4" />
        </video>
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6">
            Future-ready innovation
          </h1>
          <p className="text-base sm:text-xl md:text-2xl max-w-3xl mx-auto">
            Bringing You closer to Tomorrow&apos;s IT Innovations for Greater Sustainability Today
          </p>
        </div>
      </section>

      {/* Who We Are Section */}
      <section id="who-we-are" className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-5/12 flex justify-center">
            <div className="w-full h-56 sm:h-72 md:h-80 relative rounded-2xl overflow-hidden shadow-lg">
              <Image src="/pic-5.jpg" alt="Who We Are" fill className="object-cover" priority />
            </div>
          </div>
          <div className="w-full md:w-7/12 text-gray-900">
            <div className="space-y-4 text-left">
              {fullTextLines.map((line, idx) => (
                <div key={idx} className="flex items-start">
                  {idx >= 1 && <span className="w-3 h-3 mt-2 rounded-full bg-orange-500 flex-shrink-0 mr-3"></span>}
                  <p className="text-sm md:text-base leading-relaxed flex-1">{line}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-[#f7931e] py-12 mt-6 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-6">Our Mission & Vision</h2>
          <p className="italic text-lg md:text-xl">
            &quot;To provide technology-led solutions of the highest quality with the most definitive, professional and innovative resources&quot;
          </p>
        </div>
      </section>

      {/* Lazy-loaded Sections */}
      <Service />
      <Client />
      <Certificate />
      <Product />
      <Expertise />
      <Feature />
      <MDmessage />
      <Partner />
      <Events />
      <SCR />
      <Contact />
      <SocialTouch />
      <Footer />
    </div>
  );
}
