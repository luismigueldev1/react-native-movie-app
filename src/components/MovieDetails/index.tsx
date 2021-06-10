import React from 'react';
import {Text, View} from 'react-native';
import currencyFormatter from 'currency-formatter';
import Icon from 'react-native-vector-icons/Ionicons';
import {Cast} from '../../interfaces/creditsInterfaces';
import {MovieFull} from '../../interfaces/movieInterfaces';
import {styles} from './styles';
import CastItem from '../CastItem';
import {FlatList} from 'react-native-gesture-handler';

interface Props {
  movieFull: MovieFull;
  cast: Cast[];
}

export default function MovieDetails({movieFull, cast}: Props) {
  return (
    <View>
      {/* Detalles  */}
      <View style={styles.detailsContainer}>
        <View style={styles.row}>
          <Icon name="star-outline" size={16} color="gray" />
          <Text style={styles.starNumber}>{movieFull.vote_average}</Text>

          <Text style={styles.starNumber}>
            - {movieFull.genres.map(genre => genre.name).join(', ')}
          </Text>
        </View>
        {/* Historia*/}
        <Text style={styles.historyTitle}>Historia</Text>
        <Text> {movieFull.overview}</Text>
        {/* Presupuesto*/}
        <Text style={styles.historyTitle}>Presupuesto</Text>
        <Text>{currencyFormatter.format(movieFull.budget, {code: 'USD'})}</Text>
      </View>

      {/* Casting*/}
      <Text style={styles.actorsTitle}>Actores</Text>
      <FlatList
        style={styles.flatList}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={cast}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <CastItem actor={item} />}
      />
    </View>
  );
}
