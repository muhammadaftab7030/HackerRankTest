import React from "react";
import { combineReducers } from "redux";
import { addmovieReducer } from "./addmovieReducer";
import { searchMovieReducer } from "./searchMovieReducer";
import { searchMovieResultReducer } from "./searchResultReducer";

let rootReducer = combineReducers({
    addmovie: addmovieReducer,
    searchmovie: searchMovieReducer,
    searchmovieresult: searchMovieResultReducer
})

export  {rootReducer}