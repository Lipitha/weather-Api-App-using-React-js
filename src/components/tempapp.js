import React, { useEffect, useState } from 'react';

const TempApp = () =>{
    const [city, setCity] = useState();
    const [search, setSearch] = useState('pune');
    console.log(city);
    useEffect ( () =>{
        const fetchApi= async () =>{
            console.log(search);
            
            const url =`https://api.openweathermap.org/data/2.5/weather?q=${search}&APPID=8f5334b85267957cd037d29f5f50aca8`;
            const respose = await fetch(url);
            const resjson = await respose.json();
            setCity(resjson.main);
        }
        fetchApi();
    },[search])
    return(
        <>
        <div className='box'>
            <div className='inputData'>
                <input type='search' className='inputField' value ={search} onChange={(event)=>{setSearch(event.target.value)}}></input>
            </div>
            {
                !city ? <p className='errormsg'>city not found</p> :
            <div>
            <div className='info'>
                <h2 className='location'>
                    <i className='fa-solid fa-street-view'></i>{search}
                </h2>
                <h1 className='temp'>{city.temp}`cel</h1>
                <h3 className='tempmin-max'>{(city.temp_min-273.15).toFixed(2)}`cel / {(city.temp_max-273.15).toFixed(2)}`cel</h3>
            </div>
            <div className='wave1'></div>
            <div className='wave2'></div>
            <div className='wave3'></div>
            </div>
}
        </div>
        </>
    )
}
export default TempApp;