import React, { useState } from 'react';
import { getCityWeatherDetails } from './api/getWeatherDetails';
import './App.css';
const App = () =>{

 const [ searchParam, setSearchParam ] = useState('');
 const [ weatherData, setWeatherData ] = useState({});
 const [ cityNotFound, setCityNotFound ] = useState(false);
 const keyPressHandle = async (e) =>{
    if(e.key === 'Enter'){
        const data = await getCityWeatherDetails(searchParam);
        console.log('data', data)
        if(data.error){
            return setCityNotFound(true);
        };
        setCityNotFound(false);
        setWeatherData(data);
        setSearchParam('');
    }
 }

    return(
      <div className="weather-details">
        <input
        type="text"
        placeholder="search"
        className="weather-details__search"
        value={searchParam}
        onChange={ (e) => {setSearchParam(e.target.value)}}
        onKeyPress={keyPressHandle}
        />
        {cityNotFound && <p className="error-msg"> Sorry, city nout found.</p> }
        {weatherData && weatherData.main && !cityNotFound && (
            <div className="weather-details__content">
                <div className="weather-details__city">
                    <span>{weatherData.name}</span>
                </div>
                <div className="weather-details__temp">
                    {Math.round(weatherData.main.temp)}
                    <sup>&deg;C</sup>
                </div>
                <div className="weather-details__climate">
                    <p>{weatherData.weather[0].description}</p>
                </div>
            </div>
        )}
     </div>
    )
}

export default App;