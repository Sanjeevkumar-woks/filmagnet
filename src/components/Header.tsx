"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { FiSun, FiMoon } from "react-icons/fi";
import { CgClose, CgMenuRight } from "react-icons/cg";
import { BiWorld } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import { RiMovie2Line } from "react-icons/ri";

export default function Header() {
  const [navCollapse, setNavCollapse] = useState(true);
  const [scroll, setScroll] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const updateScroll = () => {
      window.scrollY >= 90 ? setScroll(true) : setScroll(false);
    };
    window.addEventListener("scroll", updateScroll);
  }, []);

  const navigations = ["Home", "Movies", "Tv-Shows", "Anime", "Premium"];

  return (
    <header
      className={`backdrop-filter backdrop-blur-lg ${
        scroll ? "border-b bg-opacity-40" : "border-b-0"
      } dark:bg-grey-900 dark:bg-opacity-40 border-gray-200 dark:border-b-0 z-30 min-w-full flex flex-col fixed`}
    >
      <nav className="lg:w-11/12 2xl:w-4/5 w-full md:px-6 2xl:px-0  py-4 hidden sm:flex items-center justify-between">
        <Link
          href={"/"}
          className="flex text-xl 2xl:ml-6 no-underline text-white hover:text-lime-400 hover:dark:text-lime-500 transition-colors duration-300"
        >
          <RiMovie2Line style={{ color: "#CCFF00" }} size={28} /> Filmagnate
        </Link>

        <ul className="flex items-center gap-2">
          {navigations.map((e, i) => (
            <>
              <li key={i} className="list-none">
                <ScrollLink
                  className="hover:text-lime-300 text-white hover:dark:text-lime-300 transition-colors capitalize cursor-pointer mx-2"
                  to={e}
                  offset={-60}
                  smooth={true}
                  duration={500}
                  isDynamic={true}
                >
                  {e}
                </ScrollLink>
              </li>

              {navigations.length - 1 != i ? (
                <small className="text-sm text-gray hover:text-lime-300 hover:dark:text-lime-300">
                  |
                </small>
              ) : (
                ""
              )}
            </>
          ))}
        </ul>
        <ul className="flex items-center gap-2">
          <li className=" flex gap-1">
            <CiSearch />
            <small className="text-sm text-gray hover:text-lime-300 hover:dark:text-lime-300">
              |
            </small>
          </li>

          <span
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="hover:bg-gray-100 hover:dark:bg-lime-400 p-1.5 rounded-full cursor-pointer transition-colors"
          >
            {theme === "dark" ? <FiSun /> : <FiMoon />}
          </span>
          <li>
            <BiWorld />
          </li>
        </ul>
      </nav>

      <nav className="p-4 flex sm:hidden items-center justify-between">
        <RiMovie2Line style={{ color: "#CCFF00" }} size={28} />

        <div className="flex items-center gap-4">
          <span
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="bg-gray-100 dark:bg-lime-400 p-1.5 rounded-full cursor-pointer transition-colors"
          >
            {theme === "dark" ? <FiSun /> : <FiMoon />}
          </span>
          <CgMenuRight size={20} onClick={() => setNavCollapse(false)} />
        </div>
      </nav>

      <div
        className={`flex min-h-screen w-screen absolute md:hidden top-0 ${
          !navCollapse ? "right-0" : "right-[-100%]"
        } bottom-0 z-50 ease-in duration-300`}
      >
        <div className="w-1/4" onClick={() => setNavCollapse(true)}></div>

        <div className="flex flex-col p-4 gap-5 backdrop-filter backdrop-blur-sm dark:bg-grey-900/95 w-3/4 bg-lime-200">
          <CgClose
            className="self-end my-2"
            size={20}
            onClick={() => setNavCollapse(true)}
          />

          {navigations.slice(0, 4).map((e, i) => (
            <ScrollLink
              key={i}
              className="hover:text-lime-300 py-1.5 px-4 rounded transition-colors capitalize cursor-pointer "
              to={e}
              offset={-60}
              smooth={true}
              duration={500}
              isDynamic={true}
              onClick={() => setNavCollapse(true)}
            >
              {e}
            </ScrollLink>
          ))}
        </div>
      </div>
    </header>
  );
}
