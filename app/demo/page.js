"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import sbs from "../assets/sbs.png";
import { FaUser, FaEnvelope, FaPhone, FaPaperPlane, FaCheckCircle } from "react-icons/fa";

export default function RequestDemo() {
  const router = useRouter();
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    if (formRef.current) {
      formRef.current.classList.add("fade-slide-in");
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => router.push("/thank-you"), 2000);
  };

  return (
    <div
      className="min-h-screen flex justify-center px-6 py-10 bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://informationage-production.s3.amazonaws.com/uploads/2022/10/forget-digital-transformation-data-transformation-is-what-you-need.jpg')",
      }}
    >
    <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
      <div className="relative flex flex-col items-center ">
        <div className="flex items-center gap-x-4 relative mt-3">
          <div className="w-20 h-20 bg-gray-300 bg-opacity-90 rounded-full flex items-center justify-center shadow-lg">
            <Image src={sbs} alt="sbslogo" width={80} height={80} className="w-16" />
          </div>
          <div className="flex items-center relative w-20">
            <div className="h-1 bg-gray-300 w-full"></div>
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center shadow-md text-lg">
                <FaCheckCircle className="text-3xl text-green-800"/>
              </div>
            </div>
          </div>
          <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center shadow-lg">
            <FaUser className="text-4xl" />
          </div>
        </div>
        <div
          ref={formRef}
          className="relative bg-white/10 border border-white/30 backdrop-blur-lg p-6 sm:p-10 rounded-3xl shadow-2xl max-w-sm sm:max-w-md w-full text-center opacity-0 translate-y-10"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-300 drop-shadow-lg">
            Request a Demo
          </h2>
          <p className="text-gray-200 mt-2 text-xs sm:text-sm md:text-md">
            Fill in your details and we’ll get back to you soon.
          </p>

          {submitted ? (
            <div className="mt-6 text-green-300 font-extrabold text-lg md:text-xl animate-pulse">
              🎉 Thank you! Redirecting...
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mt-6 space-y-4 md:space-y-5 text-left"
            >
              <div className="relative">
                <label
                  htmlFor="name"
                  className="flex items-center text-gray-100 font-semibold text-sm sm:text-base mb-1 sm:mb-2"
                >
                  <FaUser className="text-gray-300 mr-2" /> Name
                </label>
                <div className="flex items-center bg-white/20 border border-gray-500 rounded-xl">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-2 bg-transparent text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-300 transition-all text-sm sm:text-base rounded-xl"
                  />
                </div>
              </div>
              <div className="relative">
                <label
                  htmlFor="email"
                  className="flex items-center text-gray-100 font-semibold text-sm sm:text-base mb-1 sm:mb-2"
                >
                  <FaEnvelope className="text-gray-300 mr-2" /> Email
                </label>
                <div className="flex items-center bg-white/20 border border-gray-500 rounded-xl">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-2 bg-transparent text-white rounded-xl placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-300 transition-all text-sm sm:text-base"
                  />
                </div>
              </div>
              <div className="relative">
                <label
                  htmlFor="phone"
                  className="flex items-center text-gray-100 font-semibold text-sm sm:text-base mb-1 sm:mb-2"
                >
                 <FaPhone className="text-gray-300 mr-2" /> Phone
                </label>
                <div className="flex items-center bg-white/20 border border-gray-500 rounded-xl mb-8">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full p-2 bg-transparent text-white rounded-xl placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-300 transition-all text-sm sm:text-base"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-x-2 bg-gradient-to-r from-teal-400 to-blue-400 text-black py-2 rounded-xl shadow-lg font-semibold text-sm md:text-lg hover:from-teal-500 hover:to-blue-500 transition-all transform hover:scale-105"
              >
                <FaPaperPlane />
                Submit Request
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
