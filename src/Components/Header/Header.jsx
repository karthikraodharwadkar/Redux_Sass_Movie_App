import React,{useState} from 'react'
import "./Header.scss"
import { FaRegUserCircle } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import {searchInputValue} from "../../Redux/Slice/inputSlice"
import { useNavigate } from "react-router-dom";

export default function Header() {
   const dispatch = useDispatch()
   const navigate = useNavigate()

  const [inputValue,setInputvalue]=useState("")

  const handleClick =() => {
    dispatch(searchInputValue(inputValue))
  }

  return (
    <div className='header-container'>
        <div className='header-logo' onClick={()=>navigate("/")}>
            <h3>Movie App</h3>
        </div>
        <div className="searchBar">
          <input type="text" 
          value={inputValue} 
          onChange={(e)=>setInputvalue(e.target.value)} 
          placeholder="Search for Movie Title"/>

          <button onClick={handleClick}>Search</button>
        </div>
        <div className='header-user-img'>
            <FaRegUserCircle className="user-img"/>
        </div>
    </div>
  )
}
