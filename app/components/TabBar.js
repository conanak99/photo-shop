import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { mainColor, secondaryColor } from '../styles/commonStyle';

const TabBar = React.createClass({
  tabIcons: [],

  propTypes: {
    goToPage: React.PropTypes.func,
    activeTab: React.PropTypes.number,
    tabs: React.PropTypes.array,
  },

  render() {
    return <View style={[styles.tabs, this.props.style, ]}>
      {this.props.tabs.map((tab, i) => {
        return <TouchableOpacity key={tab.icon} onPress={() => this.props.goToPage(i)} style={styles.tab}>
          <Icon
            name={tab.icon}
            size={30}
            color={this.props.activeTab === i ? mainColor : secondaryColor}
            ref={(icon) => { this.tabIcons[i] = icon; }}
          />
          {this.props.activeTab === i ?
            <Text style={[styles.tabText, styles.active]}>{tab.text}</Text>
            :
            <Text style={styles.tabText}>{tab.text}</Text>
          }

        </TouchableOpacity>;
      })}
    </View>;
  },
});

const styles = StyleSheet.create({
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 10,
  },
  tabText: {
    fontSize : 11,
  },
  active: {
    fontWeight: 'bold',
    color: mainColor,
  },
  tabs: {
    height: 60,
    flexDirection: 'row',
    backgroundColor: 'rgb(255,255,255)',
    paddingTop: 5,
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomColor: 'rgba(0,0,0,0.05)',
  },
});

export default TabBar;
