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
        <Help tabLabel={{
          icon: 'ios-help-circle',
          text: 'Help'
        }} />
        <Home tabLabel={{
          icon: 'ios-photos',
          text: 'Search'
        }}/>
        <History tabLabel={{
          icon: 'ios-time',
          text: 'History'
        }} />
      </ScrollableTabView>
    );
  }
}


AppRegistry.registerComponent('PhotoShop', () => PhotoShop);
