"use client";
import React, { useEffect, useState } from "react";

const companyLogos = [
  "https://pngimg.com/uploads/bmw_logo/bmw_logo_PNG19699.png",
  "https://pngimg.com/d/walt_disney_PNG36.png",
  "https://upload.wikimedia.org/wikipedia/commons/0/04/Big_Fish_company_logo.png",
  "https://mailmeteor.com/logos/assets/PNG/Microsoft_Logo_512px.png",
  "https://static.vecteezy.com/system/resources/previews/022/498/229/original/mercedes-benz-logos-popular-brands-of-cars-isolated-on-transparent-background-3d-render-free-png.png",
  "https://seekvectors.com/files/download/Cisco%20Systems%20Logo-01.png",
  "https://pngimg.com/d/ibm_PNG19660.png",
];

export default function TrustedCompanies() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("trusted-companies");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check visibility on load

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="trusted-companies"
      className="relative bg-white py-20 md:py-40 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[url('https://static.vecteezy.com/system/resources/previews/044/860/687/non_2x/light-world-map-illustration-design-vector.jpg')] bg-white bg-opacity-50 bg-cover bg-center"></div>

      {/* Title */}
      <div className="relative z-10 text-center px-6">
        <h2
          className={`text-lg sm:text-2xl md:text-3xl font-bold text-gray-900 mb-16 sm:mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Trusted by companies small and large around the globe
        </h2>
      </div>

      {/* Logos with Scroll Animation */}
      <div
        className={`relative w-full overflow-hidden transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="flex flex-wrap justify-center gap-6 sm:gap-10 md:gap-12 px-4">
          {companyLogos.map((logo, index) => (
            <div key={index} className="flex justify-center items-center w-24 sm:w-32 md:w-40">
              <img
                src={logo}
                alt="Company Logo"
                className="h-12 sm:h-14 md:h-16 w-auto transition hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
