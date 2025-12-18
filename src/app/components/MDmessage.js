"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function MDmessage() {
  const [showMore, setShowMore] = useState(false);

  const shortText =
    "Zillur Rahman Jewell stands as a distinguished entrepreneur whose ventures across diverse markets exemplify strategic foresight, astute leadership, and an unwavering pursuit of excellence. His professional journey reflects a rare blend of vision and capability, establishing him as an influential and highly regarded presence in the international business landscape";

  const fullText = `
• Nazihar IT Solutions Ltd.
• Nazihar Sourcing Limited, UK
• Global Greengen Ltd., UK
• Nazihar News Network
• Nazihar TECH Limited
• Nazihar Holdings Limited

Mr. Rahman is also a valued member of leading business associations and prestigious clubs, including:

• FBCCI (Federation of Bangladesh Chambers of Commerce and Industry)
• DCCI (Dhaka Chamber of Commerce and Industry)
• All Community Club
• Cosmo Baridhara Club
• Dhaka Club
• Boat Club
• British Business Group
• British Chamber of Commerce

Through his role in these organizations, he actively contributes to industry development, international trade relations, and business innovation.`;

  return (
    <section className="py-12 px-6 md:px-20 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        MESSAGE FROM MANAGING DIRECTOR
      </h2>
      <div className="h-1 w-20 bg-[#f7931e] mx-auto mb-8"></div>

      <div className="grid md:grid-cols-2 gap-6 items-start">
        {/* Image */}
        <div className="flex justify-center">
          <div className="w-[300px] md:w-[400px] h-[400px] md:h-[500px] relative rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/MD-photo.jpeg"
              alt="Zillur Rahman Jewell"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
        </div>

        {/* Text content */}
        <div className="flex items-start">
          <div className="bg-[#f7931e] rounded-lg shadow-lg p-6 md:p-8 w-full">
            <h2 className="text-3xl font-bold text-white mb-4">
              About Our Leadership
            </h2>

            <div className="space-y-4 md:space-y-6">
              <div>
                <h4 className="font-bold text-lg text-white mb-2">
                  Zillur Rahman Jewell <br />
                  <span className="text-white text-base font-normal">
                    Managing Director of Nazihar Group
                  </span>
                </h4>

                <div className="text-white leading-relaxed">
                  <p className="mb-3">{shortText}</p>

                  <div className="whitespace-pre-line">
                    {showMore ? fullText : null}
                  </div>

                  <Button
                    variant="ghost"
                    onClick={() => setShowMore(!showMore)}
                    className="mt-3 p-0 h-auto text-primary hover:text-primary/80 font-medium"
                  >
                    {showMore ? "Read Less" : "Read More"}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
