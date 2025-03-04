"use client";
import { useEffect, useState, useRef } from "react";
import { MdArrowForwardIos } from "react-icons/md";

export default function Features() {
  const featuresRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 } 
    );

    if (featuresRef.current) observer.observe(featuresRef.current);

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      name: "Industry-leading applications",
      image: "https://miro.medium.com/v2/resize:fit:1400/1*tqy6ZSlHOGxAqFk7P6qXAQ.gif",
      description:
        "Run critical business processes reliably with a comprehensive set of applications, and scale faster by enhancing applications on an integrated cloud platform.",
      link: "#",
    },
    {
      name: "Mission-critical data with the leading data platform",
      image: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE52pcs?ver=2ad2", 
      description:
        "Harmonize all your data across SAP and non-SAP systems with the leading data platform and deliver transformational insights.",
      link: "#",
    },
    {
      name: "AI agents for enterprise-wide collaboration",
      image: "https://media.licdn.com/dms/image/v2/D4E12AQEFhd6CFu8gEA/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1727953361785?e=2147483647&v=beta&t=EBKLIJ-ZyelOxHU1dBdnAboKiYnScOhGPesU0l1HF0Q", 
      description:
        "Accelerate decisions and cross-functional work with teams of Joule agents that act across your organization with full business context.",
      link: "#",
    },
    {
      name: "Industry-leading applications",
      image: "https://miro.medium.com/v2/resize:fit:1400/1*tqy6ZSlHOGxAqFk7P6qXAQ.gif",
      description:
        "Run critical business processes reliably with a comprehensive set of applications, and scale faster by enhancing applications on an integrated cloud platform.",
      link: "#",
    },
    {
      name: "Mission-critical data with the leading data platform",
      image: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE52pcs?ver=2ad2", 
      description:
        "Harmonize all your data across SAP and non-SAP systems with the leading data platform and deliver transformational insights.",
      link: "#",
    },
    {
      name: "AI agents for enterprise-wide collaboration",
      image: "https://media.licdn.com/dms/image/v2/D4E12AQEFhd6CFu8gEA/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1727953361785?e=2147483647&v=beta&t=EBKLIJ-ZyelOxHU1dBdnAboKiYnScOhGPesU0l1HF0Q", 
      description:
        "Accelerate decisions and cross-functional work with teams of Joule agents that act across your organization with full business context.",
      link: "#",
    },
  ];

  return (
    <section
      id="features"
      ref={featuresRef}
      className="relative bg-gray-200 py-16 px-6 text-white overflow-hidden"
    >
      <div className="container mx-auto">
        <h2
          className={`text-2xl sm:text-3xl md:text-4xl font-bold text-center tracking-wide text-black transition-all duration-1000 `}
        >
          It all starts with SBS
        </h2>
        <p
          className={`mt-4 text-gray-800 text-center text-sm sm:text-lg transition-all duration-1000 delay-200 `}
        >
          Only SBS provides the most powerful and complete set of cloud applications, generating the most critical and important data.
        </p>

        <div className="mt-12 mx-2 lg-mx-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`relative bg-gray-200 p-6 sm:p-8 transition-all duration-1000 delay-${
                index * 200
              } ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              } hover:-translate-y-2 hover:shadow-2xl`}
            >
              <img
                src={feature.image}
                alt={feature.name}
                className="mx-auto mb-4 w-full h-30 md:h-52 drop-shadow-md"
              />

              <h3 className="text-md sm:text-xl font-semibold text-gray-800">
                {feature.name}
              </h3>

              <p className="mt-2 sm:mt-3 text-gray-600 text-xs sm:text-lg">
                {feature.description}
              </p>

              <a
                href={feature.link}
                className=" text-teal-600 font-bold py-2 rounded-md mt-3 text-xs sm:text-base hover:text-teal-700 transition flex items-center"
              >
                Learn More <MdArrowForwardIos className="ml-1 mt-[2px]" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
