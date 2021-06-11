import React, {useContext, useRef} from 'react';
import {Dimensions, View} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {GradientContext} from '../../context/GradientContext';
import {getColors} from '../../helpers/getColors';

import {Movie} from '../../interfaces/movieInterfaces';
import {MoviePoster} from '../MoviePoster';

interface Props {
  movies: Movie[];
}

export function MoviesCarousel({movies}: Props) {
  const {dispatch} = useContext(GradientContext);
  const {width, height} = Dimensions.get('window');
  const isCarousel = React.useRef(null);

  const getPosterColors = async (index: number) => {
    const uri = 'https://image.tmdb.org/t/p/w500' + movies[index].poster_path;
    const [primary, secondary] = await getColors(uri);
    dispatch({
      type: 'setColor',
      payload: {primary, secondary},
    });
  };

  return (
    <View style={{height: height * 0.6}}>
      <Carousel
        data={movies}
        ref={isCarousel}
        renderItem={({item}: any) => <MoviePoster movie={item} />}
        sliderWidth={width}
        itemWidth={width * 0.75}
        lockScrollTimeoutDuration={100}
        onSnapToItem={index => getPosterColors(index)}
      />
    </View>
  );
}
