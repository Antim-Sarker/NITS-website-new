"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Product() {
  return (
    <section id="products">
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 lg:px-20">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Product
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our innovative product designed to enhance your daily life with advanced features, premium quality, and unmatched performance.
            </p>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left: Product Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <div className="relative w-full max-w-md h-[400px] md:h-[500px] lg:h-[550px] rounded-xl shadow-2xl overflow-hidden">
                <Image
                  src="/12id.png"
                  alt="Product"
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>

            {/* Right: Product Description */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-gray-800">
                Expert leaders in ID Technology
              </h2>
              <p className="text-gray-600 text-lg">
                A major reason cyberattacks occur is the difficulty in uniquely identifying users. We solve this issue by creating a unique user identity without the need for traditional credentials. This eliminates the reliance on SMS or one-time passwords (OTPs). Our unique identity relies on real-time biometrics and AI.
              </p>

              <a href="https://www.12id.com/" target="_blank" rel="noopener noreferrer">
                <button className="mt-4 px-6 py-3 bg-orange-500 text-white rounded-lg shadow hover:bg-orange-600 transition">
                  Know More
                </button>
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </section>
  );
}
