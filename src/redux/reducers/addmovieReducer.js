let initial_state = {
    movieData:{}
}

export let addmovieReducer = (state = initial_state, action)=>{
        switch(action.type){
            case 'ADD_MOVIE':
                return {
                    ...state,
                    movieData: action.payload
                }

                default: 
                return state
        }
}