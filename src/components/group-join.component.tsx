import { GroupJoinEngagementSection } from "@/lib/model";
import Image from "next/image";
import React from "react";

interface GroupJoinComponentProps {
  section: GroupJoinEngagementSection;
}

const GroupJoinComponent: React.FC<GroupJoinComponentProps> = ({ section }) => {
  const freePdf = section.values[0];
  return (
    <div
      className="w-full bg-cover bg-center rounded-lg p-9 flex flex-col md:flex-row items-center justify-between mt-9"
      style={{
        backgroundImage: `url(${freePdf.background.image})`,
        backgroundColor: freePdf.background.primary_color,
      }}
    >
      <div className="text-left text-white max-w-lg">
        <Image
          src={freePdf.top_left_icon_img}
          alt={freePdf.top_left_icon_img}
          width={210}
          height={210}
          className="rounded-lg object-cover"
        />
        <h2
          className="text-2xl font-bold mb-2 mt-3"
          style={{ color: freePdf.title_color }}
        >
          {freePdf.title}
        </h2>
        <p className="text-base" style={{ color: freePdf.description_color }}>
          {freePdf.description}
        </p>
        <a
          href={freePdf.cta.clicked_url}
          target="_blank"
          rel=""
          className="inline-block mt-4 bg-green-600 text-white px-4 py-2 rounded font-semibold"
        >
          {freePdf.cta.text}
        </a>
      </div>
      <div className="mt-4 md:mt-0 md:ml-6">
        <Image
          src={freePdf.thumbnail}
          alt={freePdf.title}
          width={400}
          height={400}
          className="rounded-lg object-cover"
        />
      </div>
    </div>
  );
};

export default GroupJoinComponent;
