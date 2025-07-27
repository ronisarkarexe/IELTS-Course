import { FeatureSection } from "@/lib/model";
import React from "react";

interface CourseLaidOutComponentProps {
  section: FeatureSection;
}

const CourseLaidOutComponent = ({ section }: CourseLaidOutComponentProps) => {
  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-3">{section.name}</h2>
      <div className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white p-5 rounded-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {section.values.map((item) => (
            <div key={item.id} className="flex items-start gap-4 p-4">
              <img
                src={item.icon}
                alt={item.title}
                className="w-10 h-10 object-fill"
              />
              <div>
                <h3 className="font-semibold text-lg text-gray-300">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseLaidOutComponent;
