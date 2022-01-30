import React from "react";

export default function MadeU() {
    return (
        <footer className="bg-salmon h-10 z-10">
            <div className="flex flex-row justify-center">
                <div className="title-font font-medium text-xl text-darkBlue mt-1">
                    <h1 className="font-size-10">
                        Made Using React
                    </h1>
                </div>
                <div className=" ml-3 w-9 h-9">
                    <a href="https://reactjs.org/">
                    <img
                        className=" object-contain object-centre rounded "
                        alt="log"
                        src="./logo512.png"
                    />
                    </a>
                </div>
            </div>
        </footer>
    )
}