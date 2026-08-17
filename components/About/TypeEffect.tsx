"use client";

import Typewriter from "typewriter-effect";

type TypeEffectProps = {
  strings: string[];
  shouldDelete: boolean;
  loop: boolean;
};

const TypeEffect = ({ strings, shouldDelete, loop }: TypeEffectProps) => {
  return (
    <Typewriter
      options={{
        autoStart: true,
        loop,
      }}
      onInit={(typewriter) => {
        strings.forEach((string) => {
          typewriter.typeString(string);

          if (shouldDelete) {
            typewriter.pauseFor(2000).deleteAll().pauseFor(1000);
          }
        });

        typewriter.start();
      }}
    />
  );
};

export default TypeEffect;
