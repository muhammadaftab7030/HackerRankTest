export let addMovieData = (data)=>{
    return{
        type: "ADD_MOVIE",
        payload: {...data}
    }
}