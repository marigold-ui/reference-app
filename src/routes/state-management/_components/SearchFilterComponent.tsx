import React, { useEffect, useState } from 'react';
import type { IMovie } from '@/routes/state-management/_components/types';
import { MarigoldProvider, SearchField } from '@marigold/components';
import theme from '@marigold/theme-core';
import { useQuery } from '@tanstack/react-query';

const SearchFilterComponent = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredList, setFilteredList] = useState<Array<IMovie>>([]);

  const {
    data: movies,
    isError,
    isLoading,
    error,
  } = useQuery<Array<IMovie>>({
    queryKey: ['users'],
    queryFn: async () => {
      const data = await fetch(
        'https://6630d183c92f351c03db2e12.mockapi.io/movies'
      );
      return await data.json();
    },
  });

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
      <SearchField
        value={searchQuery}
        onChange={value => handleSearchChange(value)}
        label="search"
      />
      <ul>
        {filteredList.map((item, index) => (
          <li key={index}>{item.title}</li>
        ))}
      </ul>
    </MarigoldProvider>
  );
};

export default SearchFilterComponent;
