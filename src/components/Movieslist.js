import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { searchMovieResultAction } from '../redux/Actions/searchResult';

function Movieslist() {
  const addmovieReducer = useSelector((state)=> state.addmovie)
  const searchMovieReducer = useSelector((state)=> state.searchmovie)
  let movieData = addmovieReducer.movieData;
  let searchMovie = searchMovieReducer;
  const dispatch = useDispatch()
  const [movieList, setMovieList] = useState([])
  const [saveMovieList, setSaveMovieList]= useState([])
  useEffect(() => {
    if (movieData.moviename != null) {
      setMovieList((prevData) => {
        return [...prevData, movieData];
      });
        setSaveMovieList((prevData)=>{
          return [...prevData, movieData]
        })
    }
  }, [movieData]);
  useEffect(() => {
    let flag;
    if (searchMovie.moviename !== null ) {
      const filteredMovies = movieList.filter((movie) => {
        return movie.moviename.toLowerCase().includes(searchMovie.moviename.toLowerCase())
      });
      setMovieList(filteredMovies);
      if(filteredMovies.length === 0){
        flag = false
        dispatch(searchMovieResultAction(flag))
      }
      
      if(searchMovie.moviename === ""){
        setMovieList(saveMovieList)
        flag = true
        dispatch(searchMovieResultAction(flag))
      }
    }
  }, [searchMovie]);
  // convert duration to minutes and sort movies by duration in descending order
  const sortedMovies = movieList.map((movie) => {
    let durationInMinutes;
    if (movie.duration.includes("h")) {
      durationInMinutes = parseFloat(movie.duration).toFixed(2) * 60;
    } else if (movie.duration.includes("m")) {
      durationInMinutes = parseInt(movie.duration);
    }
    
    return { ...movie, duration: durationInMinutes };
  }).sort((a, b) => b.duration - a.duration);

  // convert duration in minutes back to original format
  const formatDuration = (durationInMinutes) => {
    if (durationInMinutes < 60) {
      return durationInMinutes + "m";
    } else {
      const hours = Math.floor(durationInMinutes / 60);
      const minutes = durationInMinutes % 60;
      if (minutes === 0) {
        return hours + "h";
      } else {
        return hours + "." + (minutes / 10).toFixed(2).slice(2) + "h";
      }
    }
  };
  return (
    <section>
      <ul 
        className='styled w-100 pl-0' 
        data-testid='moviesList'
      >
      {
        sortedMovies.map((currentElem, key)=>{
          return(
            <li 
            key={key}
        className='flex slide-up-fade-in justify-content-between'
        style={{borderBottom: '2px solid var(--primary-color)'}}
       >
        <div  className='layout-column w-40'>
          {/* use this header for movie name */}
          <h3 className='my-3'>{currentElem.moviename}</h3>
          {/* use this paragraph for movie ratings, for example: 'Ratings: 88/100' */}
          <p className='my-0'>Ratings: {currentElem.ratings}/100</p>
        </div>
        <div className='layout-row my-auto mr-20'>
          {/* use this paragraph for movie duration, for example: '2.5 Hrs' */}
          <p className='justify-content-end'>Movie Duration: {formatDuration(currentElem.duration)}</p>
        </div>
      </li>
          )
        })
      }
      
      </ul>
    </section>
  )
}

export default Movieslist;
