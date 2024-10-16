import react, { createContext, useEffect, useState } from "react";

export const DataContext = createContext();
export const LocationContext = createContext();

export const DataProvider = ({ children }) =>{
    const [Apidata, setApiData] = useState(null);
    const [latitude, setLatitude] =useState('');
    const [longitude, setLongitude] =useState('');
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
    
    function showPosition(position) {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
        // Use these coordinates to display on a map or fetch nearby restaurants
    }
    
    function showError(error) {
        switch(error.code) {
            case error.PERMISSION_DENIED:
                alert("User denied the request for Geolocation.");
                break;
            case error.POSITION_UNAVAILABLE:
                alert("Location information is unavailable.");
                break;
            case error.TIMEOUT:
                alert("The request to get user location timed out.");
                break;
            case error.UNKNOWN_ERROR:
                alert("An unknown error occurred.");
                break;
        }
    }
    const [location, setLocation] = useState(null);

  const getLocationName = async () => {
    const apiKey = process.env.GET_LOCATION_API;
     // Replace with your OpenCage API key
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

    useEffect(()=>{ getLocationName()},[latitude,longitude]);

    
    useEffect(()=>{ 
        fetchData()
     },[]);

     const fetchData = async() =>{
      const response = await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.2642598&lng=77.412038&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`)
      const data = await response.json()
      setApiData(data)
     }


    return (
        <DataContext.Provider value={Apidata}>
            <LocationContext.Provider value={location}>
            {children}
            {console.log(location)}
            </LocationContext.Provider>
        </DataContext.Provider>
    )
}