import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-500 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Logo & Description */}
          <div>
            <div className="flex items-center mb-4">
              <div className="flex items-center justify-center w-16 h-16 bg-white shadow-md overflow-hidden">
                <Image
                  src="/logo1.svg"
                  alt="Logo"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <span className="ml-4 text-xl font-bold text-[#f7931e]">
                Nazihar IT Solution Ltd.
              </span>
            </div>
            <p className="text-white">
              Our development services are led by our dedicated and passionate team to provide best industry practice with technology expertise.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#f7931e]">Services</h4>
            <ul className="space-y-2 text-white">
              <li><Link href="#" className="hover:text-white transition-colors">Banking software solutions</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Health Sector</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Education management</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Cloud Solutions</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#f7931e]">Company</h4>
            <ul className="space-y-2 text-white">
              <li><Link href="#" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Our Team</Link></li>
              <li><Link href="#about" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="#contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-lg font-semibold text-[#f7931e] mb-4">Connect</h4>
            <ul className="space-y-4 text-white text-sm leading-relaxed">
              <li>
                <p className="font-medium">Email:</p>
                <Link href="mailto:info@nazihargroup.com" className="hover:text-white transition-colors block">
                  info@nazihargroup.com
                </Link>
              </li>
              <li>
                <p className="font-medium">Phone:</p>
                <div className="space-y-1">
                  <Link href="tel:+8809611200600" className="hover:text-white transition-colors block">BD: +8809611200600</Link>
                  <Link href="tel:+441923729345" className="hover:text-white transition-colors block">UK: +44(0)1923 729345</Link>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Offices Section */}
        <div className="mt-8">
          <h4 className="text-lg font-semibold text-[#f7931e] mb-4">Offices</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white text-sm">

            {/* Bangladesh Office */}
            <div>
              <p className="font-semibold">Bangladesh Office</p>
              <p className="mt-1 whitespace-pre-line">
                1/2 Kamalapur Bazar Road,
                Sagufta De Laurel (3rd Floor),
                Motijheel, Dhaka-1217, Bangladesh
              </p>
            </div>

            {/* UK Offices side-by-side */}
            <div className="flex flex-col sm:flex-row sm:gap-6">
              {/* UK Head Office */}
              <div className="flex-1">
                <p className="font-semibold">UK Head Office</p>
                <p className="mt-1 whitespace-pre-line">
                  Unit 11 Olds Close,
                  Watford, Hertfordshire,
                  WD18 9RU
                </p>
              </div>

              {/* UK Corporate Office */}
              <div className="flex-1 mt-4 sm:mt-0">
                <p className="font-semibold">UK Corporate Office</p>
                <p className="mt-1 whitespace-pre-line">
                  17 Clarendon Road,
                  Watford,
                  WD17 1JR
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-[#f7931e]">
          <p>&copy; 2025 NITSL. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
