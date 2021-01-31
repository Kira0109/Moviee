import React from 'react'
import MovieCard from "./MovieCard";

function MovieList(props){
    console.log(props.obj)
    return (
      <div className="row mt-5">
         {props.movies.map((m,index)=>{
            return(
              <div className="col-4" key={m.id}>
                <MovieCard movie={m} delete={props.deleteM} /> 
                {/* send delete fuction to moviecard */}
              </div>
            );
        })} 

      </div>
    );

}


export default MovieList;