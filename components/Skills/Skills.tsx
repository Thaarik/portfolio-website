import { useTheme } from "next-themes";
import React, { useState, useEffect } from "react";
import ReactFlipCard from "reactjs-flip-card";
import Image from "next/image";
import { skills } from "../data";

export const Skills = () => {
  const { theme, resolvedTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const textColorClass =
    resolvedTheme === "light" ? "text-gray-800" : "text-white";
  const cardBgClass = resolvedTheme && "bg-none";

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) {
    return null; // Or a loading spinner
  }
  return (
    <div
      id="skills"
      className="w-[90%] min-h-screen pt-24 md:pt-12 md:mt-2 px-4 sm:px-8 md:px-16 lg:px-32"
    >
      <p className="text-center font-bold text-4xl m-5 mb-10">Skills</p>
      <div className="w-auto grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 p-5">
        {skills.map((skill) => (
          <ReactFlipCard
            key={skill.id}
            containerCss={`relative w-full h-auto  p-1 cursor-pointer ${cardBgClass}`}
            frontStyle={{
              background: "none",
              borderRadius: 10,
              color: resolvedTheme === "light" ? "#333" : "white",
            }}
            backStyle={{
              background: "none",
              borderRadius: 10,
              color: resolvedTheme === "light" ? "#333" : "white",
            }}
            frontComponent={
              <div className="flex flex-col justify-center items-center p-3 w-full h-48 sm:h-52 md:h-56">
                {/* Fixed dynamic resizing */}
                <div className="relative w-16 h-16 md:w-20 md:h-20 sm:w-18 sm:h-18">
                  <Image
                    alt={skill.name}
                    src={skill.logo}
                    fill
                    sizes="200px"
                    style={{
                      objectFit: "contain",
                    }}
                  />
                </div>
                <p
                  className={`${textColorClass} text-center mt-2 text-sm md:text-base`}
                >
                  {skill.name}
                </p>
              </div>
            }
            backComponent={
              <div className="h-48 flex justify-center items-center  text-xs text-pretty p-2 md:text-xs leading-tight">
                {skill.definition}
              </div>
            }
          />
        ))}
      </div>
    </div>
  );
};
