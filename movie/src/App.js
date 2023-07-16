import logo from './logo.svg';
import './App.css';
//import Display from './disply';
import {useState} from "react"

import { Levelcontext } from './context';
import Display from './disply';

function App() {
  const[search,setsearch]=useState("")
  const[load,setload]=useState()
const[movie,setmovie]=useState([])
const[details,setdetails]=useState([])
  const upatevalue=(e)=>{
    setsearch(e.target.value)
    //if(e.target.value.length>0)
    loadMovie(e.target.value)
  }
  
  const loadMovie= async(value)=>{
const res =await fetch(`https://omdbapi.com/?s=${value}&page=1&apikey=fc1fef96`)
const data=await res.json()
setload(data.Search)
//setmovie(data.Search)
//console.log(data.Search) 
  }
  console.log(load)
  
  
  return (
    <div className = "wrapper">
        
        <div className = "logo">
            <div className = "container">
                <p>Movie<span>Corn.</span></p>
            </div>
        </div>
        <div className = "search-container">
            <div class = "search-element">
                <h3>Search Movie:</h3>
                <input type = "text" className = "form-control" placeholder="Search Movie Title ..." id = "movie-search-box"onChange={upatevalue }  />
                <div className = "search-list" id = "search-list" >
                 { load?
                    load.map((movies,idx)=>{
                      return(  
                        <div className='search-list-item' onClick={()=>{setload("")
                        setmovie(idx)}}> 
                        <div className = "search-item-thumbnail">
                        <img src = {movies.Poster}/>
        </div>                             
        <div className= "search-item-info">
            <h3>{movies.Title}</h3>
            <p>{movies.Year}</p>
        </div>
        </div>
                  )
                    })
                  :null}
                  </div>
            </div>
        </div>
        <Levelcontext.Provider value={{movie,setmovie,details,setdetails}}>
          { details !=[]?
<Display/>:null}
        </Levelcontext.Provider>
        
        </div>
  )}
  
export default App;
