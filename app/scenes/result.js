import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import styles from '../styles/commonStyle';
import Icon from 'react-native-vector-icons/Ionicons';
import { TabNavigator } from 'react-navigation';
import ProductRecognizer from '../libs/productRecognizer';

class Home extends Component {
  static navigationOptions = {
    title: 'Kết quả',
  }

  constructor() {
    super();
    this.state = {
      loading: true,
      products: []
    };
  }

  async componentDidMount() {
    let products = await ProductRecognizer.mockProduct();
    //let products = await ProductRecognizer.mockProduct();
    this.setState({ loading:false, products});
  }

  render() {
      let loadingView = <View style={styles.loadingView}>
        <Image
          resizeMode="contain"
          style={styles.loadingImage}
          source={ require('./../image/logo-sendo.jpg') }
        />
        <ActivityIndicator size="large"
          color="rgb(245, 160, 21)"/>
      </View>;

      let resultView = <Text>{JSON.stringify(this.state.products)}</Text>;

      return <View style={styles.container}>
        {this.state.loading ? loadingView : resultView}
      </View>;
    }
}




export default Home;
