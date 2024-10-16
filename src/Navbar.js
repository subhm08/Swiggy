import { LocationContext } from "./APIFetched"
import { useContext } from "react";

const Navbar = () =>{
    const location = useContext(LocationContext);
    console.log(location);
    return(
        <div className=" flex gap-2 bg-white text-neutral-600 px-4 justify-evenly py-2 shadow-lg items-center font-medium text-sm sticky top-0 z-20 w-screen"> 
            <img className="size-10" src="data:image/png;base64,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" alt="" />
            <a><p className="text-xs inline-block font-semibold text-ellipsis overflow-hidden whitespace-nowrap w-28 mr-1" href="">{location}</p><i class="bi bi-chevron-down text-orange-500 font-extrabold"></i></a>
            <a href="">Swiggy Corporate</a>
            <a href="">Search</a>
            <a href="">Offers</a>
            <a href="">Help</a>
            <a href="">Sign In</a>
            <a href="">Cart</a>
        </div>
    )
}
export default Navbar