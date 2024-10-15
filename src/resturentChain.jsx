import React, { useEffect, useState } from "react";
import ResturentCard from "./ResturentCard";
const ResturentChain = () =>{
    const [dataList, setDataList] = useState([ ]);
    useEffect(()=>{ fetchData() },[]);
    const fetchData = async () =>{
        const resString = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.2642598&lng=77.412038&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const resJson = await resString.json();
        const chainList = resJson?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        setDataList(chainList);
        console.log(chainList); 
    }

    return(
        <div className=" sm:mx-40 my-4 ">
            <p className="ml-4 text-black font-bold text-lg mb-4">Top resturent chain in your area</p>
            <div className=" flex hide-scrollbar flex-nowrap overflow-y-hidden gap-4">
        {
            dataList.map((list)=>{
                return <ResturentCard width='w-52' innerWidth='w-48' {...list.info}/>
            })
        }
       </div> 
        </div>
    )
}
export default  ResturentChain;
