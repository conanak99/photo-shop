import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

import styles from '../styles/commonStyle';
import CameraRollView from '../components/CameraRollView';
import Icon from 'react-native-vector-icons/Ionicons';
import ImagePicker from 'react-native-image-crop-picker';

import { StackNavigator } from 'react-navigation';
import Result from './Result';

class Home extends Component {
  static navigationOptions = {
    header: null,
  }

  _renderImage = (asset) => {
    return (
      <TouchableOpacity
        onPress={this.openCropper.bind(this, asset.node.image.uri)}
        style={{flex:1, marginBottom:10, alignItems: 'stretch'}}
        key={asset.node.image.filename}>
          <Image
            source={asset.node.image}
            style={styles.image}
          />
      </TouchableOpacity>
    );
  };

  async openCropper(uri) {
    let image = await ImagePicker.openCropper({
      path: uri,
      width: 600,
      height: 600,
      includeBase64: true,
    });
    this.props.navigation.navigate('Result', {imageData: image.data});
  }

  async openCamera() {
    const image = await ImagePicker.openCamera({
      width: 600,
      height: 600,
      cropping: true,
      includeBase64: true,
    });
    this.props.navigation.navigate('Result', {imageData: image.data});
  }

    render() {
      return <View style={styles.container}>
        <TouchableOpacity onPress={this.openCamera.bind(this)}>
            <Image
              style={styles.banner}
              source={ require('./../image/camera.jpg') }
            />
            <View style={styles.bannerOverlay}>
              <Icon
                name='ios-camera-outline'
                size={50}
                color={'rgb(255, 255, 255)'}
              />
              <Text style={styles.bannerText}>Take Photo </Text>
            </View>
        </TouchableOpacity>

        <Text style={styles.album}>Take Photo or Select Image</Text>

        <View style={styles.marginContainer}>
          <CameraRollView
            batchSize={20}
            imagesPerRow={3}
            groupTypes="All"
            renderImage={this._renderImage}
          />
        </View>
      </View>;
    }
}

Home.propTypes = {
  navigation: PropTypes.object,
};

const HomeWrap = StackNavigator({
  Home: { screen: Home },
  Result: {screen: Result },
},
  { headerMode: 'screen' }
);



export default HomeWrap;
