import './App.css';
import React, { useState ,useEffect} from "react";
import Filter from "./Filter"
import MovieCard from "./MovieCard";
import MovieList from "./MovieList";


function App(){

  const obj = [
    {id:1  ,title:"SuperMan",desc:"oeuaiofozefzo",posteUrl:"Film1",rate:"1"},
    {id:2  ,title:"Joker",desc:"sdfsdfsfs",posteUrl:"Film2",rate:"2"  },
    { id:3  ,title:"Death note",desc:"oqsdqdsq",posteUrl:"Film3",rate:"3" },
    { id:4  ,title:"Bird Box",desc:"iopppmm",posteUrl:"Film4",rate:"4"}]
    const [movies, SetMovies] = useState(obj);
    const [input, setInput] = useState("");
   const [newMovie,setNewMovie]=useState({});
    
  
  useEffect(() => {
    console.log(movies);
  
        console.log("refresh")

        SetMovies (obj.filter(p =>  p.rate.includes(input)||p.title.includes(input)));


      



  }, [input])
  
// useEffect(() => {
//   return () => {
//   }
// }, [movies])
const submitHandler = (e) =>{e.preventDefault();
 let a = [...movies, newMovie];
 SetMovies(a);
 setNewMovie({id:"",title:"" ,desc:"",posterUrl:"",rate:""});
}
const deleteHandler= (id) => {
const deleteMovie=movies.filter(m=>m.id!==id) //function delete
console.log(deleteMovie)
console.log(id)

SetMovies(deleteMovie)
}

  return (
    <div className="container mt-5">

     {/* send send a function to filter compoments */}
     <Filter updateInput={setInput}/>
     <form onSubmit={ submitHandler} className="d-flex justify-content-between mt-2">
       <input type="Number"placeholder="id" value={newMovie.id} onChange={(e)=> {setNewMovie({...newMovie,id:e.target.value})}}/> 
       <input type="text" placeholder="title" value={newMovie.title} onChange={(e)=> {setNewMovie({...newMovie,title:e.target.value})}}/> 
       <input  type="text"placeholder="description" value={newMovie.desc}onChange={(e)=> {setNewMovie({...newMovie,desc:e.target.value})}}/>
       <input  type="text"placeholder="url"  value={newMovie.posteUrl} onChange={(e)=> {setNewMovie({...newMovie,posteUrl:e.target.value})}}/>
       <input  type="text"placeholder="rate"  value={newMovie.rate} onChange={(e)=> {setNewMovie({...newMovie,rate:e.target.value})}}/> 
      <button className="btn-outline-success" >add movie</button>
      



     </form>
      {/* send movielist to movie list components */}
      <MovieList movies={movies} deleteM={deleteHandler}/> 
      {/*  deleteM send function to movielist component*/}
       
    </div>
  );
  
  }


export default App