import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addMovieData } from '../redux/Actions/addMovieAction'
function Movieform() {
  const [movieData, setMovieData] = useState({
    moviename: '',
    ratings: '',
    duration: ''
  })
  const [valid,setValid]= useState(false)
  const dispatch = useDispatch()
  let ChangeEventHandler = (e)=>{
    let {name,value} = e.target
    setMovieData({...movieData, [name] : value});
}
let SubmitMovieData = ()=>{ 
  const pattern = /^(\d+(\.\d+)?|\.\d+)(h|m)?$/i;
    const match = movieData.duration.match(pattern);
    if (match) {
      const unit = match[3] ? match[3].charAt(0).toLowerCase() : "";
      if(unit === ""){
        setValid(true)
      }else{
        let filteredDuration = parseInt(movieData.duration)
        if(filteredDuration>60){
          const hours = Math.floor(filteredDuration / 60);
          const minutes = filteredDuration % 60;
          let newDuration = `${hours}.${minutes}h`
          const updatedMovieData = { ...movieData, duration: newDuration };
          dispatch(addMovieData(updatedMovieData));
      } else {
        dispatch(addMovieData(movieData));
      }
        
        setMovieData({
          moviename: '',
          ratings: '',
          duration: ''
        })
        setValid(false)
      }
    } else {
      setValid(true)
    }
}
  return (
    <section>
      <div className='card pa-30'>
        <form onSubmit={ e => e.preventDefault() }>
          <div className='layout-column mb-15'>
            <label htmlFor='name' className='mb-3'>Movie Name</label>
            <input 
              type='text' 
              id='name'
              name='moviename'
              placeholder='Enter Movie Name'
              value={movieData.moviename}
              onChange={ChangeEventHandler}
              data-testid='nameInput'
            />
          </div>
          <div className='layout-column mb-15'>
            <label htmlFor='ratings' className='mb-3'>Ratings</label>
            <input 
              type='number' 
              id='ratings'
              onChange={ChangeEventHandler}
              value={movieData.ratings}
              name='ratings'
              placeholder='Enter Rating on a scale of 1 to 100'
              data-testid='ratingsInput'
            />
          </div>
          <div className='layout-column mb-30'>
            <label htmlFor='duration' className='mb-3'>Duration</label>
            <input 
              type='text' 
              id='duration'
              name='duration'
              value={movieData.duration}
              onChange={ChangeEventHandler}
              placeholder='Enter duration in hours or minutes'
              data-testid='durationInput'
            />
          </div>
          {/* Use this div when time format is invalid */}
          {
            valid ? <div 
            className='alert error mb-30'
            data-testid='alert'
          >
            Please specify time in hours or minutes (e.g. 2.5h or 150m)
          </div>: null
          }
          
          <div className='layout-row justify-content-end'>
            <button 
              type='submit'
              className='mx-0'
              onClick={SubmitMovieData}
              data-testid='addButton'
            >
              Add Movie
            </button>
          </div>
          </form>
      </div> 
    </section>
  )
}

export default Movieform
