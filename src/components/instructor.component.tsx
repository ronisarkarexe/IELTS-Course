import { InstructorsSection } from "@/lib/model";
import Image from "next/image";
import React from "react";

interface InstructorComponentProps {
  section: InstructorsSection;
}

const InstructorComponent: React.FC<InstructorComponentProps> = ({
  section,
}) => {
  const instructor = section.values[0];
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-3">{section.name}</h2>
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-center space-x-4">
          <Image
            src={instructor.image}
            alt={instructor.name}
            width={80}
            height={80}
            className="rounded-full object-cover object-top w-20 h-20"
          />
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              <a
                href={
                  instructor.has_instructor_page
                    ? `/instructors/${instructor.slug}`
                    : "#"
                }
                className="hover:text-green-500"
              >
                {instructor.name}
              </a>
              {instructor.has_instructor_page && (
                <span className="inline-block w-4 h-4 ml-1">
                  <i className="ri-arrow-right-s-line text-gray-400"></i>
                </span>
              )}
            </h3>
            <div
              className="text-gray-600 text-sm"
              dangerouslySetInnerHTML={{ __html: instructor.description }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorComponent;
