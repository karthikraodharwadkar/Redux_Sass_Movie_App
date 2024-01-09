import React from 'react'
import "./ListingCard.scss"
import { useNavigate } from "react-router-dom";

export default function ListingCard({data}) {
    const navigate = useNavigate();
  return (
    <div className="listingcard-container" onClick={()=>navigate(`${data.imdbID}`)}>
        <div className="card-img">
            <img src={data.Poster} alt="data.Title"/>
        </div>
        <div className="card-content">
            <h4>{data.Title}</h4>
            <p>{data.Year}</p>
        </div>
    </div>
  )
}
