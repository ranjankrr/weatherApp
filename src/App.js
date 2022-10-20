import React, {useState } from 'react';
import './App.css';
const App =()=>{
  const [city, setCity] = useState('')
  const [apidata, setApidata] = useState({
    name:"",
    temp:0,
    temp_min:0,
    temp_max:0,
    humidity:0,
    country:"",
    main:"",
    icon:""
   })
  const handleButton =async()=>{
       const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=1189c4aa0a7cfef0110cd5e5a52760a9`);
       const data =await res.json()
       setApidata({
        name:data.name,
        temp:data.main.temp,
        temp_min:data.main.temp_min,
        temp_max:data.main.temp_max,
        humidity:data.main.humidity,
        country:data.sys.country,
        main:data.weather[0].main,
        icon:data.weather[0].icon
       })
       console.log(data);
       setCity('');
      }
  return(
    <div className='weather'>
       <div className='weather-box'>
       <h4 className='text-center text-light pt-3'>Weather App</h4>
       <input type="text" onChange={(e)=>setCity(e.target.value)} value={city} placeholder="Please Enter Your City Name..."/>
       <button onClick={handleButton}>Go</button>
           <div className='temp-name'>
                <div className='text-light mx-2'>
                    <div>{`Humidity :${apidata.humidity}`}</div>
                    <div>{`Country :${apidata.country}`}</div>
                </div>
                <div>
                    <h4 className='text-center text-light'>{`${apidata.name}`}</h4>
                    <div className='text-center text-light temp'>{`${apidata.temp}`}</div>
                </div> 
            </div> 
             <div className='min-max'>
                 <div>{`Temp-Min : ${apidata.temp_min}`}</div>
                 <div>{`Temp-Max : ${apidata.temp_max}`}</div>
             </div>
             <div className='text-center text-light'>{apidata.main} Sky</div>
             
             
             
      </div>
    </div>
  )
}
export default App;