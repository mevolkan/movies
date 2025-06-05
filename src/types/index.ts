export type Movie = {
    id: number;
    title: string;
    poster_path: string;
    overview: string;
    release_date: string;
    vote_average: number;
    vote_count: number;
    adult?: boolean;
    backdrop_path?: string;
    genre_ids?: number[];
};