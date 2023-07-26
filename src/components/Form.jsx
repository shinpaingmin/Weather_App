import React, { useState } from "react";

const Form = ({fetchWeather}) => {
  const [searchKey, setSearchKey] = useState('');
  const fetchWeatherHandler = () => {
    fetchWeather(searchKey);
    setSearchKey('');
  }
  return (
    <div className="d-flex mt-4">
      <input
        type="text"
        value={searchKey}
        onChange={(e)=>setSearchKey(e.target.value)}
        className="form-control ms-5"
        placeholder="Enter country..."
      />
      <input
        type="button"
        onClick={()=>fetchWeatherHandler()}
        className="ms-2 me-5 btn btn-dark text-white"
        value="Search"
      />
    </div>
  );
};

export default Form;
