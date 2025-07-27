import React from "react";
import Image from "next/image";

const footerSections = [
  {
    title: "Company",
    links: [
      { label: "Career / Recruitment", href: "#" },
      { label: "Join as a Teacher", href: "#" },
      { label: "Join as an Affiliate", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Refund Policy", href: "#" },
      { label: "Terms & Conditions", href: "#" },
    ],
  },
  {
    title: "Others",
    links: [
      { label: "Blog", href: "#" },
      { label: "Book Store", href: "#" },
      { label: "Free Notes & Guides", href: "#" },
      { label: "Job Preparation Courses", href: "#" },
      { label: "Verify Certificate", href: "#" },
      { label: "Free Download", href: "#" },
    ],
  },
];

const FooterComponent = () => {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-6">
            <Image
              src="https://10minuteschool.com/images/logo.svg"
              alt="Logo"
              height={32}
              width={120}
              className="h-8 w-auto"
            />
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900">
                Download Our Mobile App
              </h3>
              <div className="flex flex-col space-y-3">
                <a href="#" className="app-store-btn inline-block">
                  <Image
                    src="https://cdn.10minuteschool.com/images/google-play-icon_1695731678094.png"
                    alt="Get it on Google Play"
                    height={32}
                    width={120}
                    className="h-8 w-auto"
                  />
                </a>
              </div>
            </div>
          </div>
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="mb-4 font-semibold text-gray-900">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-600 hover:text-primary"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">
              Keep up with us at
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <a
                  href="tel:16910"
                  className="text-gray-600 hover:text-primary"
                >
                  <span className="text-green-500">16910</span> (24×7)
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <a
                  href="https://wa.me/8801896016252"
                  className="text-gray-600 hover:text-primary"
                >
                  <span className="text-green-500">+8801896016252</span> (24×7)
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <a
                  href="mailto:support@10minuteschool.com"
                  className="text-gray-600 hover:text-primary"
                >
                  <span className="text-green-500">
                    support@10minuteschool.com
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-100">
          <p className="text-center text-gray-500 text-sm">
            2015 - 2025 Copyright © 10 Minute School. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
