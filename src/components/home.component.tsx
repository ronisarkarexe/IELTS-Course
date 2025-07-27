import React from "react";
import LeftContentComponent from "./left.content";
import RightContentComponent from "./right.content";
import { ChecklistItem, Section } from "@/lib/model";

interface HomeComponentProps {
  checklist: ChecklistItem[];
  ctaText: {
    name: string;
    value: string;
  };
  sections: Section[];
}

const HomeComponent: React.FC<HomeComponentProps> = ({
  checklist,
  ctaText,
  sections,
}) => {
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"'>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <LeftContentComponent sections={sections} />
        <RightContentComponent checklist={checklist} ctaText={ctaText} />
      </div>
    </div>
  );
};

export default HomeComponent;
