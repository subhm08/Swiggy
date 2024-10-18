const filterbtns = [
    { name: 'Filter', value: "all"},
    { name: 'Sort By', value: "active"},
    { name: 'Fast Delivery', value: 'all' },
    { name: 'New on Swiggy', value: 'all' },
    { name: 'Rating 4.0+', value: 'all' },
    { name: 'Pure Veg', value: 'all' },
    { name: 'Offers', value: 'all' },
    { name: 'Rs. 300-Rs. 600', value: 'all' },
    { name: 'Less the Rs. 300', value: 'all'}

]

const FilterBar = () =>{ 
    return(
        <div className="filter-bar hide-scrollbar flex flex-nowrap overflow-y-hidden  gap-2 bg-white text-neutral-600 px-4 justify-evenly py-2 items-center font-medium text-sm z-20 w-screen sticky top-0">
            {
                filterbtns.map((btn) => 
                    <button className="btn">{btn.name}</button>
                )
            }
        </div>
    );
}
export  default FilterBar