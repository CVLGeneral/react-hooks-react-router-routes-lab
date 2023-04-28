import React from "react";
import { actors } from "../data";

function Actors() {
  return <div>
    <h1>Actors Page</h1>
    <div>
      {actors.map((actor)=>{
        console.log(actor)
        return(
          <div key={actor.name}>
           {actor.name}  

           <ul>
            {actor.movies.map((movie)=>{
              console.log(movie)
              return(
                <li key={movie}>{movie}</li>
              )
            })}
            
            
            </ul>  
          </div>
        )


      
        


        
      })}
    </div>

  </div>;
}

export default Actors;
