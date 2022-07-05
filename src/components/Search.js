import React, {useState, useEffect} from 'react';
import axios from 'axios';
import '../search.css';

function Search() {
    const [data,setData] = useState({});
    const [location, setLocation] = useState('');
    const [unit, setUnit] = useState("metric");
    const [tempunit, setTempUnit] = useState("C");

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=${unit}&appid=1e23a94292cdcf6c8fe67047af991aa2`;
    
    useEffect(() => {
        search(url)
    }, [url])

    function search(url) {
        axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
        })
    }

    function searchLocation(event) {
        if (event.key === 'Enter') {
        search(url)
        }
    }

    const convert = () => {
        if (unit === "metric") {
        setUnit("imperial")
        setTempUnit("F")
        }
        if (unit === "imperial") {
        setUnit("metric")
        setTempUnit("C")
        }
    }
    

    return (
        <div className="app">
        <div className='search'>
            <input
            value={location}
            onChange={
            event => setLocation(event.target.value)
            }
            onKeyPress={searchLocation}    
            placeholder='Enter Location'
            type="text" />
        </div>
        
        <div className="container">
            <div className="top">
            <div className='location'>
                <p>{data.name}</p>
            </div>
            <div className='temp'>
                {data.main ? <h1>{data.main.temp}°{tempunit}</h1> : null}
            </div>
            <div className='description'>
                {data.weather ? <p>{data.weather[0].main}</p> : null}
            </div>
            </div>
            
            <div className='buttons'>
            <button onClick={convert}>Switch</button>
            </div>

            <div className='bottom'>
            <div className='feels'>
                {data.main ? <p className='bold'>{data.main.feels_like}°{tempunit}</p> : null}
                <p>Feels Like</p>
            </div>
            <div className='humidity'>
                {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
            
                <p>Humidity</p>
            </div>
            <div className='wind'>
                {data.wind ? <p className='bold'>{data.wind.speed}MPH</p> : null}
                <p>Wind Speed</p>
            </div>
            </div>
        </div>
        </div>
    );
}

export default Search;