import React from 'react';
import {useNavigation} from '@react-navigation/core';
import {Image, View, TouchableOpacity} from 'react-native';
import {Movie} from '../../interfaces/movieInterfaces';
import {styles} from './styles';
import {Dimensions} from 'react-native';

interface Props {
  movie: Movie;
  height?: number;
  width?: number;
  flatList?: boolean;
}

export function MoviePoster({movie, height, width, flatList}: Props) {
  const uri = 'https://image.tmdb.org/t/p/w500' + movie.poster_path;
  const {width: windowWitdh, height: windowHeight} = Dimensions.get('window');
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={{
        ...styles.container,
        height: height ? height : windowHeight * 0.6,
        width: width ? width : windowWitdh * 0.75,
        marginHorizontal: flatList ? 8 : 0,
      }}
      onPress={() => navigation.navigate('DetailScreen', movie)}>
      <Image source={{uri}} style={styles.image} />
    </TouchableOpacity>
  );
}
