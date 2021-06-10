import React from 'react';
import {Image, View, Text} from 'react-native';
import {Cast} from '../../interfaces/creditsInterfaces';
import {styles} from './styles';

interface Props {
  actor: Cast;
}

export default function CastItem({actor}: Props) {
  const uri = 'https://image.tmdb.org/t/p/w500' + actor.profile_path;
  return (
    <View>
      <View style={styles.CastItem}>
        {actor.profile_path ? (
          <Image source={{uri}} style={styles.actorImage} />
        ) : null}

        <View style={styles.characterContainer}>
          <Text style={styles.actorName}>{actor.name}</Text>
          <Text style={styles.actorCharacter}>{actor.character}</Text>
        </View>
      </View>
    </View>
  );
}
