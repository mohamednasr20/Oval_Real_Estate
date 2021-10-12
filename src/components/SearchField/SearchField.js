import React from 'react';
import InputBase from '@mui/material/InputBase';
import { SearchButton, SearchWrapper } from './styles';

const SearchField = () => {
  return (
    <SearchWrapper component="form">
      <InputBase sx={{ padding: 1 }} placeholder="Enter Address, zip, city" />
      <SearchButton color="secondary" variant="contained">
        Search
      </SearchButton>
    </SearchWrapper>
  );
};

export default SearchField;
