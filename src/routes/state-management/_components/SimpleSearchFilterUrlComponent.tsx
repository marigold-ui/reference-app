import React, { useEffect, useState } from 'react';
import {
  apiUrl,
  type IMovie,
} from '@/routes/state-management/_components/globals';
import { MarigoldProvider, SearchField, Stack } from '@marigold/components';
import theme from '@marigold/theme-core';
import useFetch from './useFetch';
import { Route } from '@/routes/state-management/index.lazy';

const SimpleSearchFilterUrlComponent = () => {
  const { name }: { name: string } = Route.useSearch();
  const navigate = Route.useNavigate();
  const [filteredList, setFilteredList] = useState<Array<IMovie>>([]);

  const {
    data: movies,
    isError,
    isLoading,
    error,
  } = useFetch<Array<IMovie>>(apiUrl, ['movies']);

  const searchQuery = name || '';

  useEffect(() => {
    if (movies) {
      setFilteredList(movies);
    }
  }, [movies]);

  useEffect(() => {
    if (searchQuery && movies) {
      const filtered = movies.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredList(filtered);
    } else if (movies) {
      setFilteredList(movies);
    }
  }, [searchQuery, movies]);

  const handleSearchChange = (value: string) => {
    navigate({
      search: { name: value },
    });
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
          onChange={handleSearchChange}
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

export default SimpleSearchFilterUrlComponent;
