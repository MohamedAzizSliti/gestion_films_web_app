import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      marginBottom="20px"
      style={{
        backgroundColor: '#1f1f1f', // Dark background
        padding: '10px',
        borderRadius: '20px',
        width: '100%', // Full width
        maxWidth: '800px', // Limit max width
        margin: '0 auto', // Center horizontally
      }}
    >
      <TextField
        variant="outlined"
        placeholder="Rechercher un film"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          flex: 1,
          background: '#ffffff', // White background for contrast
          borderRadius: '20px',
          marginRight: '10px', // Spacing between TextField and Button
        }}
        InputProps={{
          style: {
            color: '#000000', // Text color
            borderRadius: '20px',
          },
        }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSearch}
        style={{
          borderRadius: '20px',
          minWidth: '120px', // Increased button width
        }}
      >
        <SearchIcon style={{ marginRight: '5px' }} /> Rechercher
      </Button>
    </Box>
  );
};

export default SearchBar;
