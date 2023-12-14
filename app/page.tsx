"use client";

import React, { useState } from "react";
import Input from "./componets/Input";
import Current from "./componets/Current";
import WeatherDeatils from "./componets/WeatherDeatils";
import WeekForecast from "./componets/WeekForecast";

const Home = () => {
  const [data,setdata] = useState ({});
  const [location,setLocation] = useState ("")
  const [error, setError] = useState ("")
  
  const url = `http://api.weatherapi.com/v1/forecast.json?key=c70b706044914e7e9ef132635231412&q=${location}&days=7&aqi=yes&alerts=yes`;

  const handleSearch = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key === "Enter"){
      e.preventDefault()
      try{
        const response = await fetch(url)
        if(!response.ok){
          throw new Error()
        }
        const data = await response.json()
        setdata(data)
        setLocation("")
        setError("")
      } catch (error){
        setError("Cidade nao encontrada")
        setdata({})
      }
    }
  };

  let content;
  if (Object.keys(data).length === 0 && error === "")
  {
    content= (
      <div className="text-white text-center h-screen mt-[5rem]">
        <h2 className="text-3xl font-semibold mb-4">Bem-Vindo ao Weather App</h2>
        <p className="text-xl">Entre com o nome da cidade</p>
      </div>
    );
  } else if (error!=""){
    content = (
      <div className="text-white text-center h-screen mt-[5rem]">
        <p className="text-3xl font-semibold mb-4">Cidade não encontrada</p>
        <p className="text-3xl font-semibold mb-4">Entre com uma cidade valida</p>
      </div>
    )
  } else{
    content = (
    <>
      <div className="flex md:flex-row flex-col p-12 items-center justify-between mt-[-4rem] gap-10">
        <Current data={data}/>
        <WeekForecast data={data}/>
      </div>
      <div>
        <WeatherDeatils data={data} />
      </div>
    </>
    )
  }

  return (
    <div className="bg-cover bg-gradient-to-r from-blue-500 to-blue-300 h-fit md:ba">
      <div className="bg-white/25 w-full flex flex-col h-fit">
        <div className="flex flex-col md:flex-row justify-between items-center p-12">
          <Input handleSearch={handleSearch} setLocation={setLocation}/>
          <h1 className="mb-8 md:mb-0 order-1 text-white py-2 px-4 rounded-xl italic font-bold">Weather App</h1>
        </div>
        {content}
      </div>
    </div>
  );
};

export default Home;