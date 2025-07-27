"use client";

import { MediaItem } from "@/lib/model";
import React, { useState } from "react";
import Image from "next/image";
import "./style.css";

interface CourseHeroSectionProps {
  title: string;
  description: string;
  media: MediaItem[];
}

const CourseHeroSection: React.FC<CourseHeroSectionProps> = ({
  title,
  description,
  media,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentMedia = media[currentIndex];

  const handleMediaSelect = (index: number) => setCurrentIndex(index);
  const handlePrev = () =>
    setCurrentIndex((prev) => (prev === 0 ? media.length - 1 : prev - 1));
  const handleNext = () =>
    setCurrentIndex((prev) => (prev === media.length - 1 ? 0 : prev + 1));

  return (
    <section className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-bold mb-4">{title}</h1>
            <div className="flex items-center mb-6">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="fa-solid fa-star" />
                ))}
              </div>
              <span className="ml-2 text-gray-300">
                (82.6% students achieved their desired band score)
              </span>
            </div>
            <p
              className="text-lg text-gray-300 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </div>
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <Image
                src={currentMedia.thumbnail_url || currentMedia.resource_value}
                alt={currentMedia.name}
                width={600}
                height={400}
                className="w-full h-80 object-cover object-top"
              />
              {currentMedia.resource_type === "video" && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="bg-white bg-opacity-90 rounded-full p-4 shadow-lg">
                    <div className="w-8 h-8 flex items-center justify-center">
                      <i className="fa-solid fa-play text-2xl text-gray-700"></i>
                    </div>
                  </button>
                </div>
              )}
            </div>
            <div className="absolute inset-y-0 left-0 flex items-center pl-2">
              <button
                onClick={handlePrev}
                className="text-white text-2xl bg-gray-500 bg-opacity-40 p-1 rounded-s-md hover:bg-opacity-70"
              >
                <i className="fa-solid fa-arrow-left text-green-600"></i>
              </button>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2">
              <button
                onClick={handleNext}
                className="text-white text-2xl bg-gray-500 bg-opacity-40 p-1 rounded-s-md hover:bg-opacity-70"
              >
                <i className="fa-solid fa-arrow-right-long text-green-600"></i>
              </button>
            </div>
            <div className="flex space-x-2 mt-4 overflow-x-auto pt-4 scrollbar-hide">
              {media.map((item, index) => (
                <div
                  key={index}
                  className={`flex-shrink-0 w-20 h-12 rounded border-2 cursor-pointer ${
                    currentIndex === index
                      ? "border-green-600"
                      : "border-transparent"
                  }`}
                  onClick={() => handleMediaSelect(index)}
                >
                  <Image
                    src={item.thumbnail_url || item.resource_value}
                    alt={item.name}
                    width={80}
                    height={48}
                    className="w-full h-full object-cover rounded"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseHeroSection;
