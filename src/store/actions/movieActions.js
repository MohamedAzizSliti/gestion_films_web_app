// movieActions.js
import axios from "axios";

const APIKEY ="e23dddb9";

export const FETCH_MOVIES_REQUEST = 'FETCH_MOVIES_REQUEST';
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
export const FETCH_MOVIES_FAILURE = 'FETCH_MOVIES_FAILURE';

export const fetchMoviesRequest = () => ({
  type: FETCH_MOVIES_REQUEST,
});

export const fetchMoviesSuccess = (movies) => ({
  type: FETCH_MOVIES_SUCCESS,
  payload: movies,
});

export const fetchMoviesFailure = (error) => ({
  type: FETCH_MOVIES_FAILURE,
  payload: error,
});

export const fetchMovies = (title) => async (dispatch) => {
  dispatch(fetchMoviesRequest());
  try {
    const response = await axios.get(`http://www.omdbapi.com/?s=${title}&apikey=${APIKEY}`);
    dispatch(fetchMoviesSuccess(response.data.Search));
  } catch (error) {
    dispatch(fetchMoviesFailure(error.message));
  }
};

// Action creator for fetching movie details
export const fetchMovieDetails = (imdbID) => async (dispatch) => {
  dispatch({ type: 'FETCH_MOVIE_DETAILS_REQUEST' });
  try {
    const response = await axios.get(`http://www.omdbapi.com/?apikey=${APIKEY}&i=${imdbID}`);
    dispatch({ type: 'FETCH_MOVIE_DETAILS_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'FETCH_MOVIE_DETAILS_FAILURE', payload: error.message });
  }
};
