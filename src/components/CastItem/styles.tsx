import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  CastItem: {
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    marginLeft: 20,
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  actorImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },

  characterContainer: {
    marginLeft: 10,
  },
  actorName: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  actorCharacter: {
    fontSize: 16,
    fontWeight: 'bold',
    opacity: 0.7,
  },
});
