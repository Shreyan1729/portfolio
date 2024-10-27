import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* SIDE NAV_BAR STARTS FROM HERE */}
      <div
        className={`${!toggle ? "hidden" : "flex"}
          sm:hidden fixed right-0 z-40 w-64 h-full p-4 overflow-y-auto transition-transform -translate-x-full bg-gray-800`}
        id="drawer-navigation"
        style={{ marginRight: "-255px", transition: "all 0.3s" }}
        tabindex="-1"
        aria-labelledby="drawer-navigation-label"
      >
        <button
          onClick={() => setToggle(false)}
          type="button"
          data-drawer-hide="drawer-navigation"
          aria-controls="drawer-navigation"
          className="bg-transparent hover:bg-gray-200 rounded-lg text-sm p-1.5 absolute top-2.5 end-2.5 inline-flex items-center hover:bg-gray-600 text-white"
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span className="sr-only">Close menu</span>
        </button>

        <div className="py-4 overflow-y-auto mt-4">
          <ul className="space-y-2 font-medium">
            {navLinks.map((nav) => (
              <a href={`#${nav.id}`}>
                <li
                  key={nav.id}
                  className="pl-8 py-4 pr-24 flex items-center rounded-lg text-white hover:bg-gray-700"
                  onClick={() => setToggle(false)}
                >
                  {nav.title}
                </li>
              </a>
            ))}
          </ul>
        </div>
      </div>

      {/* NAV BAR OR MAIN THING STARTS FROM HERE */}
      <nav
        className={`${
          styles.paddingX
        } w-full flex items-center py-5 fixed top-0 z-20 ${
          scrolled ? "bg-primary" : "bg-transparent"
        }`}
      >
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
            <p className="text-white text-[18px] font-bold cursor-pointer flex ">
              Shreyan &nbsp;
              <span className="sm:block hidden"> | Web Developer</span>
            </p>
          </Link>

          <ul className="list-none hidden sm:flex flex-row gap-10">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`${
                  active === nav.title ? "text-white" : "text-secondary"
                } hovertext-white text-[13px] font-medium cursor-pointer`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>

          <div className="text-center sm:hidden">
            <button
              className="rounded-lg px-5 py-2.5"
              onClick={() => setToggle(!toggle)}
            >
              <img src={menu} alt="" />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
