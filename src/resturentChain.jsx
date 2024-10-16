import React, { useContext, useEffect, useState } from "react";
import ResturentCard from "./ResturentCard";
import { ShimmerSimpleGallery } from "react-shimmer-effects";
import { DataContext } from "./APIFetched";

const Loading = () =>{
    return(
        <div className=" sm:mx-40 my-4 ">
            <p className="ml-4 text-black font-bold text-lg mb-4">Top resturent chain in your area</p>
            <ShimmerSimpleGallery card imageHeight={150} row={1} caption /> 
        </div>
    )
}

const ResturentChain = () =>{
    const Data = useContext(DataContext);
    const chainListData = Data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    

    return !Data? <Loading/> :(

        <div className=" sm:mx-40 my-4 ">
            <p className="ml-4 text-black font-bold text-lg mb-4">Top resturent chain in your area</p>
            <div className=" flex hide-scrollbar flex-nowrap overflow-y-hidden gap-4">
        {
            chainListData.map((chainList)=>{
                return <ResturentCard width='w-52' innerWidth='w-48' { ...chainList.info}/>
            })
        }
       </div> 
        </div>
    )
}
export default  ResturentChain;
