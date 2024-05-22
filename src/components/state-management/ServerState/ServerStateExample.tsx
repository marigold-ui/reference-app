import {
    Card,
    Image,
    Inline,
    SearchField,
    Select,
    Stack,
    Text,
} from '@marigold/components';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

interface IMovie {
    href: string;
    year: number;
    title: string;
    category: string;
    thumbnail: string;
    thumbnail_width: number;
    thumbnail_height: number;
    extract: string;
}
function ServerStateExample() {
    const [filters, setFilters] = useState<{ title: string; category: string }>({
        title: '',
        category: '',
    });

    const fetchData = async (
        url: string,
        queryParams: Record<string, string>
    ) => {
        const queryString = new URLSearchParams(queryParams).toString();
        const apiURL = `${url}${queryString ? `?${queryString}` : ''}`;
        const data = await fetch(apiURL);
        return await data.json();
    };

    const {
        data: movies,
        isError,
        isLoading,
        error,
    } = useQuery<Array<IMovie>>({
        queryKey: ['users', filters],
        queryFn: async () =>
            await fetchData(
                'https://6630d183c92f351c03db2e12.mockapi.io/movies',
                filters
            ),
    });

    if (isError) {
        return <span>Error: {error.message}</span>;
    }

    return (
        <>
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
        </>
    );
}


export default ServerStateExample;