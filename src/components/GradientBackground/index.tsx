import React, {useContext, useEffect} from 'react';

import {StyleSheet, View, Animated} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {GradientContext} from '../../context/GradientContext';
import {useFade} from '../../hooks/useFade';
import {styles} from './styles';

interface Props {
  children: JSX.Element | JSX.Element[];
}

export default function GradientBackground({children}: Props) {
  const {gradient} = useContext(GradientContext);
  const {colors} = gradient;
  const {opacity, fadeIn, fadeOut} = useFade(0);

  return (
    <View style={styles.background}>
      <LinearGradient
        colors={[colors.primary, colors.secondary, 'white']}
        style={{...StyleSheet.absoluteFillObject}}
        start={{x: 0, y: 0}}
        end={{x: 0.7, y: 0.5}}
      />

      {children}
    </View>
  );
}
