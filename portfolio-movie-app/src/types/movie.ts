/**
 * types
 * movie.ts
**/

export interface MovieType {
  id: number;
  title: string;
  year: number;
  summary: string;
  description_full?: string;
  rating: number;
  medium_cover_image: string;
  large_cover_image: string;
  genres: string[];
}