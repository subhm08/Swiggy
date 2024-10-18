import React from "react";
import Navbar from "./Navbar";
import { ShimmerSimpleGallery } from "react-shimmer-effects";

const LoadingShimmer = () =>{
    return(
        <div className="loading-shimmer">
            <Navbar/>
            <div className="hero h-[calc(50vh)] w-full bg-gray-900 flex items-center justify-center">
                <h2 className=" font-semibold text-2xl text-gray-50 opacity-85">Looking for great food near you...</h2>
            </div>
            <ShimmerSimpleGallery card imageHeight={150} row={4} col={4} caption/>

        </div>
    );
}

export default LoadingShimmer