import {
  StyleSheet
} from 'react-native';

import EStyleSheet from 'react-native-extended-stylesheet';
EStyleSheet.build();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'rgb(255, 255, 255)',
  },
  marginContainer: {
    flex: 1,
    alignSelf: 'stretch',
    margin: 15,
    marginTop: 5,
  },
  album: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    margin: 5,
    marginTop: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

// Special style with EStyleSheet (Percent, pt, px, rem)
const additionalStyle = EStyleSheet.create({
  image: {
    margin: 4,
    flex: 1,
    width: '25%',
    height: '14%',
  },
  banner: {
    width: '100%',
    height: '25%'
  },
  bannerOverlay: {
    width: '100%',
    height: '25%',
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default {... styles, ...additionalStyle};
