export interface Movie {
  backdrop_path?: string;
  id?: number;
  original_language?: string;
  original_title?: string;
  overview?: string;
  popularity?: number;
  poster_path?: string;
  release_date?: string;
  title?: string;
  vote_average?: number;
  vote_count?: number;
}

export interface MovieDetail extends Movie {
  belongs_to_collection?: null;
  budget?: number;
  genres?: [
    {
      id: number;
      name: string;
    }
  ];
  homepage?: string;
  imdb_id?: string;
  production_companies?: [
    {
      id: number;
      name: string;
    }
  ];
  production_countries?: [
    {
      name: string;
    }
  ];
  revenue?: number;
  runtime?: number;
  spoken_languages?: [];
  status?: string;
  tagline?: string;
}
