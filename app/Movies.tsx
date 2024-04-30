"use client";
import { useTheme } from "next-themes";
import { FaRegStar } from "react-icons/fa";
import { BiMoviePlay } from "react-icons/bi";
import { SlCalender } from "react-icons/sl";
import { FaClock } from "react-icons/fa";
import { motion } from "framer-motion";
import { useFilms } from "@/src/hooks/useFilms";
import MovieCard from "./MoviesCard";
import Loader from "@/src/utils/Loader";
import { Pagination } from "antd";
import { Movie } from "@/src/utils/types";
import { useEffect } from "react";

const Movies = () => {
  const { data: movies, isLoading, setSearchKeyword, setPage } = useFilms();

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };
  const { theme } = useTheme();
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <section
          id="home"
          className={`${
            theme === "dark" && "bg-grey-900"
          } relative min-h-screen  p-10 overflow-hidden`}
        >
          <div className="flex flex-col gap-6">
            <h2>Movies</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {movies?.map((movie: Movie) => (
                <MovieCard movie={movie} />
              ))}
            </div>
            <h2>Series</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {movies?.map((movie: Movie) => (
                <MovieCard movie={movie} />
              ))}
            </div>

            <div className="flex justify-center items-center">
              <Pagination defaultCurrent={1} total={50} />
            </div>
          </div>
        </section>
      )}
    </>
  );
};
export default Movies;
