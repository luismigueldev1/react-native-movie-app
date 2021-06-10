import React from 'react';
import {Dimensions, View} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {Movie} from '../../interfaces/movieInterfaces';
import {MoviePoster} from '../MoviePoster';

interface Props {
  movies: Movie[];
}

export function MoviesCarousel({movies}: Props) {
  const {width} = Dimensions.get('window');
  return (
    <View style={{height: 390}}>
      <Carousel
        data={movies}
        renderItem={({item}: any) => <MoviePoster movie={item} />}
        sliderWidth={width}
        itemWidth={250}
      />
    </View>
  );
}
