import React, { useContext, useEffect, useState } from "react";
import ResturentCard from "./ResturentCard";
import { DataContext } from "./APIFetched";
import { ShimmerSimpleGallery } from "react-shimmer-effects";

const Loading = () =>{
    return(
        <div className=" sm:mx-40 my-4">
            <p className="ml-4 text-black font-bold text-lg mb-4">Top resturent chain in your area</p>
            <ShimmerSimpleGallery card imageHeight={150} row={4} col={4} caption/>
        </div>
    )
}
const ResturentList = () =>{
    const Data = useContext(DataContext);
    console.log(Data);
    const resListData = Data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants

    return !Data ? <Loading/> :(
        <div className=" sm:mx-40 my-4">
            <p className="ml-4 text-black font-bold text-lg mb-4">Top resturent chain in your area</p>
            <div className=" grid grid-cols-4 gap-4">
        {
            resListData.map((list)=>{
                return <ResturentCard width="w-auto" {...list.info}/>
            })
        }
       </div> 
        </div>
    )
}

export default ResturentList