"use client";
import Movies from "@/src/components/Movies";
import VideoModal from "@/src/components/videoModal";
import { FilmsService } from "@/src/services/FilmsService";
import { BsShareFill, BsStarFill } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
import { useQuery } from "react-query";

export default function Movie({ params }: any) {
  const movieId = params.movieId;

  const { data: movie, isLoading } = useQuery(
    [
      FilmsService.GET_FILM_BY_ID,
      {
        movieId,
      },
    ],
    () => {
      return FilmsService.getFilmById({
        movieId,
      });
    }
  );

  return (
    <section>
      <div className="flex justify-center items-center  w-full h-screen gap-20">
        <div className="absolute -z-10 min-h-screen h-full w-full mt-15 opacity-30">
          {
            <img
              src={movie?.data?.Images[2]}
              loading="lazy"
              className="object-cover backdrop-blur-lg opacity-80"
              style={{ width: "100%", height: "100%" }}
              alt=""
            />
          }
        </div>

        <div className="relative group rounded-lg text-center ">
          <img
            className="rounded-xl"
            src={movie?.data?.Images[0]}
            alt={movie?.data?.Title}
            style={{ width: "300px", height: "400px", objectFit: "fill" }}
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
            <VideoModal />
          </div>
        </div>

        <div className="flex flex-col  gap-3">
          <p className="text-6xl ">{movie?.data?.Title}</p>
          <div className="flex gap-4 ">
            <button className="border text-black bg-gray-200 hover:bg-lime-300 p-1 rounded-md">
              Movie
            </button>
            <p className="border text-black bg-lime-300 p-0.5 rounded-sm">HD</p>
            <p className="hover:text-lime-300 text-white hover:dark:text-lime-300 transition-colors capitalize cursor-pointer mx-2">
              {movie?.data?.Genre}
            </p>
            <p className=" flex gap-1 justify-center">
              <SlCalender size={20} /> {movie?.data?.Year}
            </p>
          </div>
          <div className="flex justify-around items-center bg-gray-300 p-5 rounded-lg">
            <div className=" flex flex-col gap-2">
              <p>
                <BsShareFill color="lime" size={30} />
              </p>
              <p>Share</p>
            </div>
            <div className=" flex flex-col  justify-around  gap-2">
              <p>Rate the Show</p>
              <div>
                <p>
                  <BsStarFill color="lime" size={30} />
                </p>
                <p>{movie?.data?.imdbRating}</p>
              </div>
            </div>
            <div>
              <button className="flex   text-center border text-black bg-red-600 hover:bg-green-500 p-2 rounded-md gap-3">
                Book-Tickets
              </button>
            </div>
          </div>
          <p className="max-w-xl break-words">{movie?.data?.Plot}</p>
        </div>
      </div>
      <div>
        <Movies />
      </div>
    </section>
  );
}
