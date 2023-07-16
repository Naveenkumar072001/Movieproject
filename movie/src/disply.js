import { useContext, useEffect, useState } from "react"
import { Levelcontext } from "./context";


function Display(){

const{movie,setmovie,details,setdetails}=useContext(Levelcontext)
    
console.log(movie)
    useEffect(()=>{
        getdetails()
    },[])
    const getdetails= async()=>{
        const result = await fetch(`http://www.omdbapi.com/?i=${movie}&apikey=fc1fef96`);
        const movieDetails = await result.json();
        setdetails(movieDetails)
        console.log(movieDetails)
    }
    return(
        
        <div className = "container">
            <div className = "result-container">
                <div className = "result-grid" id = "result-grid">
                    
                <div className = "movie-poster">
        <img src = { details.Poster}  alt = "movie poster"/>
    </div> 
    <div className = "movie-info">
        <h3 className = "movie-title">{details.Title}</h3>
        <ul className = "movie-misc-info">
            <li className = "year">Year: {details.Year}</li>
            <li className = "rated">Ratings: {details.Rated}</li>
            <li className = "released">Released: {details.Released}</li>
        </ul>
        <p className = "genre"><b>Genre:</b> {details.Genre}</p>
        <p className = "writer"><b>Writer:</b> {details.Writer}</p>
        <p className = "actors"><b>Actors: </b>{details.Actors}</p>
        <p className = "plot"><b>Plot:</b> {details.Plot}</p>
        <p className = "language"><b>Language:</b> {details.Language}</p>
        <p className = "awards"><b><i class = "fas fa-award"></i></b> {details.Awards}</p>
    </div>
                </div>
                </div>
                </div>
    )
}
export default Display;