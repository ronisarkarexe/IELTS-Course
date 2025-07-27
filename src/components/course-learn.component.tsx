import { PointersSection } from "@/lib/model";
import React from "react";

interface CourseLearnComponentProps {
  section: PointersSection;
}

const CourseLearnComponent: React.FC<CourseLearnComponentProps> = ({
  section,
}) => {
  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-3">{section.name}</h2>
      <div className="rounded-lg border border-gray-200 p-6">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {section.values.map((item) => (
            <div
              key={item.id}
              className="flex items-start gap-3 p-3 justify-center"
            >
              <i className="fa-solid fa-check text-blue-600 font-bold"></i>
              <div>
                <h6 className="font-normal text-lg text-gray-700">
                  {item.text}
                </h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseLearnComponent;
