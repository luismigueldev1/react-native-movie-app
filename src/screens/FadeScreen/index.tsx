import React from 'react';
import {useFade} from '../../hooks/useFade';
import {View, StyleSheet, Animated, Button} from 'react-native';

export default function FadeScreen() {
  const {opacity, fadeIn, fadeOut} = useFade(0);

  return (
    <View style={styles.container}>
      <Animated.View style={{...styles.box, opacity}}></Animated.View>
      <Button title="fade in" onPress={() => fadeIn()} />
      <Button title="fade out" onPress={() => fadeOut()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange',
  },
  box: {
    backgroundColor: '#084F6A',
    width: 150,
    height: 150,
    borderColor: 'white',
    borderWidth: 10,
    marginBottom: 10,
  },
});
