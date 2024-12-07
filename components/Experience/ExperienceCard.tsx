import { BriefcaseBusinessIcon, SchoolIcon } from "lucide-react";
import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

export interface ExperienceCardProps {
  theme: string | undefined;
  styleType: string;
  date: string;
  visible: boolean;
  title: string;
  company?: string;
  school?: string;
  location: string;
  description: string;
}

export const ExperienceCard = ({
  theme,
  styleType,
  date,
  visible,
  title,
  location,
  description,
  company,
  school,
}: ExperienceCardProps) => {
  const contentStyle =
    styleType === "education"
      ? theme === "light" ? { background: "#ffe682", color: "black" } : { background: "#16151F", color: "#fff" }
      : theme === "light" ? { background: "#89ffb2", color: "black" } : { background: "#46173C", color: "#fff" };
  const arrowStyle =
    styleType === "education"
      ? theme === "light" ? { borderRight: "7px solid  #ffe682" } : { borderRight: "7px solid  #16151F" }
      : theme === "light" ? { borderRight: "7px solid  #89ffb2" } : { borderRight: "7px solid  #46173C" };
  const iconStyle =
    styleType === "education"
      ? theme === "light" ? { background: "#ffe682", color: "black" } : { background: "#16151F", color: "#fff" }
      : theme === "light" ? { background: "#89ffb2", color: "black" } :{ background: "#46173C", color: "#fff" };
  const icon =
    styleType === "work" ? <BriefcaseBusinessIcon /> : <SchoolIcon />;

  return (
    <VerticalTimelineElement
      contentStyle={contentStyle}
      contentArrowStyle={arrowStyle}
      iconStyle={iconStyle}
      date={date}
      icon={icon}
      visible={visible}
    >
      <h3 className="vertical-timeline-element-title text-lg">{title}</h3>
      <h4 className="vertical-timeline-element-subtitle text-sm">
        {company ? company : school}
      </h4>
      <h4 className="vertical-timeline-element-subtitle text-xs">{location}</h4>
      <br />
      <h4 className="vertical-timeline-element-subtitle text-xs ">
        {description}
      </h4>
    </VerticalTimelineElement>
  );
};
