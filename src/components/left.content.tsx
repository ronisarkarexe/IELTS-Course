import { Section } from "@/lib/model";
import React from "react";
import InstructorComponent from "./instructor.component";
import CourseLaidOutComponent from "./course-laid-out.component";
import CourseExclusiveFeature from "./course-exclusive-feature";
import CourseLearnComponent from "./course-learn.component";
import CourseDetailsComponent from "./course-details.component";
import GroupJoinComponent from "./group-join.component";
import RequirementComponent from "./requirements.components";

interface LeftContentComponentProps {
  sections: Section[];
}

const LeftContentComponent: React.FC<LeftContentComponentProps> = ({
  sections,
}) => {
  const viewSection = (section: Section) => {
    switch (section.type) {
      case "instructors":
        return <InstructorComponent section={section} />;
      case "features":
        return <CourseLaidOutComponent section={section} />;
      case "group_join_engagement":
        return <GroupJoinComponent section={section} />;
      case "pointers":
        return <CourseLearnComponent section={section} />;
      case "about":
        return <CourseDetailsComponent section={section} />;
      case "feature_explanations":
        return <CourseExclusiveFeature section={section} />;
      case "requirements":
        return <RequirementComponent section={section} />;
      default:
        return null;
    }
  };

  return (
    <div className="lg:col-span-2 mt-8">
      {sections.map((section, index) => (
        <div key={index}>{viewSection(section)}</div>
      ))}
    </div>
  );
};

export default LeftContentComponent;
