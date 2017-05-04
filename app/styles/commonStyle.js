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
    marginRight: 0,
    marginTop: 5,
  },
  album: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    margin: 5,
    marginTop: 10
  },
  header: {
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 30,
    marginBottom: 5,
  },
  listView: {
    flex: 1,
    alignSelf: 'stretch',
  },
  listViewRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  }
});

// Special style with EStyleSheet (Percent, pt, px, rem)
const additionalStyle = EStyleSheet.create({
  image: {
    margin: 4,
    flex: 1,
    width: '25%',
    height: '14%',
  },
  product: {
    width: '30%',
    height: '20%',
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
  },
  bannerText: {
    fontSize: 12,
    marginTop: -8,
    color: 'white',
  },
  loadingView: {
    flex:1,
    justifyContent: 'center',
  },
  loadingImage: {
    width: 160,
    height: 80,
  }
});

export const mainColor = 'rgb(245, 160, 21)';
export const secondaryColor= 'rgb(178,178,178)';

export default {... styles, ...additionalStyle};
