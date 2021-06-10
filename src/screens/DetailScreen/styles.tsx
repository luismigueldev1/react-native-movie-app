import {StyleSheet, Dimensions} from 'react-native';

const {height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  posterImage: {
    height: height * 0.75,
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
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
  },

  container: {
    marginTop: 10,
    paddingHorizontal: 20,
  },

  textTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  textSubtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    opacity: 0.7,
  },

  backButton: {
    position: 'absolute',
    zIndex: 9,
    top: 15,
    left: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },

  backButtonIcon: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 100,
    padding: 2,
  },
});
