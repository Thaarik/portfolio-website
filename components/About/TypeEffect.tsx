import Typewriter from "typewriter-effect";

const TypeEffect = (
  strings: string[],
  shouldDelete: boolean,
  loop: boolean
) => {
  return (
    <Typewriter
      options={{
        autoStart: true,
        loop: loop,
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
