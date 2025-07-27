import { ChecklistItem } from "@/lib/model";
import React from "react";

interface RightContentComponentProps {
  checklist: ChecklistItem[];
  ctaText: {
    name: string;
    value: string;
  };
}

const RightContentComponent: React.FC<RightContentComponentProps> = ({
  checklist,
  ctaText,
}) => {
  return (
    <div className="space-y-6 mt-8">
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-3xl font-bold text-gray-900">৳3850</span>
            <span className="text-lg text-gray-500 line-through">৳5000</span>
          </div>
          <div className="inline-block bg-orange-100 text-orange-800 px-2 py-1 rounded text-sm font-medium">
            ৳1150 Save
          </div>
        </div>

        {ctaText.value === "enroll" && (
          <button className="w-full bg-green-500 text-white py-3 rounded-button font-medium hover:bg-green-600 transition-colors mb-6 !rounded-button whitespace-nowrap">
            {ctaText.name}
          </button>
        )}

        <div className="space-y-4">
          <h3 className="font-semibold text-gray-900">এই কোর্সে যা থাকছে</h3>
          {checklist.map((item) => (
            <div key={item.id} className="flex items-center space-x-2">
              <div className="w-5 h-5 flex items-center justify-center">
                <img src={item.icon} alt={item.text} />
              </div>
              <span className="text-gray-700">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightContentComponent;
