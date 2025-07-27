import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-fit mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Image
              src="https://10minuteschool.com/images/logo.svg"
              alt="Logo"
              height={32}
              width={120}
              className="h-8 w-auto"
            />
          </div>
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="fa-solid fa-magnifying-glass text-gray-400"></i>
                </div>
              </div>
              <input
                type="text"
                placeholder="Search courses, skills, and more..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm"
              />
            </div>
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            <div className="relative group">
              <button className="flex items-center text-gray-700 text-sm font-medium">
                Class 6-12
                <div className="w-4 h-4 ml-1 flex items-center justify-center">
                  <i className="fa-solid fa-angle-down text-gray-400"></i>
                </div>
              </button>
            </div>
            <div className="relative group">
              <button className="flex items-center text-gray-700 text-sm font-medium">
                Skills
                <div className="w-4 h-4 ml-1 flex items-center justify-center">
                  <i className="fa-solid fa-angle-down text-gray-400"></i>
                </div>
              </button>
            </div>
            <a href="#" className="text-gray-700 text-sm font-medium">
              Admission
            </a>
            <div className="relative group">
              <button className="flex items-center text-gray-700 text-sm font-medium">
                Online Batch
                <div className="w-4 h-4 ml-1 flex items-center justify-center">
                  <i className="fa-solid fa-angle-down text-gray-400"></i>
                </div>
              </button>
            </div>
            <div className="relative group">
              <button className="flex items-center text-gray-700 text-sm font-medium">
                English Centre
                <div className="w-4 h-4 ml-1 flex items-center justify-center">
                  <i className="fa-solid fa-angle-down text-gray-400"></i>
                </div>
              </button>
            </div>
            <div className="relative group">
              <button className="flex items-center text-gray-700 text-sm font-medium">
                More
                <div className="w-4 h-4 ml-1 flex items-center justify-center">
                  <i className="fa-solid fa-angle-down text-gray-400"></i>
                </div>
              </button>
            </div>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="text-gray-700 text-sm font-medium">EN</button>
            <div className="flex items-center text-green-500 text-sm">
              <div className="w-4 h-4 mr-1 flex items-center justify-center">
                <i className="fa-solid fa-phone text-gray-400"></i>
              </div>
              16910
            </div>
            <button className="bg-green-500 text-white px-5 py-2 rounded-2xl rounded-button text-sm font-medium hover:bg-green-600">
              Login
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
