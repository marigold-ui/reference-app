import React, { useEffect, useState } from 'react';
import {
  apiUrl,
  type IMovie,
} from '@/routes/state-management/_components/globals';
import { MarigoldProvider, SearchField, Stack } from '@marigold/components';
import theme from '@marigold/theme-core';
import useFetch from './useFetch';

const SearchFilterComponent = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredList, setFilteredList] = useState<Array<IMovie>>([]);

  const {
    data: movies,
    isError,
    isLoading,
    error,
  } = useFetch<Array<IMovie>>(apiUrl, ['movies']);

  useEffect(() => {
    if (movies) {
      setFilteredList(movies);
    }
  }, [movies]);

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);

    const filtered = movies!.filter(item =>
      item.title.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredList(filtered);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <MarigoldProvider theme={theme}>
      <Stack space={2}>
        <SearchField
          value={searchQuery}
          onChange={value => handleSearchChange(value)}
          label="search"
        />
        {filteredList.length > 0 ? (
          <ul>
            {filteredList.map((item, index) => (
              <li key={index}>{item.title}</li>
            ))}
          </ul>
        ) : (
          <span>No movies found!</span>
        )}
      </Stack>
    </MarigoldProvider>
  );
};

export default SearchFilterComponent;
