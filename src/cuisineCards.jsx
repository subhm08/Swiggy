import React, { useEffect, useState, useContext } from "react";
import { DataContext } from "./APIFetched";
const CuisineList = (props) =>{
    const {id, description, imageId } =props;
    return(
        <img className="h-36" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_180/"+imageId} alt={description} />
    );
}

const Cuisine = () =>{
    const [dataList, setDataList] = useState([]);
    const data = useContext(DataContext);
    useEffect( () =>{
    const chainList = data?.data?.cards[0]?.card?.card?.imageGridCards?.info
    setDataList(chainList); 
    console.log(dataList);
    }, [])
    return(
        <div className=" sm:mx-40 my-4">
            <p className=" ml-4 text-black font-bold text-lg">what`s on your mind?</p>
            <div className="hide-scrollbar flex flex-nowrap overflow-y-hidden">

            {
            //   dataList.map((data) => {return <CuisineList {...data}/>})  
            }
            </div>
        </div>
        
    )
}
export default Cuisine;