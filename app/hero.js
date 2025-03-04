"use client";
import { useRouter } from "next/navigation";
import { RightOutlined } from "@ant-design/icons";

export default function Hero() {
  const router = useRouter();

  return (
    <section
      className="relative text-white text-center py-12 sm:py-20 md:py-28 px-4 sm:px-6 bg-cover bg-center"
      style={{ backgroundImage: "url('https://www.bigtranslation.com/wp-content/themes/big-translation/assets/images/business-solutions/bg-hero-business-solutions.jpg')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-gray-900/80"></div>

      <div className="relative z-10 max-w-3xl mx-auto px-4">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight">
          <span className="block text-white font-[Pacifico] animate-fade-in">
            Unleash
          </span>
          <span className="block font-[Pacifico] text-teal-400 text-3xl sm:text-4xl md:text-6xl animate-slide-up">
            your <span className="font-bold">growth potential</span>
          </span>
        </h1>

        <p className="mt-4 sm:mt-6 text-sm sm:text-lg md:text-xl opacity-90 animate-fade-in-slow">
          A comprehensive <span className="text-teal-300 font-semibold">Finance & ERP solution </span>  
          designed to streamline workflow.
        </p>

        <button
          className="mt-6 sm:mt-8 cursor-pointer bg-teal-600 text-white px-4 sm:px-8 md:px-10 py-2 sm:py-3 md:py-4 text-md sm:text-lg md:text-xl font-bold rounded-xl shadow-lg hover:bg-teal-700 transition-all transform hover:scale-105 animate-pulse"
          onClick={() => router.push("/demo")}
        >
          Request a Demo <RightOutlined className="ml-1"/>
        </button>
      </div>
    </section>
  );
}
