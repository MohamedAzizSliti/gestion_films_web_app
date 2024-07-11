// movieReducer.js
import {
    FETCH_MOVIES_REQUEST,
    FETCH_MOVIES_SUCCESS,
    FETCH_MOVIES_FAILURE,
  } from '../actions/movieActions';
  
  const initialState = {
    loading: false,
    movies: [],
    selectedMovie: null, // Assuming you want to store details of a single selected movie
    error: '',
  };
  
  const movieReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_MOVIES_REQUEST:
        return {
          ...state,
          loading: true,
          error: '',
        };
      case FETCH_MOVIES_SUCCESS:
        return {
          ...state,
          loading: false,
          movies: action.payload,
          error: '',
        };
      case FETCH_MOVIES_FAILURE:
        return {
          ...state,
          loading: false,
          movies: [],
          error: action.payload,
        };
      case 'FETCH_MOVIE_DETAILS_REQUEST':
        return {
          ...state,
          loading: true,
          error: '',
        };
      case 'FETCH_MOVIE_DETAILS_SUCCESS':
        return {
          ...state,
          loading: false,
          selectedMovie: action.payload,
          error: '',
        };
      case 'FETCH_MOVIE_DETAILS_FAILURE':
        return {
          ...state,
          loading: false,
          selectedMovie: null,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default movieReducer;
  