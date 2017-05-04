import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Image,
  ActivityIndicator,
} from 'react-native';

import styles, { mainColor } from '../styles/commonStyle';
import ProductRecognizer from '../libs/productRecognizer';
import ProductList from '../components/ProductList';

class Result extends Component {
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
    const { params } = this.props.navigation.state;
    //let products = await ProductRecognizer.mockProduct();
    let products = await ProductRecognizer.recognizeImage(params.imageData);
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
          color={mainColor}/>
      </View>;

      let resultView = <ProductList
        products={this.state.products}
        itemPerRow={2}
      />;

      return <View style={styles.container}>
        {this.state.loading ? loadingView : resultView}
      </View>;
    }
}

Result.propTypes = {
  navigation: PropTypes.object,
};

export default Result;
