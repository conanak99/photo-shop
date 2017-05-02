import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

import styles from '../styles/commonStyle';
import CameraRollView from '../components/CameraRollView';
import Icon from 'react-native-vector-icons/Ionicons';

class Home extends Component {
  state = {
    groupTypes: 'All'
  };

  componentDidMount() {
    //updatePosition(this.refs['SELECT1']);
  }

  _renderImage = (asset) => {
    return (
      <TouchableOpacity style={{flex:1, marginBottom:10, alignItems: 'stretch'}} key={asset.node.image.filename}>
          <Image
            source={asset.node.image}
            style={styles.image}
          />
      </TouchableOpacity>
    );
  };

    render() {
      return <View style={styles.container}>
        <TouchableOpacity>
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
            </View>
        </TouchableOpacity>

        <Text style={styles.album}>All Images</Text>

        <View style={styles.marginContainer}>
          <CameraRollView
            batchSize={20}
            imagesPerRow={3}
            groupTypes={this.state.groupTypes}
            renderImage={this._renderImage}
          />
        </View>
      </View>;
    }
}




export default Home;
