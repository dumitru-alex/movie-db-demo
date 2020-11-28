export interface Movie {
  id: number;
  IMDb: string;
  title: string;
  type: MovieType;
  plot: Plot;
}

type MovieType = 'movie' | 'series' | 'episode';
type Plot = 'short' | 'full';
