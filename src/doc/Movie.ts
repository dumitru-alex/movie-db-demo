export interface Movie {
  IMDb: string;
  Title: string;
  Type: MovieType;
  Genre: string;
  Plot: string;
}

type MovieType = 'movie' | 'series' | 'episode';
