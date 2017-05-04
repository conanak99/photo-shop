import React from 'react';

import ScrollableTabView from 'react-native-scrollable-tab-view';

import Home from './Home';
import Help from './Help';

import TabBar from '../components/TabBar';

const IndexPage = () =>
  <ScrollableTabView tabBarPosition="bottom"
    renderTabBar={() => <TabBar />}
    initialPage={0}>
    <Home tabLabel={{
      icon: 'ios-photos',
      text: 'Search'
    }}/>
    <Help tabLabel={{
      icon: 'ios-help-circle',
      text: 'Help'
    }} />
</ScrollableTabView>;

export default IndexPage;
