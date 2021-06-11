import {useRef} from 'react';
import {Animated} from 'react-native';

export function useFade(opacityNumber: any) {
  const opacity = useRef(new Animated.Value(opacityNumber)).current;

  const fadeIn = (callback?: Function) => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start(() => (callback ? callback() : null));
  };

  const fadeOut = () => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };
  return {opacity, fadeIn, fadeOut};
}
