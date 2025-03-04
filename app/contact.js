"use client";
import React, { useEffect, useState } from "react";
import { Input } from "antd";
import { UserOutlined, MailOutlined, MessageOutlined, SendOutlined } from "@ant-design/icons";

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("contact");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); 

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="contact"
      className={`py-20 overflow-hidden transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-around px-8 gap-8">
        <div
          className={`lg:w-1/3 w-full mb-12 lg:mb-0 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-700 text-center mb-2">
            Connect
            <span className="font-light text-xl sm:text-2xl md:text-3xl text-gray-600">
              {" "}
              - Get in Touch
            </span>
          </h2>
          <img
            src="https://img.freepik.com/free-vector/organic-flat-man-customer-support_23-2148893295.jpg?semt=ais_hybrid"
            alt="Contact Illustration"
            className="mx-auto"
          />
        </div>
        <div
          className={`lg:w-1/2 w-full max-w-lg p-10 rounded-xl bg-white/90 shadow-2xl backdrop-blur-md transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <form className="space-y-5">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-700 text-center mb-6">
              Send us a message
            </h2>

            <div>
              <label
                htmlFor="name"
                className="flex items-center gap-2 text-gray-800 mb-2 text-sm sm:text-md md:text-lg"
              >
                <UserOutlined className="text-teal-600" />
                Name
              </label>
              <Input
                id="name"
                placeholder="Enter your name"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
              />
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="flex items-center gap-2 text-gray-800 mb-2 text-sm sm:text-md md:text-lg"
              >
                <MailOutlined className="text-teal-600" />
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="flex items-center gap-2 text-gray-800 mb-2 text-sm sm:text-md md:text-lg"
              >
                <MessageOutlined className="text-teal-600" />
                Message
              </label>
              <Input.TextArea
                id="message"
                placeholder="Write your message here..."
                rows={4}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-all font-bold text-xs sm:text-sm md:text-lg shadow-md hover:shadow-lg hover:scale-[1.02]"
            >
              <SendOutlined className='mr-2' /> Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
