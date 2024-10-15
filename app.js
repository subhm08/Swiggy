import react from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./src/Navbar";
import Cuisine from "./src/cuisineCards";
import ResturentChain from "./src/resturentChain";
import ResturentList from "./src/ResturentList";
import FilterBar from "./src/FilterBar";

import { DataProvider } from "./src/APIFetched";
 const App = () => {
    return(
        <DataProvider>
            <div>
                <Navbar/>
                <Cuisine/>
                <hr/>
                <ResturentChain/>
                <hr/>
            </div>
            <FilterBar/>
            <ResturentList/>
    </DataProvider>
    )
 }

 
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
 