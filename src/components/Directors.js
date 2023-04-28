import React from "react";
import { directors } from "../data";

function Directors() {
  return <div>
    <h1>Directors Page</h1>
    <div>
      {directors.map((director)=>{
        console.log(director)
        return(
          <div key={director.name}>
           {director.name}    

           <ul>
            {director.movies.map((movie)=>{
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

export default Directors;
