import { useEffect } from 'react';
import './App.css';
import Card from './Components/card';
import Input from './Components/input';
import Button from './Components/button';
import { useWeather } from "./Context/Weather";

function App() {

  const weather = useWeather();
  console.log(weather);
  
  useEffect(()=>{
    weather.fetchCurrentUserLocationData();
  },[]);
 
  return (
    
    <div className="App">
      <h4>Weather Forecast</h4>
      <Input/>
      <Button onClick={weather.fetchData} value = "Search"/>
      <Card/>
      <Button onClick={weather.fetchCurrentUserLocationData} value = "Refresh"/>
    </div>
  
 );
}

export default App;
