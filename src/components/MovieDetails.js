// MovieDetail.js

import React from 'react';
import { Container, Grid, Card, CardContent, CardMedia, Divider, Chip, Typography } from '@mui/material';
import { Rating } from '@mui/material';
import { Star, LocalMovies, Info, EmojiEvents } from '@mui/icons-material';

const MovieDetail = ({ movie }) => {
  if (!movie) {
    return (
      <Container style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Typography variant="h6" color="error">Aucun film trouvé</Typography>
      </Container>
    );
  }

  return (
    <Container 
      maxWidth="ml"
      style={{
        backgroundColor: 'rgba(18, 18, 18, 0.6)',
        color: '#ffffff',
        minHeight: '100vh',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography variant="h3" align="center" style={{ color: '#00A8E8', marginBottom: '20px' }}>
        {movie.Title}
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} sm={5}>
          <Card style={{ backgroundColor: '#1f1f1f', color: '#ffffff', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
            <CardMedia
              component="img"
              alt={movie.Title}
              height="450"
              image={movie.Poster !== "N/A" ? movie.Poster : 'https://via.placeholder.com/300x450'}
              style={{ borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}
            />
            <CardContent>
              <Typography variant="h5" style={{ color: '#00A8E8', fontWeight: 'bold', marginBottom: '10px' }}>
                {movie.Title}
              </Typography>
              <Typography variant="body2" style={{ color: '#b0b0b0' }}>
                Année: {movie.Year}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={7}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12}>
              <Typography variant="h5" style={{ color: '#00A8E8' }}>
                <Info style={{ marginRight: '5px', marginBottom: '-2px' }} />
                Synopsis
              </Typography>
              <Divider style={{ backgroundColor: '#00A8E8', marginBottom: '10px' }} />
              <Typography variant="body1" style={{ marginBottom: '20px' }}>{movie.Plot}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="h5" style={{ color: '#00A8E8' }}>
                <LocalMovies style={{ marginRight: '5px', marginBottom: '-2px' }} />
                Détails
              </Typography>
              <Divider style={{ backgroundColor: '#00A8E8', marginBottom: '10px' }} />
              <Typography variant="body1" style={{ marginBottom: '10px' }}>
                Durée: {movie.Runtime}
              </Typography>
              <Typography variant="body1" style={{ marginBottom: '10px' }}>
                Genre: {movie.Genre}
              </Typography>
              <Typography variant="body1" style={{ marginBottom: '10px' }}>
                Réalisateur: {movie.Director}
              </Typography>
              <Typography variant="body1" style={{ marginBottom: '10px' }}>
                Langue: {movie.Language}
              </Typography>
              <Typography variant="body1" style={{ marginBottom: '20px' }}>
                Pays: {movie.Country}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="h5" style={{ color: '#00A8E8' }}>
                <EmojiEvents style={{ marginRight: '5px', marginBottom: '-2px' }} />
                Récompenses
              </Typography>
              <Divider style={{ backgroundColor: '#00A8E8', marginBottom: '10px' }} />
              <Typography variant="body1" style={{ marginBottom: '20px' }}>{movie.Awards}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h5" style={{ color: '#00A8E8' }}>
                <Star style={{ marginRight: '5px', marginBottom: '-2px' }} />
                Notes
              </Typography>
              <Divider style={{ backgroundColor: '#00A8E8', marginBottom: '10px' }} />
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={6}>
                  <Typography variant="body1">
                    IMDb
                  </Typography>
                  <Rating name="imdb-rating" value={parseFloat(movie.imdbRating)} precision={0.1} readOnly />
                  <Typography variant="body2" style={{ color: '#b0b0b0' }}>
                    {movie.imdbRating} ({movie.imdbVotes})
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body1">
                    Metascore
                  </Typography>
                  <Chip label={movie.Metascore} color="primary" />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MovieDetail;
