// export interface Anime {
//     anilistId: number;
//     malId: number;
//     id: string;

//     cover: string;
//     image: string;

//     description: string,
//     genres: string[];
//     title: string;

//     rating: number | null;
//     releaseDate: number;
//     status: string;
//     type: string;
// }

export interface Anime {
    anilistId: number;
    malId: number;
    id: string;

    cover: string;
    image: string;

    description: string,
    genres: string[];
    title: {
        english: string;
        userPreferred: string;
    } | string;

    rating: number | null;
    releaseDate: number;
    status: string;
    type: string;
    episodeTitle: string;
}