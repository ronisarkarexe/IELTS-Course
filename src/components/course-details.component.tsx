"use client";

import { AboutSection } from "@/lib/model";
import React, { useState } from "react";

interface CourseDetailsComponentProps {
  section: AboutSection;
}

const CourseDetailsComponent: React.FC<CourseDetailsComponentProps> = ({
  section,
}) => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);
  const toggleIndex = (index: number) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };
  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-3">{section.name}</h2>
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        {section.values.map((item, index) => {
          const isOpen = openIndexes.includes(index);
          return (
            <div
              key={item.id}
              className="mb-2 border-b border-dotted border-gray-300 px-2 last:border-b-0"
            >
              <button
                onClick={() => toggleIndex(index)}
                className="w-full flex justify-between items-center p-2"
              >
                <div
                  className="font-medium"
                  dangerouslySetInnerHTML={{ __html: item.title }}
                />
                {isOpen ? (
                  <i className="fa-solid fa-arrow-up"></i>
                ) : (
                  <i className="fa-solid fa-arrow-down"></i>
                )}
              </button>

              {isOpen && (
                <div
                  className="p-2 text-sm text-gray-700 mb-2"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CourseDetailsComponent;
