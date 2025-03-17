import react, { useEffect } from "react";

const ResturentCard = (props) =>{
    const {id, name , cloudinaryImageId, locality, areaName , cuisines, avgRating,  costForTwo, aggregatedDiscountInfoV3, sla, width, innerWidth } = props;

   
    return(
    <div className={`res-card flex flex-col h-60 p-2 m-1 hover:scale-95 transition-all ${width}`}>
        <img className="rounded-2xl h-1/2 w-48" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} alt={name}/>
        <p className={`res-name text-sm font-bold whitespace-nowrap text-ellipsis overflow-x-hidden `}>{name}</p>
        <p className="res-rating font-semibold text-sm whitespace-nowrap text-ellipsis overflow-x-hidden"><i className="bi bi-star-fill text-white bg-green-700 rounded-2xl text-xs mr-1 px-0.5"></i>{avgRating}</p>
        <p className="res-time text-xs  whitespace-nowrap text-ellipsis overflow-x-hidden">{sla.slaString}</p>
        <p className="res-cuisine text-sm opacity-60 font-semibold whitespace-nowrap text-ellipsis overflow-x-hidden">{cuisines.join(", ")}</p>
        <p className={`res-area text-sm opacity-60 font-semibold whitespace-nowrap text-ellipsis overflow-x-hidden ${innerWidth}`}>{areaName}</p>
    </div>
    )
};

export default ResturentCard