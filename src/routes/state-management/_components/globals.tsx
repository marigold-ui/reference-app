export interface IMovie {
    href: string;
    year: number;
    title: string;
    category: string;
    thumbnail: string;
    thumbnail_width: number;
    thumbnail_height: number;
    extract: string;
}

export const apiUrl = 'https://6630d183c92f351c03db2e12.mockapi.io/movies';