import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Container, CircularProgress, Typography } from '@mui/material';
import { fetchMovieDetails } from '../store/actions/movieActions';
import { CSSTransition } from 'react-transition-group';
import './SearchPage.css'; // Import your CSS styles
import MovieDetail from '../components/MovieDetails';

const DetailsPage = () => {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const movie = useSelector(state => state.movie.selectedMovie);
  const loading = useSelector(state => state.movie.loading);
  const error = useSelector(state => state.movie.error);

  useEffect(() => {
    dispatch(fetchMovieDetails(imdbID));
  }, [dispatch, imdbID]);

  if (loading) {
    return (
      <Container style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <CircularProgress />
      </Container>
    );
  }

  if (error) {
    return (
      <Container style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Typography variant="h6" color="error">Erreur: {error}</Typography>
      </Container>
    );
  }

  return (
    <div className="Container-bg">
      <CSSTransition key={imdbID} timeout={500} classNames="fade">
        <MovieDetail movie={movie} />
      </CSSTransition>
    </div>
  );
};

export default DetailsPage;
