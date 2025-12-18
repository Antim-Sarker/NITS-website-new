"use client";

import { motion } from "framer-motion";
import { CheckCircle, Landmark, BadgeDollarSign, GlobeLock, Hospital, GraduationCap, Factory } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export default function Service() {
  const services = [
    {
      icon: <Landmark className="w-8 h-8 text-white" />,
      title: "Government Bodies",
      description:
        "Professional branding for government agencies, with visual standards that convey authority, trust, and transparency.",
      features: [
        "Interface Design for Government Portals",
        "System-wide UI/UX Standards",
        "Accessible Color Schemes & Typography",
        "Digital Branding Guidelines for Public Services",
      ],
    },
    {
      icon: <BadgeDollarSign className="w-8 h-8 text-white" />,
      title: "Banking Software Solutions",
      description:
        "Robust software solutions designed for the banking sector, delivering secure, scalable, and user-friendly digital experiences.",
      features: ["Core Banking Systems", "Mobile & Web Platforms", "Payment Integration", "Compliance & Security"],
    },
    {
      icon: <GlobeLock className="w-8 h-8 text-white" />,
      title: "Telecom Software Solutions",
      description:
        "Custom software solutions for telecom providers, enabling reliable, scalable, and efficient service delivery across digital platforms.",
      features: ["Billing & CRM Systems", "Network Management Tools", "Subscriber Portals", "API Integration"],
    },
    {
      icon: <Hospital className="w-8 h-8 text-white" />,
      title: "Healthcare",
      description:
        "Smart, secure software solutions for healthcare providers to enhance patient care, streamline operations, and ensure data protection.",
      features: [
        "Electronic Health Records (EHR)",
        "Appointment Management",
        "Telemedicine Platforms",
        "HIPAA-Compliant Systems",
      ],
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-white" />,
      title: "Education Solutions",
      description:
        "Comprehensive software solutions designed to enhance digital learning environments and streamline institutional operations.",
      features: [
        "Student Information Management",
        "Online Classes & Scheduling",
        "Performance Tracking & Reports",
        "Attendance Automation",
      ],
    },
    {
      icon: <Factory className="w-8 h-8 text-white" />,
      title: "Manufacturing Services",
      description:
        "Smart, scalable software systems to optimize production, quality control, and supply chain management in manufacturing operations.",
      features: [
        "Inventory & Resource Planning",
        "Workflow Automation",
        "Real-time Production Monitoring",
        "Quality Assurance & Reporting",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Taking Care of Your Business
          </h2>
          <p className="text-xl text-black max-w-auto mx-auto">
            From brand identity to digital experiences, we offer comprehensive creative solutions for modern businesses.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gray-500">
                <CardHeader>
                  <div className="w-16 h-16 bg-[#f7931e] rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-white">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-white">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-white">
                        <CheckCircle className="w-4 h-4 text-customOrange mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
