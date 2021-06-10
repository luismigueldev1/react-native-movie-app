import {useEffect, useState} from 'react';
import movieDB from '../api/movieDB';
import {Movie, MovieDbMoviesResponse} from '../interfaces/movieInterfaces';

interface MoviesState {
  nowPlaying: Movie[];
  popular: Movie[];
  topRated: Movie[];
  upcoming: Movie[];
}

export function useMovies() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [movies, setMovies] = useState<MoviesState>({
    nowPlaying: [],
    popular: [],
    topRated: [],
    upcoming: [],
  });

  const getMovies = async () => {
    try {
      const nowPlayingPromise =
        movieDB.get<MovieDbMoviesResponse>('/now_playing');
      const popularPromise = movieDB.get<MovieDbMoviesResponse>('/popular');
      const topRatedPromise = movieDB.get<MovieDbMoviesResponse>('/top_rated');
      const upcomingPromise = movieDB.get<MovieDbMoviesResponse>('/upcoming');
      const response = await Promise.all([
        nowPlayingPromise,
        popularPromise,
        topRatedPromise,
        upcomingPromise,
      ]);
      setMovies({
        nowPlaying: response[0].data.results,
        popular: response[1].data.results,
        topRated: response[2].data.results,
        upcoming: response[3].data.results,
      });
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getMovies();
  }, []);

  return {...movies, isLoading};
}
