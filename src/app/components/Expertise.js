import Image from "next/image";

const expertise = [
  "Banking Services: Implementation of Temenos Transact (Core Banking) and Infinity (Digital Banking Platform).",
  "Temenos Payment Hub: Streamlined payment processing.",
  "E-commerce and fintech connectivity.",
  "Regulatory and compliance solutions.",
  "Analytics and data lakes for actionable insights.",
  "Offshore development, training, and quality/stress/performance testing.",
  "Interface development and integration.",
  "Hardware and database conversion.",
  "Non-core/L3 support.",
  "Product ideation and solution design.",
  "Test automation and progressive migration.",
  "Build and release engineering (DevOps).",
  "Expert consultation on system upgrades.",
  "Financial crime mitigation and managed services.",
  "Management Consulting: Strategic guidance for business growth.",
  "Middleware and API Integration: Seamless system connectivity.",
  "Software Management: End-to-end software lifecycle support.",
];

export default function Expertise() {
  return (
    <section id="expertise" className="py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Expertise
          </h2>
          <p className="text-lg text-black max-w-3xl mx-auto mt-4">
            Driven by customer service and a commitment to your business success,{" "}
            <span className="text-black">
              Nazihar IT Solution Limited (NITSL)
            </span>
            , offers specialized solutions to ensure your organization stays future-fit and competitive.
          </p>
        </div>

        {/* Expertise Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertise.map((item, index) => (
            <div
              key={index}
              className="bg-gray-500 shadow-md rounded-2xl p-6 flex items-start gap-4 hover:shadow-lg transition transform hover:-translate-y-1"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#f7931e] flex items-center justify-center text-white font-semibold">
                {index + 1}
              </div>
              <p className="text-white text-sm leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
