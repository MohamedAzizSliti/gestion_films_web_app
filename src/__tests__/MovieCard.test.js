import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import MovieCard from '../components/MovieCard';

// Example movie data with and without a poster
const movieWithPoster = {
  Title: 'The Shawshank Redemption',
  Year: '1994',
  Poster: 'https://example.com/poster.jpg',
};

const movieWithoutPoster = {
  Title: 'The Godfather',
  Year: '1972',
  Poster: 'N/A',
};

describe('MovieCard component', () => {
  // Test for movie with a poster
  test('renders correctly with a movie that has a poster', () => {
    const { getByText, getByAltText } = render(<MovieCard movie={movieWithPoster} />);

    // Check for movie title
    expect(getByText(movieWithPoster.Title)).toBeInTheDocument();

    // Check for movie year
    expect(getByText(movieWithPoster.Year)).toBeInTheDocument();

    // Check for image with correct alt text
    expect(getByAltText(movieWithPoster.Title)).toBeInTheDocument();
  });

  // Test for movie without a poster
  test('renders correctly with a movie that does not have a poster', () => {
    const { getByText, getByAltText } = render(<MovieCard movie={movieWithoutPoster} />);

    // Check for movie title
    expect(getByText(movieWithoutPoster.Title)).toBeInTheDocument();

    // Check for movie year
    expect(getByText(movieWithoutPoster.Year)).toBeInTheDocument();

    // Check for placeholder image with correct alt text
    expect(getByAltText('No Poster Available')).toBeInTheDocument(); // Assuming 'No Poster Available' is used as alt text for movies without a poster
  });

  // Optional test for hover effect (add data-testid if needed)
// Test for hover effect
test('applies hover effect on card (optional)', () => {
    const { getByTestId } = render(<MovieCard movie={movieWithPoster} />);
    const card = getByTestId('movie-card'); // Assuming you have a data-testid on the card element
  
    // Check initial transform (should start as none or default)
    expect(card.style.transform).toBe('none');
  
    // Simulate hover event
    fireEvent.mouseEnter(card);
  
    // Check transform on hover (should match the expected hover effect, e.g., scale(1.05))
    expect(card.style.transform).toMatch(/scale\(1\.05\)/); // Adjust as per your exact implementation
  
    // Additional checks if needed
  });

});
