import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {api, api_key} from './api/api';
import Form from './components/Form';
import Card from './components/Card';
import { useEffect, useState } from 'react';

function App() {
  const [country, setCountry] = useState("Yangon");
  const [data, setData] = useState({});
  const fetchWeather = async (searchKey=country) => {
    setCountry(searchKey);
    try{
      const fetchData = await api.get(`/weather?q=${country}&appid=${api_key}`);
      setData(fetchData.data);
    }
    catch(error){
      console.log(error);
    }
  }
  useEffect(()=>{
    fetchWeather();
  },[country])
 
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className='shadow-lg bg-light'>
        <Form fetchWeather={fetchWeather}/>
        <Card data={data}/>
      </div>
    </div>
  );
}

export default App;
