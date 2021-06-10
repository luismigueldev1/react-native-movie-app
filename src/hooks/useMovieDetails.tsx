import {useState, useEffect} from 'react';
import movieDB from '../api/movieDB';
import {Cast, CreditsReponse} from '../interfaces/creditsInterfaces';
import {MovieFull} from '../interfaces/movieInterfaces';

interface MovieDetails {
  isLoading: boolean;
  movieFull: MovieFull | undefined;
  cast: Cast[];
}

export default function useMovieDetails(moviedId: number) {
  const [state, setState] = useState<MovieDetails>({
    isLoading: true,
    movieFull: undefined,
    cast: [],
  });

  const getMovieDetails = async () => {
    try {
      const movieDetailsPromise = movieDB.get<MovieFull>(`/${moviedId}`);
      const castPromise = movieDB.get<CreditsReponse>(`/${moviedId}/credits`);

      const [movieResponse, castResponse] = await Promise.all([
        movieDetailsPromise,
        castPromise,
      ]);

      setState({
        isLoading: false,
        movieFull: movieResponse.data,
        cast: castResponse.data.cast,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovieDetails();
  }, []);

  return {...state};
}
