import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Typography, Grid, CircularProgress } from '@mui/material';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Link } from 'react-router-dom'; // Import Link from React Router
import SearchBar from '../components/SearchBar';
import { fetchMovies } from '../store/actions/movieActions';
import MovieCard from '../components/MovieCard';
import './SearchPage.css'; // Import your CSS styles

const SearchPage = () => {
  const dispatch = useDispatch();
  const movies = useSelector(state => state.movie.movies);
  const loading = useSelector(state => state.movie.loading);
  const error = useSelector(state => state.movie.error);

  const handleSearch = (title) => {
    dispatch(fetchMovies(title));
  };

  return (
    <div className="Container-bg">
      <Container 
        maxWidth={false}
        style={{
          backgroundColor: 'rgba(18, 18, 18, 0.6)', // Fallback background color with opacity
          color: '#ffffff',
          minHeight: '100vh',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h2" align="center" style={{ color: '#00A8E8', marginBottom: '20px' }}>
          Recherche de Films
        </Typography>
        <SearchBar onSearch={handleSearch} />
        {loading && <CircularProgress style={{ display: 'block', margin: '20px auto' }} />}
        {error && <Typography variant="h6" color="error" align="center">Erreur: {error}</Typography>}
        <TransitionGroup component={Grid} container spacing={3} style={{ marginTop: '20px' }}>
          {movies && movies.map(movie => (
            <CSSTransition key={movie.imdbID} timeout={500} classNames="fade">
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <Link to={`/movie/${movie.imdbID}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <MovieCard movie={movie} />
                </Link>
              </Grid>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </Container>
    </div>
  );
};

export default SearchPage;
