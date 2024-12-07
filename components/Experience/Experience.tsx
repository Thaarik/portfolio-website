"use client";
import { BriefcaseBusinessIcon, SchoolIcon } from "lucide-react";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import { ExperienceCard } from "./ExperienceCard";
import { experience } from "../data";

export const Experience = () => {
  const { theme } = useTheme();
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) {
    return null;
  }
  return (
    <div id="experience" className="min-h-screen w-[80%] pt-24 md:pt-12">
      <p className="text-center font-bold text-4xl m-5 mb-10">
        Work Experience
      </p>
      <VerticalTimeline
        animate={true}
        lineColor={theme === "light" ? "black" : "white"}
      >
        {experience.map((e) => (
          <ExperienceCard
            key={e.id}
            theme={theme}
            styleType={e.styleType}
            visible={e.visible}
            date={e.date}
            title={e.title}
            company={e.comapny}
            school={e.school}
            location={e.location}
            description={e.description}
          />
        ))}
      </VerticalTimeline>
    </div>
  );
};
