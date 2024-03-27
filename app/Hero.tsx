"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";
import { SlCalender } from "react-icons/sl";
import { RiMovie2Line } from "react-icons/ri";
import Typewriter from "typewriter-effect";

const movieGenres = [
  "Action",
  "Adventure",
  "Comedy",
  "Drama",
  "Fantasy",
  "Horror",
  "Mystery",
  "Romance",
  "Sci-Fi",
  "Thriller",
  "Animation",
  "Crime",
  "Documentary",
  "Family",
  "Historical",
  "Musical",
  "War",
  "Western",
];

const Hero = () => {
  const { theme } = useTheme();

  const [bgImage, setBgImage] = useState("");

  useEffect(() => {
    const imageUrl = theme === "light" ? "/images/hero.jpg" : "";
    setBgImage(imageUrl);
  }, [theme]);

  return (
    <section
      id="home"
      className={`${
        theme === "dark" && "bg-grey-900"
      } relative min-h-screen w-full mx-auto overflow-hidden`}
    >
      <div className="absolute -z-10 min-h-screen h-full w-full mt-15">
        {theme === "light" && (
          <Image
            src={bgImage ? bgImage : ""}
            layout="fill"
            loading="lazy"
            className="object-cover opacity-0.5"
            quality={100}
            style={{ opacity: 0.8 }}
            alt=""
          />
        )}
      </div>
      <div className="py-16 lg:py-48 text-white justify-start flex-col px-12">
        <p className="text-2xl mb-5 text-white flex">
          <span>
            <RiMovie2Line style={{ color: "#CCFF00" }} size={28} />
          </span>
          Filmagnet
        </p>

        <p className="text-5xl mb-5 text-white flex gap-2">
          Unlimited
          <Typewriter
            options={{
              strings: movieGenres,
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
              delay: 50,
              wrapperClassName:
                "text-lime-400 dark:text-white-600 text-6xl md:text-5xl font-medium",
              cursorClassName:
                "text-lime-400 dark:text-white-600 text-6xl md:text-5xl",
            }}
          />
          ,
        </p>

        <p className="text-5xl text-white mb-5 ">Movies, TV-shows & More</p>
        <div className="flex gap-4 ">
          <button className="border text-black bg-gray-200 hover:bg-lime-300 p-1 rounded-md">
            Movie
          </button>
          <p className="border text-black bg-lime-300 p-0.5 rounded-sm">HD</p>
          <p className="hover:text-lime-300 text-white hover:dark:text-lime-300 transition-colors capitalize cursor-pointer mx-2">
            Action, Drama
          </p>
          <p className=" flex gap-1 justify-center">
            <SlCalender size={20} /> 2023
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
