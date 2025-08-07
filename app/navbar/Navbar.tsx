"use client";
import { SocialsSection } from "./socials/SocialsSection";
import React, { useEffect, useRef, useState } from "react";

export const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    let ticking = false;
    const threshold = 10; // px de diferencia mínima para detectar scroll
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          if (
            currentScrollY - lastScrollY.current > threshold &&
            currentScrollY > 20
          ) {
            setShowNavbar(false); // Scroll down, hide navbar
          } else if (
            lastScrollY.current - currentScrollY > threshold ||
            currentScrollY <= 0
          ) {
            setShowNavbar(true); // Scroll up, show navbar
          }
          lastScrollY.current = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`w-min h-10 m-auto mt-4 rounded-lg text-[#4c4f69] bg-[#ccd0da] flex items-center justify-between px-4 fixed left-0 right-0 z-20 backdrop-blur-sm opacity-80 hover:opacity-100 transition-all duration-300 ${
        showNavbar ? "translate-y-0" : "translate-y-[-100px]"
      }`}
    >
      <SocialsSection />
    </div>
  );
};
