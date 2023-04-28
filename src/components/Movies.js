import React from "react";
import { movies } from "../data";

function Movies() {

  return <div>
    <h1>Movies Page</h1>
    <div>
      {movies.map((movie)=>{
        console.log(movie)
        return(
          <div key={movie.title}>
           {movie.title}    {movie.time}

           <ul>
            {movie.genres.map((genre)=>{
              console.log(genre)
              return(
                <li key={genre}>{genre}</li>
              )
            })}
            
            
            </ul>  
          </div>
        )


      
        


        
      })}
    </div>


  </div>;
}

export default Movies;
