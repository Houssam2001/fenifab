// import "mapbox-gl/dist/mapbox-gl.css";
import React from "react";
import Mapin from "./mapin";

const Map = () => {

    return (
        <>
            <section
                id="home"
                className="relative z-10 overflow-hidden pt-[2px] pb-16 md:pt-[5px] md:pb-[5px] xl:pt-[6px] xl:pb-[8px] 2xl:pt-[9px] 2xl:pb-[10px]" >

                <div className="container">

                    <div className="-mx-4 flex flex-wrap">

                        <div className="w-full px-1 bg-center">
                        <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                        <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                Localisation du Fenifab
                </h1>
                            <Mapin />
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
};

export default Map;
