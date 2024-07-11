import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from '../components/SearchBar';

describe('SearchBar component', () => {
  // Test rendering of SearchBar
  test('renders SearchBar component', () => {
    render(<SearchBar />);
    const searchBarElement = screen.getByPlaceholderText('Rechercher un film');
    expect(searchBarElement).toBeInTheDocument();
  });

  // Test input change
  test('input value updates correctly', () => {
    render(<SearchBar />);
    const searchInput = screen.getByPlaceholderText('Rechercher un film');

    fireEvent.change(searchInput, { target: { value: 'Avengers' } });
    expect(searchInput.value).toBe('Avengers');
  });

  // Test button click
  test('calls onSearch function correctly', () => {
    const mockOnSearch = jest.fn();
    render(<SearchBar onSearch={mockOnSearch} />);
    const searchInput = screen.getByPlaceholderText('Rechercher un film');
    const searchButton = screen.getByText('Rechercher');

    fireEvent.change(searchInput, { target: { value: 'Avatar' } });
    fireEvent.click(searchButton);

    expect(mockOnSearch).toHaveBeenCalledWith('Avatar');
  });
});
