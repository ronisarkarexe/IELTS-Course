import { RequirementsSection } from "@/lib/model";
import React from "react";

interface RequirementComponentProps {
  section: RequirementsSection;
}

const RequirementComponent: React.FC<RequirementComponentProps> = ({
  section,
}) => {
  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-3">{section.name}</h2>
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <p>
          <i className="fa-solid fa-check text-blue-600 font-bold"></i>{"  "}
          ইন্টারনেট সংযোগ (ওয়াইফাই বা মোবাইল ইন্টারনেট)
        </p>
        <p>
          <i className="fa-solid fa-check text-blue-600 font-bold"></i>{"  "}
          স্মার্টফোন অথবা পিসি
        </p>
      </div>
    </div>
  );
};

export default RequirementComponent;
