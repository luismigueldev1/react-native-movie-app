import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: 250,
    height: 370,
    borderRadius: 18,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },

  image: {
    flex: 1,
    borderRadius: 18,
  },
});
