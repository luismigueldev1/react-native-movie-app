import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {Movie} from '../../interfaces/movieInterfaces';
import {MoviePoster} from '../MoviePoster';
import {styles} from './styles';

interface Props {
  title?: string;
  movies: Movie[];
}

export default function MovieFlatList({movies, title}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        data={movies}
        renderItem={({item}: any) => (
          <MoviePoster movie={item} height={200} width={140} flatList />
        )}
        keyExtractor={item => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}
