export let searchMovieAction = (moviename)=>{
    return {
        type: "SEARCH_MOVIE",
        payload: moviename
    }
}