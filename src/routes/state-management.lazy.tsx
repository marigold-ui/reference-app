

import { createLazyFileRoute } from '@tanstack/react-router';
import { useQuery } from '@tanstack/react-query'
import { Card, Image, Inline, SearchField, Select, Stack, Text } from '@marigold/components';
import { useState } from 'react';
import { useDebounce } from '../hooks/useDebounce';

export const Route = createLazyFileRoute('/state-management')({
  component: Example
});


interface MovieI {
  href: string;
  year: number;
  title: string;
  category: string;
  thumbnail: string;
  thumbnail_width: number;
  thumbnail_height: number;
  extract: string;
}

function Example() {

  const [filters, setFilters] = useState<{ title: string, category: string }>({
    title: "",
    category: "",
  });

  const fetchData = async (url: string, queryParams: Record<string, string>) => {
    const queryString = new URLSearchParams(queryParams).toString();
    const apiURL = url + (queryString ? `?${queryString}` : '');
    const data = await fetch(apiURL);
    const users = await data.json();
    return users;
  };


  const debouncedFilters = useDebounce(filters, 1000);

  const { data: movies, isError, isLoading, error } = useQuery<Array<MovieI>>({
    queryKey: ['users', debouncedFilters],
    queryFn: async () => await fetchData("https://6630d183c92f351c03db2e12.mockapi.io/movies", debouncedFilters),
  });

  if (isError) {
    return <span>Error: {error.message}</span>
  };


  return (
    <>
      <Stack space={3}>
        <Inline space={4}>
          <SearchField value={filters?.title} onChange={(value) => setFilters(prev => ({ ...prev, title: value }))} label="search" width={'1/2'} />
          <Select label="Category" placeholder="Select your character" width={'1/5'}
            onChange={(key) => { setFilters(prev => ({ ...prev, category: key as string })) }}
            selectedKey={filters.category}
          >
            <Select.Option id={""}>all</Select.Option>
            <Select.Option id={"Drama"}>Drama</Select.Option>
            <Select.Option id={"Silent"}>Silent</Select.Option>
            <Select.Option id={"Comedy"}>Comedy</Select.Option>
            <Select.Option id={"Western"}>Western</Select.Option>
            <Select.Option id={"Historical"}>Historical</Select.Option>
            <Select.Option id={"Fantasy"}>Fantasy</Select.Option>
          </Select>
        </Inline>
        {isLoading && <span>Loading...</span>}
        <Inline space={4} >
          {
            movies?.map((movie) =>
              <Card variant='hovering' key={movie.href}>
                <Text fontSize='xl' weight='bold'>{movie.title}</Text>
                <Image fit="contain" src={movie.thumbnail} alt={movie.title} />
              </Card>
            )
          }
        </Inline>
      </Stack>
    </>
  )
}

