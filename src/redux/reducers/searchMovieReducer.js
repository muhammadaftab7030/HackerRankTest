let initial_state = {
    moviename:null
}

export let searchMovieReducer = (state = initial_state, action)=>{
        switch(action.type){
            case 'SEARCH_MOVIE':
                return {
                    ...state,
                    moviename: action.payload
                }

                default: 
                return state
        }
}