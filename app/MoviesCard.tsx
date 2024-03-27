"use client";
import Image from "next/image";
import Link from "next/link";
import { SlCalender } from "react-icons/sl";
import { FaClock, FaRegStar } from "react-icons/fa";
import { FaPlayCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

const MovieCard = (props: {
  title: string;
  year: string;
  genres: string[];
  thumbnail: string;
  extract: string;
}) => {
  console.log("props==============================", props);
  const { title, year, genres, thumbnail, extract } = props;
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const link = { visit: "akaka.com" };

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="flex flex-col gap-2 bg-white dark:bg-grey-800 rounded-lg p-4"
    >
      <div className="relative group rounded-lg bg-violet-50">
        <img src={thumbnail} atl={title} />
        {link.visit.trim() && (
          <div className="absolute top-0 scale-x-0 group-hover:scale-100 transition-transform origin-left duration-200 ease-linear bg-gray-800 bg-opacity-60 w-full h-full rounded-lg flex items-center gap-4 justify-center">
            {link.visit.trim() && (
              <Link
                href={link.visit}
                target="_blank"
                className="bg-white text-black p-2 rounded-lg hover:bg-black hover:text-white transition-all"
              >
                <FaPlayCircle size={20} />
              </Link>
            )}
          </div>
        )}
      </div>

      <div className="my-2 flex flex-col gap-1">
        <div className="p-4 flex flex-col ">
          <div className="flex justify-between">
            <p className="text-sm font-semibold">{title}</p>
            <p className="text-sm text-lime-300">
              <SlCalender style={{ color: "#CCFF00" }} /> {year}
            </p>
          </div>
          <div className="flex justify-between">
            <p className="text-sm">
              <FaClock style={{ color: "#CCFF00" }} /> : 2:30
            </p>
            <p className="text-sm">
              <FaRegStar style={{ color: "#CCFF00" }} /> : 4.5
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MovieCard;
