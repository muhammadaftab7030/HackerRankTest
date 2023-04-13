export let searchMovieResultAction = (result)=>{
    return {
        type: "SEARCH_RESULT",
        payload: result
    }
}