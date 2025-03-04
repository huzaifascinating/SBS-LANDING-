"use client";
import React, { useEffect, useState } from "react";
import { CheckCircleOutlined, CloseCircleOutlined, CheckCircleTwoTone, CloseSquareTwoTone } from "@ant-design/icons";

export default function Pricing() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("pricing");
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
      id="pricing"
      className={`py-16 sm:py-20 bg-gradient-to-b from-gray-100 to-gray-50 overflow-hidden transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <h2
          className={`text-xl sm:text-2xl md:text-4xl font-extrabold tracking-wide text-teal-600 mb-4 sm:mb-5 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Choose Your Plan
        </h2>
        <p
          className={`text-xs sm:text-sm md:text-lg text-gray-600 max-w-3xl mx-auto transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Find a plan that fits your business needs. Upgrade anytime to unlock more features.
        </p>
        <div
          className={`mt-10 sm:mt-12 grid gap-8 sm:gap-10 md:grid-cols-3 mx-5 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {[
            {
              name: "Basic",
              price: "$29/mo",
              icon: "https://cdn-icons-png.freepik.com/512/1154/1154622.png",
              features: [
                { text: "Automated Invoicing", included: true },
                { text: "Expense Tracking", included: true },
                { text: "Multi-Currency Support", included: false },
                { text: "Advanced Reports", included: false },
                { text: "24/7 Support", included: false },
              ],
              buttonText: "Start Free Trial",
            },
            {
              name: "Pro",
              price: "$79/mo",
              icon: "https://cdn-icons-png.flaticon.com/512/4331/4331880.png",
              features: [
                { text: "Automated Invoicing", included: true },
                { text: "Expense Tracking", included: true },
                { text: "Multi-Currency Support", included: true },
                { text: "Advanced Reports", included: true },
                { text: "24/7 Support", included: false },
              ],
              buttonText: "Get Pro",
            },
            {
              name: "Enterprise",
              price: "Custom Pricing",
              icon: "https://cdn-icons-png.flaticon.com/512/7786/7786447.png",
              features: [
                { text: "Automated Invoicing", included: true },
                { text: "Expense Tracking", included: true },
                { text: "Multi-Currency Support", included: true },
                { text: "Advanced Reports", included: true },
                { text: "24/7 Support", included: true },
              ],
              buttonText: "Contact Sales",
            },
          ].map((plan, index) => (
            <div
              key={index}
              className="bg-white shadow-md hover:shadow-xl transition-all transform hover:scale-105 p-8 sm:p-10 rounded-2xl border border-gray-200"
            >
              <div className="w-16 sm:w-20 h-16 sm:h-20 bg-gray-100 flex items-center justify-center rounded-full mx-auto mb-4 sm:mb-6">
                <img src={plan.icon} alt={plan.name} width={40} height={40} className="sm:w-12 sm:h-12" />
              </div>

              <h3 className="text-lg sm:text-2xl font-bold text-gray-900">{plan.name}</h3>
              <p className="mt-2 text-xl sm:text-2xl font-extrabold text-teal-600">{plan.price}</p>

              <ul className="mt-4 sm:mt-6 text-left space-y-2 sm:space-y-3 text-gray-600">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 sm:gap-3">
                    {feature.included ? (
                      <CheckCircleTwoTone className="text-green-500 text-lg sm:text-xl" />
                    ) : (
                      <CloseSquareTwoTone className="text-red-500 text-lg sm:text-xl" />
                    )}
                    <span className="text-xs sm:text-base">{feature.text}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="mt-5 sm:mt-6 w-full inline-block bg-teal-500 text-white text-sm sm:text-base px-5 py-2 sm:px-6 sm:py-3 rounded-lg transition hover:bg-teal-600 font-semibold"
              >
                {plan.buttonText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
