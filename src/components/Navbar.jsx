import React from "react";
import "../../src/Styles/Navbar.css"
import {useNavigate} from 'react-router-dom'



export const Navbar = () => {

  const navigate = useNavigate() ;

    const HomeNavigate = () => {
        navigate("/")
    }

    const AboutNavigate = () => {
        navigate("/about")
    }

    const MoviesNavigate = () => {
      navigate("/movies")
  }
    
  return (
    <div>
     
     <div id="Container_NAvbar">
     <div id="main_nav">
          <div onClick={HomeNavigate} className="hero1"> Home </div>

          <div onClick={AboutNavigate} className="hero1"> About </div>

          <div onClick={MoviesNavigate} className="hero1"> Movies </div>

      </div>
     </div>
    
    </div>

  ) 
};