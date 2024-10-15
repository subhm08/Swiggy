import react, { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

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
    const apiKey = "86d6ec3075a943629a3c39561ddc0bcf"; // Replace with your OpenCage API key
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.results.length > 0) {
        const locationName = data.results[0].formatted;
        setLocation(locationName);
        console.log(location)

      } else {
        setLocation("Location not found");
      }
    } catch (error) {
      console.error("Error fetching location:", error);
      setLocation("Others");
    }
  
  };

    useEffect(()=>{ getLocationName()},[latitude,longitude]);

    
    useEffect(()=>{ 
        fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=${latitude}&lng=${longitude}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`)
        .then(response => response.json())
        .then(fetchedData => setApiData(fetchedData));
     },[]);


    return (
        <DataContext.Provider value={Apidata}>
            {children}
            {console.log(location)}
        </DataContext.Provider>
    )
}