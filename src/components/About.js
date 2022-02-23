import React from "react";

export default function About() {
    return (
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-centre mt-11">
                <div className="lg:flex-grow md:w-1/2 md:mr-10 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">
                        Hi, I'm Sean.
                        <br className="hidden lg:inline-block" /> I love to build amazing apps.
                    </h1>
                    <p className="mb-8 leading-relaxed text-darkEuc">
                    I'm a driven individual with a passion for tech and problem solving. I revel in the opportunity to be challanged and to excel.
                    </p>
                    <div className="flex justify-centre">
                        <a
                            href="#contact"
                            className="inline-flex  bg-euc text-greyText border-0 py-2 px-6 focus:outline-none hover:bg-darkEuc rounded text-lg">
                                Work With Me.
                        </a>
                        <a
                            href="#projects"
                            className="ml-4 inline-flex text-greyText bg-euc border-0 py-2 px-6 focus:outline-none hover:bg-darkEuc  rounded text-lg">
                                See My Past Work.
                            </a>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-1/5 md:w-1/3 md:ml-12 w-1/3">
                    <img
                        className="object-contain object-centre rounded"
                        alt="hero"
                        src="./me.jpg"
                    />
                </div>

            </div>
        </section>
    );
}