import React from 'react';
import {View, ScrollView, ActivityIndicator} from 'react-native';
import {} from 'react-native-gesture-handler';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import GradientBackground from '../../components/GradientBackground';
import MovieFlatList from '../../components/MovieFlatList';

import {MoviesCarousel} from '../../components/MoviesCarousel';
import {useMovies} from '../../hooks/useMovies';
import {styles} from './styles';

export default function HomeScreen() {
  const {nowPlaying, popular, topRated, upcoming, isLoading} = useMovies();
  const {top, bottom} = useSafeAreaInsets();

  if (isLoading)
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator color="red" size={50} />
      </View>
    );

  return (
    <GradientBackground>
      <ScrollView>
        <View
          style={{
            ...styles.homeContainer,
            marginTop: top + 20,
            marginBottom: bottom + 20,
          }}>
          {/* Carousel Principal*/}
          <MoviesCarousel movies={nowPlaying} />
          {/* Peliculas Populares*/}
          <MovieFlatList movies={popular} title="Popular" />
          {/* Peliculas Populares*/}
          <MovieFlatList movies={topRated} title="Top rated" />
          {/* Peliculas Populares*/}
          <MovieFlatList movies={upcoming} title="Upcoming" />
        </View>
      </ScrollView>
    </GradientBackground>
  );
}
