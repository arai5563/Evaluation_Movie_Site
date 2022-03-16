import React, { useEffect, useState } from "react";
import axios from "axios";
import { SingleMovieDetails } from "./SingleMovieDetails";
import "../../src/Styles/MoviesDashboard.css"
import { Navbar } from "./Navbar";
const genres = ["Comedy", "Thriller", "Drama", "Documentary", "Children"];

export const MoviesDashboard = () => {

  const [content, setContent] = useState([]);

  const fetchMovies = async () => {

    const { data } = await axios.get("https://movie-fake-server.herokuapp.com/data")
    // console.log('data:', data);
    setContent(data);
  };

  // to get all movies list on component mounts
  useEffect(() => {
    //   dispatch an action to the store 
    fetchMovies();

  }, []);


  //    filter by genre 
  const handleFilter = (e) => {
    // dispach filterby genre action to the store
  }
  return (
    <>

    <div>
      <Navbar/>
    </div>

      <h2>Movies</h2>
      <select onChange={handleFilter}>
        {/* map through the filter  */}
      </select>
      <div className="movies-list">
        {/* map throught th movie list and display the results */}
      </div>


      <div className="movieContainer">
        {
          content && content.map((c) =>
            <SingleMovieDetails
              key= {c.id}
              id= {c.id}
              title= {c.movie_name}
              genre={c.genre}
              rating= {c.rating}
              date = {c.release_date}
              poster={c.image_url}
            />)
        }
      </div>
    </>
  );
};
