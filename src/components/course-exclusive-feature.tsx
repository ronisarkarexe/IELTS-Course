import { FeatureExplanationsSection } from "@/lib/model";
import React from "react";
import Image from "next/image";

interface CourseExclusiveFeatureProps {
  section: FeatureExplanationsSection;
}

const CourseExclusiveFeature: React.FC<CourseExclusiveFeatureProps> = ({
  section,
}) => {
  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-3">{section.name}</h2>
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        {section.values.map((feature, index) => (
          <div key={index} className="py-2 border-b border-gray-200 last:border-b-0">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full md:w-[70%]">
                <h3 className="text-lg font-normal text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <ul className="list-none space-y-2">
                  {feature.checklist.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-gray-700"
                    >
                      <i className="fa-solid fa-check text-blue-600 font-bold"></i>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full md:w-[30%]">
                {feature.file_url && (
                  <Image
                    src={feature.file_url}
                    alt={feature.title}
                    className="object-contain"
                    width={300}
                    height={200}
                  />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseExclusiveFeature;
