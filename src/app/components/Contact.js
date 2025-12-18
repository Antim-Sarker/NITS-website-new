"use client";

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to transform your brand? Get in touch and let&apos;s create something amazing together.
          </p>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Contact Form */}
          <div className="w-full">
            <Card className="shadow-xl rounded-2xl border border-gray-200">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Send us a message</CardTitle>
                <CardDescription>
                  Fill out the form below and we&apos;ll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Name
                    </label>
                    <Input placeholder="Your name" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <Input type="email" placeholder="your@email.com" />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <Input type="tel" placeholder="Your phone number" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <Textarea placeholder="Tell us about your project..." rows={4} />
                </div>

                <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-purple-600 transition-all rounded-xl shadow-lg">
                  Send Message
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Maps Section */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-center mb-6">Our Offices</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Bangladesh Office */}
              <OfficeCard
                title="Bangladesh Office"
                mapSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.5394115775725!2d90.42117957430865!3d23.728136589632594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4c641395db3cd%3A0x2cb37f38f6dbadd7!2sNazihar%20IT%20Solution%20Limited!5e0!3m2!1sen!2sbd!4v1756202699194!5m2!1sen!2sbd"
              />

              {/* UK Office */}
              <OfficeCard
                title="UK Office"
                mapSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2475.1331024572564!2d-0.4002259233709188!3d51.65739937184772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48766ac14403b52d%3A0xf1154feed6256c7c!2s17%20Clarendon%20Rd%2C%20Watford%20WD17%201JR%2C%20UK!5e0!3m2!1sen!2sbd!4v1756202835042!5m2!1sen!2sbd"
              />

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function OfficeCard({ title, mapSrc }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden">
      <h3 className="text-lg font-semibold text-center bg-orange-50 py-2">{title}</h3>
      <iframe
        src={mapSrc}
        width="100%"
        height="300"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-[300px]"
      ></iframe>
    </div>
  );
}
