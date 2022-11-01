import { Genre } from './genre';

export type Movie = {
    id: number;
    title: String;
    subTitle: String;
    year: number;
    imgUrl: String;
    synopsis: String;
    genre: Genre;
}