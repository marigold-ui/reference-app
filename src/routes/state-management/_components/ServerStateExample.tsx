import {
  Card,
  Image,
  Inline,
  MarigoldProvider,
  SearchField,
  Select,
  Stack,
  Text,
} from '@marigold/components';
import { useState } from 'react';
import {
  apiUrl,
  type IMovie,
} from '@/routes/state-management/_components/globals';
import useFetch from '@/routes/state-management/_components/useFetch';
import theme from '@marigold/theme-core';

function ServerStateExample() {
  const [filters, setFilters] = useState<{ title: string; category: string }>({
    title: '',
    category: '',
  });
  const {
    data: movies,
    isError,
    isLoading,
    error,
  } = useFetch<Array<IMovie>>(apiUrl, ['movies', filters], filters);

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <MarigoldProvider theme={theme}>
      <Stack space={4}>
        <Inline space={4}>
          <SearchField
            value={filters?.title}
            onChange={value => setFilters(prev => ({ ...prev, title: value }))}
            label="search"
            width={'1/2'}
          />
          <Select
            label="Category"
            placeholder="Select your character"
            width={'1/5'}
            onChange={key => {
              setFilters(prev => ({ ...prev, category: key as string }));
            }}
            selectedKey={filters.category}
          >
            <Select.Option id={''}>all</Select.Option>
            <Select.Option id={'Drama'}>Drama</Select.Option>
            <Select.Option id={'Silent'}>Silent</Select.Option>
            <Select.Option id={'Comedy'}>Comedy</Select.Option>
            <Select.Option id={'Western'}>Western</Select.Option>
            <Select.Option id={'Historical'}>Historical</Select.Option>
            <Select.Option id={'Fantasy'}>Fantasy</Select.Option>
          </Select>
        </Inline>

        {isLoading && <span>Loading...</span>}
        <Inline space={4}>
          {
            // check if search returns nothing(movies='not found')
            typeof movies === 'string' ? (
              <Text fontSize="xl" color="text-error">
                {movies}
              </Text>
            ) : (
              movies?.map(movie => (
                <Card variant="hovering" key={movie.href}>
                  <Text fontSize="xl" weight="bold">
                    {movie.title}
                  </Text>
                  <Image
                    src={movie.thumbnail}
                    alt={movie.title}
                    width={300}
                    height={300}
                  />
                </Card>
              ))
            )
          }
        </Inline>
      </Stack>
    </MarigoldProvider>
  );
}

export default ServerStateExample;
