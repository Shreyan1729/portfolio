import React, { useState } from "react";
import "./Footer.css";

import { navLinks } from "../constants";
import { logo, whatsApp, ghub, twetter, faceBook } from "../assets";

const Footer = () => {
  const [active, setActive] = useState("");
  return (
    <>
      <div id="waterdrop"></div>

      <footer className={`py-6 bg-black-100 mt-20 px-5 p-4`}>
        <div className="w-full max-w-screen-xl p-4 py-6 mx-auto lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <a href="/" className="flex items-center">
                <img src={logo} className="h-8 me-3" alt="FlowBite Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                  Shreyan Dey
                </span>
              </a>
            </div>

            <div className="grid grid-cols-4 gap-60 sm:gap-40 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold uppercase text-slate-600 dark:text-white">
                  Contact me
                </h2>
                <ul className="font-medium text-gray-500 dark:text-gray-400">
                  <li className="mb-4">
                    <a
                      href="https://wa.me/+8801818927655"
                      className="text-secondary hover:text-white text-[15px] font-medium cursor-pointer mb-4"
                      style={{ transition: "0.3s" }}
                    >
                      WhatsApp
                    </a>
                  </li>

                  <li className="mb-4">
                    <a
                      href="mailto: shreyandeyrudra@gmail.com"
                      className="text-secondary hover:text-white text-[15px] font-medium cursor-pointer mb-4"
                      style={{ transition: "0.3s" }}
                    >
                      Gamil
                    </a>
                  </li>

                  <li className="mb-4">
                    <a
                      href="https://github.com/Shreyan2010/"
                      className="text-secondary hover:text-white text-[15px] font-medium cursor-pointer mb-4"
                      style={{ transition: "0.3s" }}
                    >
                      Github
                    </a>
                  </li>

                  <li className="mb-4">
                    <a
                      href="https://www.facebook.com/profile.php?id=61554625316314"
                      className="text-secondary hover:text-white text-[15px] font-medium cursor-pointer mb-4"
                      style={{ transition: "0.3s" }}
                    >
                      Facebook
                    </a>
                  </li>

                  <li className="mb-4">
                    <a
                      href="https://x.com/ShreyanDey1729"
                      className="text-secondary hover:text-white text-[15px] font-medium cursor-pointer mb-4"
                      style={{ transition: "0.3s" }}
                    >
                      Twitter
                    </a>
                  </li>

                  <li className="mb-4">
                    <a
                      href="https://www.instagram.com/shreyan1729/"
                      className="text-secondary hover:text-white text-[15px] font-medium cursor-pointer mb-4"
                      style={{ transition: "0.3s" }}
                    >
                      Instagram
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="mb-6 text-transparent">Resources</h2>
                <ul className="font-medium text-gray-500 dark:text-gray-400">
                  {navLinks.map((nav) => (
                    <li
                      key={nav.id}
                      className={`${
                        active === nav.title ? "text-white" : "text-secondary"
                      } hover:text-white text-[15px] font-medium cursor-pointer mb-4`}
                      onClick={() => setActive(nav.title)}
                      style={{ transition: "0.3s" }}
                    >
                      <a href={`#${nav.id}`}>{nav.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <hr className="my-6 border-gray-900 sm:mx-auto dark:border-gray-700 lg:my-8" />

          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center">
              © 2024{" "}
              <a href="/" className="hover:text-white">
                Shreyan™
              </a>
              . All Rights Reserved.
            </span>

            <div className="flex mt-4 sm:justify-center sm:mt-0">
              <span className="flex items-center justify-center mt-1 mb-6 mr-4 text-sm font-semibold uppercase text-slate-600 dark:text-white">
                Follow Me
              </span>
              <a
                href="https://www.facebook.com/profile.php?id=61554625316314"
                className="text-gray-500 hover:text-white"
              >
                <img src={faceBook} alt="" className="w-7" />
                <span className="sr-only">Facebook page</span>
              </a>

              <a
                href="https://x.com/ShreyanDey1729"
                className="text-gray-500 hover:text-white ms-5"
              >
                <img src={twetter} alt="" className="w-7" />
                <span className="sr-only">Twitter page</span>
              </a>

              <a
                href="https://wa.me/+8801818927655"
                className="text-gray-500 hover:text-white ms-5"
              >
                <img src={whatsApp} alt="" className="w-7" />
                <span className="sr-only">Twitter page</span>
              </a>

              <a
                href="https://github.com/Shreyan2010/"
                className="text-gray-500 hover:text-white ms-5"
              >
                <img src={ghub} alt="" className="w-7" />
                <span className="sr-only">GitHub account</span>
              </a>
            </div>
          </div>

          {/* <div className="bg">
            <div className="footer_bg_one"></div>
            <div className="footer_bg_two"></div>
          </div> */}
        </div>
      </footer>
    </>
  );
};

export default Footer;
