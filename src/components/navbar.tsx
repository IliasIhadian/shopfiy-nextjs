"use client";
import Image from "next/image";
import Link from "next/link";

import { useState } from "react";
import React from "react";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

  return (
    <>
      <div
        id="nav"
        className=" w-full md:px-8 h-20  md:hover:bg-[#908681] md:bg-transparent md:fixed  z-10"
      >
        <div
          id="head"
          className="  w-full grid grid-cols-3 gap-2  items-center"
        >
          {/* for mobile  */}
          <div id="logo" className="order-first md:hidden">
            <div className="flex items-center justify-between  py-8 px-2 ">
              <nav>
                <section className="MOBILE-MENU flex lg:hidden">
                  <div
                    className="HAMBURGER-ICON space-y-2"
                    onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
                  >
                    <span className="block h-1 w-8 animate-pulse bg-black"></span>
                    <span className="block h-1 w-8 animate-pulse bg-black"></span>
                    <span className="block h-1 w-8 animate-pulse bg-black"></span>
                  </div>

                  <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
                    <div
                      className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
                      onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
                    >
                      <svg
                        className="h-8 w-8 text-gray-600"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    </div>
                    <ul className="MENU-LINK-MOBILE-OPEN flex flex-col   min-h-[250px]">
                      <li className=" my-8 uppercase">
                        <Link href={"/"}>
                          <p className="  border-b border-gray-400 text-black font-bold">
                            Home
                          </p>
                        </Link>
                      </li>{" "}
                      <li className=" my-8 uppercase">
                        <Link href={"/shop"}>
                          <p className="  border-b border-gray-400 text-black font-bold">
                            Shop
                          </p>
                        </Link>
                      </li>
                      <li className=" my-8 uppercase">
                        <Link href={"/kontakt"}>
                          <p className="  text-gray-700 hover:text-black hover:font-bold">
                            Kontakt
                          </p>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </section>
              </nav>
            </div>
            {/*
             */}
          </div>

          {/*for desktop */}
          <div
            id="logo"
            className="order-2 md:order-first place-self-center md:place-self-start"
          >
            <Link href={"/"}>
              <Image
                src={"/logo.png"}
                width={80}
                height={80}
                quality={100}
                alt={"logo"}
              ></Image>
            </Link>
          </div>
          <div id="navbar" className="place-self-center md:flex gap-4 hidden ">
            <div className=" bg-black border border-b-[1px] border-light-violet hover:border-black rounded-sm">
              <Link href={"/shop"} className="p-1 hover:font-bold text-white">
                SHOP
              </Link>
            </div>

            <div>
              <Link href={"/kontakt"}>
                <p className="text-gray-700 hover:text-black hover:font-bold">
                  Kontakt
                </p>
              </Link>
            </div>
          </div>
          <div className="order-last justify-self-end"></div>
        </div>
      </div>

      <style>{`
          .hideMenuNav {
            display: none;
          }
          .showMenuNav {
            display: block;
            position: absolute;
            width: 100%;
            height: 100vh;
            top: 0;
            left: 0;
            background: white;
            z-index: 10;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
            z-index: 20;
          }
        `}</style>
    </>
  );
}
