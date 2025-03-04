"use client";
import { useState } from "react";
import Image from "next/image";
import sbs from "./assets/sbs2.png";
import { HomeOutlined, RocketOutlined, SettingOutlined, DollarOutlined, PhoneOutlined, } from "@ant-design/icons";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const menuItems = [
    { name: "Home", id: "home", icon: <HomeOutlined className="text-lg text-teal-500" /> },
    { name: "Features", id: "features", icon: <RocketOutlined className="text-lg text-teal-500" /> },
    { name: "Solutions", id: "solutions", icon: <SettingOutlined className="text-lg text-teal-500" /> },
    { name: "Pricing", id: "pricing", icon: <DollarOutlined className="text-lg text-teal-500" /> },
    { name: "Contact", id: "contact", icon: <PhoneOutlined className="text-lg text-teal-500" /> },
  ];

  return (
    <header className="bg-white text-black shadow-lg sticky top-0 z-50 py-3">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center">
          <Image src={sbs} alt="SBS Logo" width={65} height={65} className="mr-3" />
          <h1 className="text-md sm:text-lg md:text-xl font-bold mt-[7px]">
            Smart <span className="text-teal-500">Business</span> Solution
          </h1>
        </div>

        <nav className="hidden md:flex space-x-6">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className="cursor-pointer flex items-center space-x-2 hover:text-teal-500 transition"
            >
              {item.icon}
              <span>{item.name}</span>
            </button>
          ))}
        </nav>

        <button className="md:hidden" onClick={() => setIsOpen(true)} aria-label="Open menu">
          <img
            src="https://www.freeiconspng.com/thumbs/menu-icon/menu-icon-24.png"
            alt="Menu"
            width={20}
            height={20}
            className="filter hover:opacity-80 transition mt-1 bg-white"
          />
        </button>
      </div>

      <div
        className={`fixed inset-0 bg-opacity-50 z-40 transition-opacity ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={() => setIsOpen(false)}
      ></div>

      <aside
        className={`fixed right-0 top-0 h-full w-64 bg-white shadow-lg z-50 transform ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-bold">Menu</h2>
          <button className="text-lg bg-white" onClick={() => setIsOpen(false)} aria-label="Close menu">
            ✖
          </button>
        </div>
        <nav className="flex flex-col space-y-6 mt-6 px-6">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className="flex items-center space-x-2 text-lg hover:text-teal-800 bg-white"
            >
              {item.icon}
              <span>{item.name}</span>
            </button>
          ))}
        </nav>
      </aside>
    </header>
  );
}
