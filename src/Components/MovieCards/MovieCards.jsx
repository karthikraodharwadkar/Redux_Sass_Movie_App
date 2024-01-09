import React,{useEffect} from 'react'
import axios from "axios"
import { useDispatch,useSelector } from 'react-redux'
import {addMovies} from "../../Redux/Slice/movielist"
import {addSeries} from "../../Redux/Slice/seriesSlice"
import ListingCard from "../ListingCard/ListingCard"
import Slider from "react-slick"
import "./MovieCards.scss"

export default function MovieCards() {

  const dispatch = useDispatch()

  const moviesData = useSelector((state)=>state.movie.list[0])

  let displayMovieData = "";

  displayMovieData = moviesData?.map((item,index)=>(<ListingCard data={item} key={index}/>))

  const seriesData = useSelector((state)=>state.series.value[0])

  //console.log(seriesData,"seriesData")
  
  const searchMovie = useSelector((state)=>state.searchValue.value[0])

 // console.log(moviesData,"data")

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

    const fetchMovieData = async()=>{
      try{
        let response = await axios.get(`https://www.omdbapi.com/?apikey=8510e4ac&s=${searchMovie?.length===0 || searchMovie?.length===undefined ?"Harry" :`${searchMovie}`}&type=movie`)
        dispatch(addMovies(response?.data?.Search))
      }
      catch(error){
        alert(error)
      }  
    }

    const fetchSeriesData = async() =>{
        try{
          let response = await axios.get(`https://www.omdbapi.com/?apikey=8510e4ac&s=${searchMovie?.length===0 || searchMovie?.length===undefined ?"Friends" :`${searchMovie}`}&type=series`)
          dispatch(addSeries(response?.data?.Search))
        }
        catch(error){
          alert(error)
        }
    }


    useEffect(()=>{
        fetchMovieData()
        fetchSeriesData()
        
    },[searchMovie])

  return (
    <div >
      <div className="moviecards-main-container">
        <h4 className="card-header">Movies</h4>
        <div className="moviecards-container">
          <Slider {...settings}>
            {displayMovieData}
          </Slider>
        </div>
        </div>

        <div className="seriescards-main-container">
        <h4 className="card-header">Series</h4>
        <div className="seriescards-container">
          <Slider {...settings}>
            {seriesData?.length===0 || seriesData?.length===undefined ? <h4></h4>:seriesData?.map((item,index)=>{
            return(
            <>
            <ListingCard data={item} key={index}/>
            </>
          )
        })
        }
        </Slider>
        </div>
        </div>

    </div>
  )
}
