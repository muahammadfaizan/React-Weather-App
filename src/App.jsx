import axios from "axios"
import { useEffect, useRef, useState } from "react"
import Card from "./component/Card"

function App(){

  const [weatherArr , setWeatherArr] = useState([])
  
  const [city , setCity] = useState("")
  const inputVal  = useRef()


  useEffect(()=>{
   const getData = async ()=>{

   await axios(`https://api.weatherapi.com/v1/current.json?key=8ef41b56b9ea40aa9d7155732241206&q=${city}&aqi=no`)
    
   .then(res => res.data)
  .then(res => {
      setWeatherArr((previousVal) => [res, ...previousVal])
      console.log(res);
      
    })
    .catch((err)=>{
      console.log(err);
    })
   }

   getData()

  } , [city])


  const getWeather = (event)=>{
    event.preventDefault();

    if(!inputVal.current.value){
      alert("Enter city")
    }else{
      setCity(inputVal.current.value)
      // setWeatherArr([...weatherArr])
      inputVal.current.value = ""
      console.log(setCity);
      

    }

  }


  return(
    <>
    <h1 className="text-center mt-[3rem] text-3xl">Weather App</h1>
    <form onSubmit={getWeather} className="text-center mt-5">
    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" ref={inputVal} />
    <button type="submit" className="btn btn-primary mx-3 mt-3">Search</button>
    </form>

    
    <div className='my-10'>
        {weatherArr.length > 0 ? weatherArr.map((item,index)=>{
          
          return (
            <Card 
              // time={finalTime} 
              // icon={`https:${item.current.condition.icon}`} 
              src = {`https:${item.current.condition.icon}`}
              temperature={item.current.temp_c} 
              location={item.location.name} 
              key={index} 
              wind={item.current.wind_kph}
              humidity={item.current.humidity}
              
    />
          )
        }): <p className='text-center text-3xl'>No found!</p>}
      </div>


   
    </>
  )
}


export default App


















// import axios from "axios";
// import { useEffect, useRef, useState } from "react";
// import Card from "./component/Card";

// function App() {
//   const [weatherArr, setWeatherArr] = useState([]);
//   const [city, setCity] = useState("");
//   const inputVal = useRef();

//   const getData = async (city) => {
//     try {
//       const response = await axios(`https://api.weatherapi.com/v1/current.json?key=8ef41b56b9ea40aa9d7155732241206&q=${city}&aqi=no`);
//       setWeatherArr((prevArr) => [response.data, ...prevArr]);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const getWeather = (event) => {
//     event.preventDefault();
//     const cityName = inputVal.current.value.trim();
//     if (!cityName) {
//       alert("Enter city");
//     } else {
//       setCity(cityName); // Update the city state
//       inputVal.current.value = "";
//     }
//   };

//   useEffect(() => {
//     if (city) {
//       getData(city);
//     }
//   }, [city]);

//   return (
//     <>
//       <h1 className="text-center mt-5 text-3xl">Weather App</h1>
//       <form onSubmit={getWeather} className="text-center mt-5">
//         <input
//           type="text"
//           placeholder="Type here"
//           className="input input-bordered w-full max-w-xs"
//           ref={inputVal}
//         />
//         <button type="submit" className="btn btn-primary mx-3">
//           Search
//         </button>
//       </form>

//       <div className='my-10'>
//         {weatherArr.length > 0 ? (
//           weatherArr.map((item, index) => (
//             <Card
//               temperature={item.current.temp_c}
//               location={item.location.name}
//               key={index}
//               wind={item.current.wind_kph}
//               humidity={item.current.humidity}
//             />
//           ))
//         ) : (
//           <p className='text-center'>No weather data found!</p>
//         )}
//       </div>
//     </>
//   );
// }

// export default App;
