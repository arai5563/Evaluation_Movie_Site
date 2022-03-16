import "../../src/Styles/SingleMovie.css";


export const SingleMovieDetails = ({id,title,genre,rating,date,poster}) => {


    // make a request to get the details
  return <>
       <div className="comp_div">
         <div><img src= {poster} alt="" /></div>
         <div>
          <h4>{title}</h4>
          
         </div>
         <div className="btm_rating">
           <div id="rate"> <p>Rating -{rating}</p>
           </div>
           <div><p>{genre}</p></div>
         </div>
       </div>
  </>;
};
