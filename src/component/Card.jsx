function Card(props){
    return(

      <div className="flex justify-center mt-5">

<div className="card bg-[#6FA8DC] text-black -content w-96">
  <div className="card-body items-center text-center">

    <h2 className="card-title text-2xl">{props.location}</h2>
    <img
      src={props.src}
      className="tranform my-3 w-32 duration-200 hover:scale-105"  />
    
    <h2 className="text-3xl">{props.temperature}°</h2>
    
    <div className="flex flex-col items-center">
    <p className="text-xl">Wind : {props.wind}km</p>
    <p className="text-xl mt-3">Humidity : {props.humidity}%</p>
    
    </div>

    
  </div>
</div>


      </div>

    )
}



export default Card




