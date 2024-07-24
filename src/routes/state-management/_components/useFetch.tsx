import { useQuery } from '@tanstack/react-query';

const fetchData = async (
  url: string,
  queryParams: Record<string, string> = {}
) => {
  const queryString = new URLSearchParams(queryParams).toString();
  const apiURL = `${url}${queryString ? `?${queryString}` : ''}`;
  const response = await fetch(apiURL);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return await response.json();
};

const useFetch = <T,>(
  url: string,
  queryKey: (string | { title: string; category: string })[],
  queryParams?: Record<string, string>
) => {
  return useQuery<T>({
    queryKey,
    queryFn: () => fetchData(url, queryParams),
  });
};

export default useFetch;
