//import { home } from 'nodemon/lib/utils';
import React from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import '../geoloc.css';
import {UserAuth} from '../context/authcontext';
import { useNavigate } from 'react-router-dom';

//const API_endpoint = `https://api.openweathermap.org/data/2.5/weather?`;
//const url2 = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=${unit}&appid=${API_key}`;
const API_key = `1e23a94292cdcf6c8fe67047af991aa2`;

function Geolocation() {

    const {user, logout} = UserAuth();
    const navig = useNavigate();

    const [unit, setUnit] = React.useState("metric");
    const [tempunit, setTempUnit] = React.useState("C");
    
    const [data, setData] = React.useState({});
    const [latitude, setLatitude] = React.useState('');
    const [longitude, setLongitude] = React.useState('');

    const url2 = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=${unit}&appid=${API_key}`;

    const handleLogout = async () => {
        try{
            await logout();
            navig('/');
            console.log("You're logged out");
        } catch (e) {
            console.log(e.message);
        }
    }

    React.useEffect( () => {
        navigator.geolocation.getCurrentPosition((position) => {
            setLatitude(position.coords.latitude)
            setLongitude(position.coords.longitude)
            console.log(latitude)
            console.log(longitude)
            console.log("Test")
        })

        search2(url2);
    
    }, [latitude, longitude])

    React.useEffect(() => {
        search2(url2)
    }, [url2])

    function search2(url2) {
        axios.get(url2).then((response) => {
        setData(response.data)
        console.log(response.data)
        })
    }


    const convert = () => {
        if (unit === "metric") {
        setUnit("imperial")
        console.log("yoohoo")
        setTempUnit("F")
        }
        if (unit === "imperial") {
        setUnit("metric")
        console.log("brit")
        console.log("testw")
        setTempUnit("C")
        }
    }

    

    return (
        <div className='app_h'>
            
            <button onClick={handleLogout}> Log Out </button>
               
            
                <div className='container_h'>
                    
                    
                    <div className="top_h">
                    <div className='location_h'>
                        <p>{data.name}</p>
                    </div>
                    <div className='temp_h'>
                        {data.main ? <h1>{data.main.temp}°{tempunit}</h1> : null}
                    </div>
                    <div className='description_h'>
                        {data.weather ? <p>{data.weather[0].main}</p> : null}
                    </div>
                    </div>
                    
                    <div className='buttons_h'>
                    <button onClick={convert}>Switch</button>
                    </div>

                    <div className='bottom_h'>
                    <div className='feels_h'>
                        {data.main ? <p className='bold_h'>{data.main.feels_like}°{tempunit}</p> : null}
                        <p>Feels Like</p>
                    </div>
                    <div className='humidity_h'>
                        {data.main ? <p className='bold_h'>{data.main.humidity}%</p> : null}
                    
                        <p>Humidity</p>
                    </div>
                    <div className='wind_h'>
                        {data.wind ? <p className='bold_h'>{data.wind.speed}MPH</p> : null}
                        <p>Wind Speed</p>
                    </div>
                    </div>
                    
                </div>
            



        </div>
            
    
    );
}

export default Geolocation;