import React,{useEffect} from 'react'
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import { useParams } from 'react-router-dom';
import {addMovieDetailList} from "../../Redux/Slice/movielist"
import { useDispatch,useSelector } from 'react-redux'
import axios from "axios"
import { FaStar } from "react-icons/fa6";
import { IoIosThumbsUp } from "react-icons/io";
import { MdLocalMovies } from "react-icons/md";
import { FaCalendar } from "react-icons/fa";
import "./MovieDetail.scss"

export default function MovieDetail() {
    const {imdbID} = useParams();

    const dispatch = useDispatch()
    
    const movieDetailData = useSelector((state)=>state.movie.movieDetailList[0])

    //console.log(movieDetailData,"movieDetailData")    

    const fetchMovieDetails = async() =>{
        let response = await axios.get(`https://www.omdbapi.com/?apikey=8510e4ac&i=${imdbID}&plot=full`)
        dispatch(addMovieDetailList(response.data))
    }

    useEffect(()=>{
        fetchMovieDetails()

        return ()=>{
            fetchMovieDetails()
        }

    },[imdbID])

  return (
    <div>
        <Header/>
        <div className="movie-detail-container">
            <div className="detail-left-section">
                <div className="movie-header">
                    <p>{movieDetailData?.Title}</p>
                </div>
                <div className="movie-stats">
                    <span>IMDB Rating<FaStar className="rating-star"/>: {movieDetailData?.imdbRating}</span>
                    <span>IMDB Votes<IoIosThumbsUp className="rating-vote"/>: {movieDetailData?.imdbVotes}</span>
                    <span>Runtime<MdLocalMovies className="video-time"/>: {movieDetailData?.Runtime}</span>
                    <span>Year<FaCalendar className="year"/>: {movieDetailData?.Year}</span>
                </div>
                <div className="movie-desc">
                    <p>{movieDetailData?.Plot}</p>
                </div>
                <div className="movie-info">
                   <div>
                    <span className="movie-i">Director</span>
                    <span>{movieDetailData?.Director}</span>
                   </div>

                   <div>
                    <span className="movie-i">Stars</span>
                    <span>{movieDetailData?.Actors}</span>
                   </div>

                   <div>
                    <span className="movie-i">Generes</span>
                    <span>{movieDetailData?.Genre}</span>
                   </div>

                   <div>
                    <span className="movie-i">Languages</span>
                    <span>{movieDetailData?.Language}</span>
                   </div>

                   <div>
                    <span className="movie-i">Awards</span>
                    <span>{movieDetailData?.Awards}</span>
                   </div>

                </div>
            </div>
            <div className="detail-right-section">
                <img src={movieDetailData?.Poster} alt={movieDetailData?.Title}/>
            </div>
        </div>
        <Footer/>
    </div>
  )
}
