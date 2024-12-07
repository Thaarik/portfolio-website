"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import ReactFlipCard from "reactjs-flip-card";
import { useQRCode } from "next-qrcode";
import { projects } from "../data";

type ProjectCardProps = {
  index: number;
  project: {
    name: string;
    image: string;
    definition: string;
    liveUrl: string;
  };
  handleLike: (index: number) => void;
  likes: number[];
};

const ProjectCard = ({
  index,
  project,
  handleLike,
  likes,
}: ProjectCardProps) => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const textColor = isMounted
    ? resolvedTheme === "light"
      ? "text-gray-800"
      : "text-white"
    : "";
  const cardBg = isMounted
    ? resolvedTheme === "light"
      ? "bg-slate-100"
      : "bg-gray-800"
    : "";

  const { Canvas } = useQRCode();

  return (
    <ReactFlipCard
      key={index}
      containerCss="relative w-full h-80 rounded-lg overflow-hidden"
      frontStyle={{ background: "none", borderRadius: "8px" }}
      backStyle={{ background: "none", borderRadius: "8px" }}
      frontComponent={
        <div
          className={`w-full h-full flex flex-col justify-between ${cardBg} p-4`}
        >
          <div className="relative h-4/5 w-full overflow-hidden rounded-md">
            <Image
              alt={project.name}
              src={project.image}
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>
          <div className="flex flex-col items-center mt-4">
            <h4 className={`text-base font-bold ${textColor}`}>
              {project.name}
            </h4>
          </div>
        </div>
      }
      backComponent={
        <div
          className={`w-full h-full flex flex-col p-4 ${cardBg} space-y-4 md:space-y-6`}
        >
          {/* Project Definition */}
          <div className="flex-1 text-sm md:text-base text-justify leading-snug">
            <p className={`${textColor}`}>{project.definition}</p>
          </div>

          {/* Live Link & QR Code Section */}
          <div className="flex flex-wrap items-center justify-between gap-3 md:gap-4">
            <div className="flex items-center space-x-2">
              <Canvas
                text={project.liveUrl}
                options={{
                  errorCorrectionLevel: "M",
                  margin: 2,
                  scale: 2,
                  width: 10,
                  color: {
                    dark: "#17091a",
                    light: "#fff5fb",
                  },
                }}
              />
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline hover:text-blue-700 transition duration-300 text-sm md:text-base"
              >
                View Live
              </a>
            </div>

            {/* Like Button */}
            <div className="flex items-center space-x-2 text-sm md:text-base text-pink-500 cursor-pointer">
              <span onClick={() => handleLike(index)}>❤️</span>
              <span>{likes[index]}</span>
            </div>
          </div>
        </div>
      }
    />
  );
};

export const Projects = () => {
  const [likes, setLikes] = useState(() => projects.map(() => 0));

  const handleLike = (index: number) => {
    const newLikes = [...likes];
    newLikes[index] += 1;
    setLikes(newLikes);
  };

  return (
    <div id="projects" className="w-[80%] min-h-screen pt-24 md:pt-12">
      <h2 className="text-center font-extrabold text-4xl mb-10 text-gray-900 dark:text-gray-100">
        Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            index={index}
            project={project}
            handleLike={handleLike}
            likes={likes}
          />
        ))}
      </div>
    </div>
  );
};
