import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {
  View,
  Text,
  Image,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {RootStackParams} from '../../navigators/RootStackNavigator';
import {styles} from './styles';
import useMovieDetails from '../../hooks/useMovieDetails';
import MovieDetails from '../../components/MovieDetails';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> {}

export default function DetailScreen({route, navigation}: Props) {
  const movie = route.params;
  const {isLoading, cast, movieFull} = useMovieDetails(movie.id);

  const uri = 'https://image.tmdb.org/t/p/w500' + movie.poster_path;

  return (
    <ScrollView>
      <View style={styles.posterImage}>
        <Image source={{uri}} style={styles.image} resizeMode="stretch" />
      </View>

      <View style={styles.container}>
        <Text style={styles.textTitle}>{movie.title}</Text>
        <Text style={styles.textSubtitle}>{movie.original_title}</Text>
      </View>

      {isLoading ? (
        <ActivityIndicator size={30} color="gray" />
      ) : (
        <MovieDetails movieFull={movieFull!} cast={cast} />
      )}

      {/*Boton para cerrar*/}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <Icon
          name="arrow-back-outline"
          size={35}
          color="white"
          style={styles.backButtonIcon}
        />
      </TouchableOpacity>
    </ScrollView>
  );
}
