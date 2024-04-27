import { Link } from "react-scroll"; // Change this import

const Footer = () => {
  const navigations = ["Home", "Movies", "Tv-Shows", "Anime", "Premium"];

  return (
    <section className="flex flex-col justify-center item-center gap-3">
      <div className="text-center px-12">
        <p>
          Filmagnet is an online movie streaming platform that offers pirated
          content that is not released. It has a huge collection of latest
          movies and films that still not available on the market and YouTube.
          You can watch and download all contents free of costs, but they are
          illegal, so you have to take some precautions. It is not available in
          all countries so you can use VPN and choose a location with access to
          Filmagnet. Here, we will discuss the Filmagnet.
        </p>
      </div>
      <nav className="w-full  py-4 hidden sm:flex items-center justify-center">
        <ul className="flex items-center gap-2">
          {navigations.map((e, i) => (
            <>
              <li key={i} className="list-none">
                <Link
                  className="hover:text-lime-300 text-white hover:dark:text-lime-300 transition-colors capitalize cursor-pointer mx-2"
                  to={e.toLowerCase().replace(/\s+/g, "-")} // Ensure IDs are correctly formatted
                  offset={-60}
                  smooth={true}
                  duration={500}
                  isDynamic={true}
                >
                  {e}
                </Link>
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
      </nav>
    </section>
  );
};

export default Footer;
