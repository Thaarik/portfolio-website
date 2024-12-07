import { InstagramLogoIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import TypeEffect from "./TypeEffect";

export const About = () => {
  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row pt-16 md:pt-24 justify-evenly items-center">
      <div className="text-center md:text-left m-12">
        <h1 className="text-5xl font-extrabold mb-4 text-yellow-400">
          Hi, I&apos;m {TypeEffect(["Thaarik Ahamed"], false, false)} 🚀 💻 📷
        </h1>
        <h2 className="text-3xl font-bold mb-6 text-green-500">
          {TypeEffect(
            [
              "Software Engineer",
              "Software Developer",
              "Gamer",
              "Photographer",
            ],
            true,
            true
          )}
        </h2>
        <p className="text-lg mb-4">
          Passionate about building efficient, user-friendly applications that
          make a real impact.
        </p>
        <p className="text-lg mb-4">
          Always learning—currently exploring AI, Mobile App development, and
          Blockchain.
        </p>
        <p className="text-lg mb-4">
          Let’s collaborate on challenging projects or chat about full-stack dev
          and LLMs!
        </p>
        <p className="text-lg font-medium">
          Fun fact: I love photography (check my{" "}
          <a
            href="https://www.instagram.com/a_paradox_of_time/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block content-start"
          >
            <InstagramLogoIcon className={`w-6 h-6 cursor-pointer mt-2`} />
          </a>
          ), drawing anime characters, play PC games (GTA V 😉) and
          experimenting with new recipes 🥗!
        </p>
      </div>
      <div className="m-2 h-auto">
        <Image src={"/asset/main.png"} alt="image" width={500} height={500} />
      </div>
    </div>
  );
};
