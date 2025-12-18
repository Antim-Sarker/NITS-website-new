import { CheckCircle } from "lucide-react";
import Image from "next/image";

export default function Feature() {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Features List */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Nazihar IT Solution?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              We&apos;re not just another design agency. We&apos;re your
              creative partners, dedicated to building brands that make a
              lasting impact.
            </p>

            <div className="space-y-6">
              {[
                {
                  title: "Creative Excellence",
                  desc: "Award-winning designs that stand out in crowded markets.",
                },
                {
                  title: "Fast Delivery",
                  desc: "Quick turnaround times without compromising quality.",
                },
                {
                  title: "Custom Solutions",
                  desc: "Tailored strategies that fit your unique business needs.",
                },
              ].map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <CheckCircle className="w-5 h-5 text-[#f7931e]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Images */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4 flex flex-col justify-center">
              <div className="relative w-full h-48">
                <Image
                  src="/pic-1.jpeg"
                  alt="Creative Process"
                  fill
                  className="rounded-lg object-cover shadow-lg"
                />
              </div>
              <div className="relative w-full h-48">
                <Image
                  src="/pic-2.JPG"
                  alt="Team Collaboration"
                  fill
                  className="rounded-lg object-cover shadow-lg"
                />
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="relative w-full h-48">
                <Image
                  src="/pic-4.JPG"
                  alt="Design Tools"
                  fill
                  className="rounded-lg object-cover shadow-lg"
                />
              </div>
              <div className="relative w-full h-48">
                <Image
                  src="/pic-3.JPG"
                  alt="Brand Strategy"
                  fill
                  className="rounded-lg object-cover shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
