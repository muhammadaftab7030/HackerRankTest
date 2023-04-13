let initial_state = {
    result: true
}

export let searchMovieResultReducer = (state = initial_state, action)=>{
        switch(action.type){
            case 'SEARCH_RESULT':
                  
                return {
                    ...state,
                    result: action.payload
                }

                default: 
                return state
        }
}