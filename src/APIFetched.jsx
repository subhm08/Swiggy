import react, { createContext, useEffect, useState } from "react";
import LoadingShimmer from "./LoadingShimmer";
export const DataContext = createContext();
export const LocationContext = createContext();

export const DataProvider = ({ children }) =>{
    const [Apidata, setApiData] = useState(null);
    const [latitude, setLatitude] =useState(null);
    const [longitude, setLongitude] =useState(null);
    const [location, setLocation] = useState(null);

    useEffect(() =>{
      if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(
          (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
          
      },
      (error) => {
        console.error(error);
        }
        );
        }
   },[])


  const getLocationName = async (lat, long) => {

    const apiKey = process.env.GET_LOCATION_API;
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.results.length > 0) {
        const locationName = data.results[0].formatted;
        setLocation(locationName);
        console.log(location)

      } else {
        setLocation("Others...");
      }
    } catch (error) {
      console.error("Error fetching location:", error);
      setLocation("Others");
    }
  
  };


  const fetchData = async (latitude, longitude) => {
    console.log("Longitude:", longitude);
    console.log("Latitude:", latitude);

    try {
        const response = await fetch(`http://localhost:5000/api/swiggy?lat=${latitude}&lng=${longitude}`);
        const data = await response.json();
        setApiData(data);
    } catch (error) {
        console.error("Error fetching restaurant data:", error);
    }
};


     useEffect(()=>{
      if(latitude && longitude){
          getLocationName(latitude,  longitude);
          fetchData(latitude,  longitude);
      }
      },[latitude, longitude]);
     


    return (

      <>
      {Apidata ? (
        <DataContext.Provider value={Apidata}>
            <LocationContext.Provider value={location}>
            {children}
            {console.log(location)}
            </LocationContext.Provider>
        </DataContext.Provider>
      ) :  (
        <>
         <LoadingShimmer/>
        </>
    )
    }

      </>
    )
}