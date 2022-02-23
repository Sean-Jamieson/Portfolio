import { ArrowRightIcon } from "@heroicons/react/solid"
import React from "react";

export default function Navbar() {
    return(
        <header className="bg-euc text-greyText md:sticky top-0 z-10">
            <div className="conatiner mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <div className="title-font font-medium mb-4 md:mb-0">
                    <a href="#about" className="ml-3 text-xl">
                        Sean Jamieson
                    </a>
                </div>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-greyText flex flex-wrap items-center text-base justify-center">
                    <a href="#projects" className="mr-5 hover:text-beaver">
                        Past Work
                    </a>
                    <a href="#skills" className="mr-5 hover:text-beaver">
                        Skills
                    </a>
                </nav>
                <a
                  href="#contact"
                  className="inline-flex items-center bg-euc border-0 py-1 px-3 focus:outline-none rounded hover:bg-darkEuc  text-base mt-4 md:mt-0">
                  Hire Me
                  <ArrowRightIcon className="w-4 h-4 ml-1" />
                </a>
            </div>
        </header>
    );
}