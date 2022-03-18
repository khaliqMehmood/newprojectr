import React, { useEffect } from 'react'
import Movilisting from "../Movielisting/Movielisting.js"
import MovieApi from "../../Common/apis/MovieApi"
import {APIKEY }from "../../Common/apis/MovieApiKey.js"
const Home = () => {
  useEffect(()=>{
    const movietext="harry";
    const fetchMovies= async()=>{
      const response= await MovieApi.get(`?s=${movietext}&apiKey=${APIKEY}&type=movie`)
      .catch((err)=>{
        console.log("Error:", err)
      });
      console.log("This is a response from Api",response);
    };
    fetchMovies()
  },[]);
  return (
    <div>
    <div className="banner-img">
    <Movilisting/>
    </div>
  </div>
    )
}
export default Home;