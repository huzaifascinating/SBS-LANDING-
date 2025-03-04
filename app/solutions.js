"use client";
import { useEffect, useState, useRef } from "react";
import { MdCloudQueue, MdOutlineAccountBalance, MdPayment, MdOutlineLocalShipping, MdOutlinePeople, MdSupportAgent, MdOutlineBusiness, MdEco, MdBusinessCenter, MdArrowForwardIos} from "react-icons/md";

export default function Solutions() {
  const solutionsRef = useRef(null);
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

    if (solutionsRef.current) observer.observe(solutionsRef.current);

    return () => observer.disconnect();
  }, []);

  const solutions = [
    {
      name: "Cloud ERP applications",
      description:
        "Run your business from anywhere using complete, modular solutions driven by built-in AI and analytics.",
      icon: <MdCloudQueue className="text-4xl md:text-5xl" />,
    },
    {
      name: "Financial management",
      description:
        "Innovate new business models, optimize working capital, increase efficiency, and reduce risk—all while driving positive social and environmental outcomes.",
      icon: <MdOutlineAccountBalance className="text-4xl md:text-5xl" />,
    },
    {
      name: "Spend management",
      description:
        "Reduce costs and risks by automating and controlling all types of spend with market-leading, source-to-pay, external workforce management, and travel and expense solutions.",
      icon: <MdPayment className="text-4xl md:text-5xl" />,
    },
    {
      name: "Supply chain management",
      description:
        "Run a risk-resilient and sustainable supply chain that can adapt to anything with our solutions for supply chain planning, manufacturing, and logistics.",
      icon: <MdOutlineLocalShipping className="text-4xl md:text-5xl" />,
    },
    {
      name: "Human capital management",
      description:
        "Embrace the future of work with the next generation of workforce management: SAP SuccessFactors solutions for core HR, employee experience, and talent management functions.",
      icon: <MdOutlinePeople className="text-4xl md:text-5xl" />,
    },
    {
      name: "Customer experience",
      description:
        "Connect e-commerce, marketing, sales, and service data with our customer experience solutions—and use AI to personalize the customer experience at every touchpoint.",
      icon: <MdSupportAgent className="text-4xl md:text-5xl" />,
    },
    {
      name: "Business technology platform",
      description:
        "Integrate, extend, and build new applications, processes, and AI agents on a purpose-built technology platform across SAP applications and beyond.",
      icon: <MdOutlineBusiness className="text-4xl md:text-5xl" />,
    },
    {
      name: "Sustainability management",
      description:
        "SAP has your sustainability initiatives covered with solutions for ESG reporting, climate action, the circular economy, and social responsibility.",
      icon: <MdEco className="text-5xl" />,
    },
    {
      name: "Business network",
      description:
        "Collaborate with your trading partners across procurement, supply chain, logistics, and asset management to rapidly respond to change.",
      icon: <MdBusinessCenter className="text-4xl md:text-5xl" />,
    },
  ];

  return (
    <section
      id="solutions"
      ref={solutionsRef}
      className="bg-gradient-to-b from-gray-900 to-gray-800 py-16 px-6 text-white overflow-hidden"
    >
      <div className="container mx-auto text-center">
        <h2
          className={`text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-wide text-gray-200 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Connect every process
        </h2>
        <p
          className={`mt-4 text-gray-300 text-xs sm:text-sm lg:text-md transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Run your end-to-end processes and mission-critical data seamlessly
          with SAP’s integrated cloud applications.
        </p>
        <div
          className={`mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {solutions.map((solution, index) => (
            <div
              key={index}
              className={`relative backdrop-blur-lg p-3 sm:p-8 rounded-lg shadow-lg hover:shadow-2xl transition transform hover:scale-105 text-left duration-1000 delay-${
                index * 200
              } ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="w-20 sm:w-20 h-16 sm:h-20 bg-gray-700 flex items-center justify-center rounded-full mb-4 text-3xl text-teal-400">
                {solution.icon}
              </div>
              <h3 className="text-sm sm:text-md lg:text-xl font-semibold">
                {solution.name}
              </h3>
              <p className="mt-2 text-gray-300 text-xs sm:text-sm lg:text-lg">
                {solution.description}
              </p>
              <a
                href="#"
                className="text-teal-400 mt-4 flex items-center text-xs sm:text-sm lg:text-lg hover:underline"
              >
                Learn more <MdArrowForwardIos className=" ml-1 mt-[2px]" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
