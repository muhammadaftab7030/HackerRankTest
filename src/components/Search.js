import React from 'react'
import { useDispatch } from 'react-redux'
import { searchMovieAction } from '../redux/Actions/searchMovieAction'

function Search() {
const dispatch = useDispatch()
  return (
    <section className='layout-row justify-content-center mb-40'>
      <input 
        type='text'
        placeholder='Search for movie by name' 
        onChange={(e)=>dispatch(searchMovieAction(e.target.value))}
        className='w-75 py-2'
        data-testid='search'
      />
    </section>
  )
}

export default Search
