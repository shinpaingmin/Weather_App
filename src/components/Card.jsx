import React, { useEffect, useState } from 'react'
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';

const Card = ({data}) => {
    const [value, setValue] = useState(new Date());
    useEffect(()=>{
        const interval = setInterval(()=>{
            setValue(new Date());
        }, 1000)
        return ()=>clearInterval(interval);
    },[])

  if(JSON.stringify(data) !== "{}") {
    return (
      <div className='d-flex flex-column align-items-center mt-3 gap-2'>
          <Clock value={ value }/>
          <h3>{data.name}, {data.sys.country}</h3>
          <h1>{((data.main.temp-32)*5/9).toFixed(2)} °C</h1>
          <p>{data.weather[0].main}</p>
          <p>Humidity: {data.main.humidity} %</p>
          <p>Visibility: {data.visibility/1000} km</p>
      </div>
    )
  } 
  else {
    return (
      <h1 className='text-center'>Loading...</h1>
    )
  }
}

export default Card