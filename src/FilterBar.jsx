const FilterBar = () =>{ 
    return(
        <div className="filter-bar hide-scrollbar flex flex-nowrap overflow-y-hidden  gap-2 bg-white text-neutral-600 px-4 justify-evenly py-2 items-center font-medium text-sm z-20 w-screen sticky top-0">
            <button className="btn">Filter</button>
            <button className="btn">Sort By</button>
            <button className="btn">Fast Delivery</button>
            <button className="btn">New on Swiggy</button>
            <button className="btn">Rating 4.0+</button>
            <button className="btn">Pure Veg</button>
            <button className="btn">Offers</button>
            <button className="btn">Rs. 300-Rs. 600</button>
            <button className="btn">Less the Rs. 300</button>
        </div>
    );
}
export  default FilterBar