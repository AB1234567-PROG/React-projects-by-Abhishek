import { createContext, useContext, useState } from "react";
import { getWeatherDataForCity } from "../API";
import { getWeatherDataForLocation } from "../API";
export const Context = createContext(null);

export const useWeather = () =>{
    return useContext(Context);
}

export const ContextProvider = (props) => {

    const [data, setData]=useState(null);
    const [searchcity, setSearchCity] = useState(null);

    const fetchData = async () => {
        const response = await getWeatherDataForCity(searchcity);
        setData(response);
    };

    const fetchCurrentUserLocationData = () => {
       
    navigator.geolocation.getCurrentPosition((position) => {getWeatherDataForLocation(position.coords.latitude, position.coords.longitude).then((data)=>setData(data));})
    }

    return <Context.Provider value={{data, fetchData, searchcity, setSearchCity, fetchCurrentUserLocationData}}>{props.children}</Context.Provider>
    
    
}