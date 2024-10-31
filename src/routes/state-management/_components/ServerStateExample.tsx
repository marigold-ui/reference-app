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
import {
  apiUrl,
  type IMovie,
} from '@/routes/state-management/_components/globals';
import theme from '@marigold/theme-core';
import { Route } from '@/routes/state-management/preview.lazy';
import { useRouterState } from '@tanstack/react-router';
import { useQuery } from '@tanstack/react-query';

function ServerStateExample() {
  const filters: { title: string; category: string } = Route.useSearch();
  const navigate = Route.useNavigate();
  const router = useRouterState();

  const {
    data: movies,
    isError,
    isPending,
    error,
  } = useQuery<Array<IMovie>>({
    queryKey: ['users', filters],
    queryFn: async () => {
      const data = await fetch(`${apiUrl}${router.location.searchStr}`);
      return await data.json();
    },
  });

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <MarigoldProvider theme={theme}>
      <Stack space={4}>
        <Inline space={4}>
          <SearchField
            value={filters.title}
            onChange={value =>
              navigate({
                // @ts-ignore
                search: prev => ({ ...prev, title: value }),
              })
            }
            label="Search"
            width={'1/2'}
          />
          <Select
            label="Category"
            placeholder="Select your character"
            width={'1/5'}
            onChange={key => {
              navigate({
                // @ts-ignore
                search: prev => ({ ...prev, category: key }),
              });
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

        {isPending && <span>Loading...</span>}
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
