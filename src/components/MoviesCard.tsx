"use client";
import Image from "next/image";
import Link from "next/link";
import { SlCalender } from "react-icons/sl";
import { FaClock, FaRegStar } from "react-icons/fa";
import { FaPlayCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTheme } from "next-themes";
import { BiLinkExternal } from "react-icons/bi";
import { PiPlayCircleBold } from "react-icons/pi";
import { BsStarFill } from "react-icons/bs";
import { useRouter } from "next/router";
import { Movie } from "@/src/utils/types";

const MovieCard = (props: { movie: Movie }) => {
  const { movie } = props;

  const {
    _id,
    Title,
    Year,
    Rated,
    Released,
    Runtime,
    Genre,
    Director,
    Writer,
    Actors,
    Plot,
    Language,
    Country,
    Awards,
    Poster,
    Metascore,
    imdbRating,
    imdbVotes,
    imdbID,
    Type,
    Response,
    Images,
  } = movie;
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const { theme } = useTheme();

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={` ${
        theme === "dark" ? "bg-gray-800 text-white " : "bg-white text-black "
      } rounded-lg overflow-hidden  `}
      whileHover={{ scale: 1.05 }}
    >
      <div className="relative group rounded-lg text-center ">
        <img
          src={Images[2]}
          alt={Title}
          className="transition duration-300 ease-in-out"
          style={{ objectFit: "cover", width: "280px", height: "410px" }}
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
          <Link
            href={`/movie/${_id}`}
            className="text-white rounded-full  transition-all opacity-50"
          >
            <PiPlayCircleBold size={50} />
          </Link>
        </div>
      </div>

      <div className=" p-4 flex flex-col gap-2 ">
        <div className="w-full text-center">
          <h2>{Title}</h2>
        </div>
        <div className="flex justify-between">
          <p className="text-sm font-semibold">
            <small>
              <BsStarFill size={18} style={{ color: "#84CC16" }} /> :{" "}
            </small>
            {imdbRating}
          </p>
          <p className="text-sm font-semibold">
            <SlCalender
              size={18}
              style={{ color: theme === "dark" ? "#84CC16" : "0000" }}
            />{" "}
            : {Year}
          </p>
        </div>
        <div className="flex justify-between">
          <p className="text-sm">
            <FaClock size={18} style={{ color: "#84CC16" }} /> : {Runtime}
          </p>
          <p className="text-sm">
            <FaRegStar size={20} style={{ color: "#84CC16" }} /> : 4.5
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default MovieCard;
