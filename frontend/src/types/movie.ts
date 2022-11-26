import { Genre } from './genre';

export type Movie = {
    id: number;
    title: String;
    subTitle: String;
    year: number;
    imgUrl: string;
    synopsis: String;
    genre: Genre;
}