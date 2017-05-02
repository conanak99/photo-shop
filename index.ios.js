import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import ScrollableTabView from 'react-native-scrollable-tab-view';

import Home from './app/scenes/Home';
import Help from './app/scenes/Help';
import History from './app/scenes/History';

import TabBar from './app/components/TabBar';

export default class PhotoShop extends Component {
  render() {
    return (
      <ScrollableTabView tabBarPosition="bottom"
        renderTabBar={() => <TabBar />}
         initialPage={1}>
        <Help tabLabel="ios-help-circle" />
        <Home tabLabel="ios-photos"/>
        <History tabLabel="ios-time" />
      </ScrollableTabView>
    );
  }
}


AppRegistry.registerComponent('PhotoShop', () => PhotoShop);
