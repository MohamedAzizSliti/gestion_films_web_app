import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

const MovieCard = ({ movie }) => {
  const altText = movie.Poster !== "N/A" ? movie.Title : "No Poster Available";

  return (
    <Card
      style={{
        backgroundColor: '#1f1f1f',
        color: '#ffffff',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        borderRadius: '10px',
        transition: 'transform 0.2s',
        '&:hover': {
          transform: 'scale(1.05)',
        },
      }}
      data-testid="movie-card"
    >
      <CardMedia
        component="img"
        alt={altText}
        height="450"
        image={movie.Poster !== "N/A" ? movie.Poster : 'https://via.placeholder.com/300x450'}
        style={{
          borderTopLeftRadius: '10px',
          borderTopRightRadius: '10px',
        }}
      />
      <CardContent>
        <Typography
          variant="h5"
          component="div"
          style={{ color: '#00A8E8', fontWeight: 'bold', marginBottom: '10px' }}
        >
          {movie.Title}
        </Typography>
        <Typography variant="body2" style={{ color: '#b0b0b0' }}>
          {movie.Year}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
