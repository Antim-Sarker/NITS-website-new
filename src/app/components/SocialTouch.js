"use client";

import Link from "next/link";
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";

export default function SocialTouch() {
  const socials = [
    {
      name: "Facebook",
      icon: <Facebook className="w-6 h-6 group-hover:rotate-12 transition-transform" />,
      link: "https://www.facebook.com/naziharit/",
    },
    {
      name: "Instagram",
      icon: <Instagram className="w-6 h-6 group-hover:rotate-12 transition-transform" />,
      link: "https://www.linkedin.com/company/nazihar-it-solution-limited/",
    },
    {
      name: "Twitter",
      icon: <Twitter className="w-6 h-6 group-hover:rotate-12 transition-transform" />,
      link: "https://www.linkedin.com/company/nazihar-it-solution-limited/",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-6 h-6 group-hover:rotate-12 transition-transform" />,
      link: "https://www.linkedin.com/company/nazihar-it-solution-limited/",
    },
    
  ];

  return (
    <div className="mb-10">
      <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
        Social Touch
      </h3>

      <div className="flex justify-center space-x-6">
        {socials.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            target="_blank"
            className="group w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center 
              text-white shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300"
          >
            {item.icon}
            <span className="sr-only">{item.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
