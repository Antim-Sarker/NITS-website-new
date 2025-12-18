"use client";

import { useState, useRef, useEffect, memo } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDesktopDropdownOpen, setIsDesktopDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

  const desktopDropdownRef = useRef(null);
  const navLinks = ["Services", "Products", "Partners", "Clients"];

  /* ===== DESKTOP DROPDOWN OUTSIDE CLICK ===== */
  useEffect(() => {
    if (!isDesktopDropdownOpen) return;

    const handler = (e) => {
      if (!desktopDropdownRef.current?.contains(e.target)) {
        setIsDesktopDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [isDesktopDropdownOpen]);

  /* ===== BODY SCROLL LOCK (MOBILE) ===== */
  useEffect(() => {
    if (!isMenuOpen) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
    setIsMobileDropdownOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      {/* MAIN BAR */}
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* LOGO */}
          <Link href="#home" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Logo"
              width={112}
              height={80}
              priority
              className="object-contain"
            />
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex flex-col items-end">
            {/* TOP MENU */}
            <div className="flex items-center text-sm text-gray-600 space-x-6 mb-2">
              <Link href="https://nazihargroup.com/" target="_blank">
                <Image
                  src="/nazihar.png"
                  width={34}
                  height={34}
                  alt="Company Logo"
                />
              </Link>

              <Link href="#careers" className="hover:text-orange-600">
                Careers
              </Link>

              <Link href="#news" className="hover:text-orange-600">
                News & Events
              </Link>

              <Link
                href="#contact"
                className="bg-orange-600 text-white px-4 py-1 rounded-full hover:bg-orange-700"
              >
                Contact
              </Link>
            </div>

            {/* BOTTOM MENU */}
            <ul className="flex items-center space-x-8">
              {/* ABOUT */}
              <li className="relative" ref={desktopDropdownRef}>
                <button
                  onClick={() =>
                    setIsDesktopDropdownOpen((p) => !p)
                  }
                  className="font-medium text-gray-900"
                >
                  About
                </button>

                {isDesktopDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-44 bg-white border rounded-lg shadow-md flex flex-col">
                    {[
                      ["Who We Are", "#who-we-are"],
                      ["Expertises", "#expertise"],
                      ["Certifications", "#certifications"],
                      ["CSR", "#scr"],
                    ].map(([label, href]) => (
                      <Link
                        key={label}
                        href={href}
                        onClick={() => setIsDesktopDropdownOpen(false)}
                        className="px-4 py-2 hover:bg-orange-500 hover:text-white"
                      >
                        {label}
                      </Link>
                    ))}
                  </div>
                )}
              </li>

              {navLinks.map((link) => (
                <li key={link}>
                  <Link
                    href={`#${link.toLowerCase()}`}
                    onClick={() => setIsDesktopDropdownOpen(false)}
                    className="font-medium hover:text-orange-600"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* MOBILE BUTTON */}
          <div className="md:hidden">
            <Button
              type="button"
              variant="ghost"
              onClick={() => setIsMenuOpen((p) => !p)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU (SAFE GRID ANIMATION) */}
      <div
        className="md:hidden bg-white border-t border-gray-200 overflow-hidden transition-[grid-template-rows] duration-200 ease-out"
        style={{
          display: "grid",
          gridTemplateRows: isMenuOpen ? "1fr" : "0fr",
        }}
      >
        <div className="overflow-hidden">
          <div className="px-4 py-6 space-y-4">
            {/* MOBILE ABOUT */}
            <button
              onClick={() =>
                setIsMobileDropdownOpen((p) => !p)
              }
              className="w-full flex justify-between font-medium text-gray-700"
            >
              About <span>{isMobileDropdownOpen ? "▲" : "▼"}</span>
            </button>

            {isMobileDropdownOpen && (
              <div className="ml-4 flex flex-col border-l">
                {[
                  ["Who We Are", "#who-we-are"],
                  ["Expertises", "#expertise"],
                  ["Certifications", "#certifications"],
                  ["CSR", "#scr"],
                ].map(([label, href]) => (
                  <Link
                    key={label}
                    href={href}
                    onClick={closeMobileMenu}
                    className="py-2 px-3 hover:text-orange-600"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            )}

            {navLinks.map((link) => (
              <Link
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={closeMobileMenu}
                className="block font-medium text-gray-700"
              >
                {link}
              </Link>
            ))}

            <Link href="#contact" onClick={closeMobileMenu}>
              <div className="bg-orange-600 text-white text-center py-2 rounded">
                Contact
              </div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default memo(Navbar);
