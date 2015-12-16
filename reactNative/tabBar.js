'use strict';

var React = require('react-native');
var E131Is9Hx = require('./E131Is9Hx.js');

var {
  StyleSheet,
  TabBarIOS,
  Text,
  View,
} = React;

var systemIconTypes = ['bookmarks', 'contacts', 'downloads', 'favorites', 'featured', 'history', 'more', 'most-recent', 'most-viewed', 'recents', 'search', 'top-rated'];

module.exports = React.createClass({
  getInitialState: function() {
    return {
      selectedTab: 'bookmarks'
    };
  },

  render: function() {
    return (
      <TabBarIOS
        style={[styles.view10Tabbarios11]}
        >
        <TabBarIOS.Item 
        systemIcon='bookmarks'
        selected={this.state.selectedTab === 'bookmarks'}
        onPress={() => {
          this.setState({
            selectedTab: 'bookmarks',
          });
        }}>
        <E131Is9Hx />
        </TabBarIOS.Item>
        <TabBarIOS.Item 
        systemIcon='favorites'
        selected={this.state.selectedTab === 'favorites'}
        onPress={() => {
          this.setState({
            selectedTab: 'favorites',
          });
        }}>
        <E131Is9Hx />
        </TabBarIOS.Item>
        <TabBarIOS.Item 
        systemIcon='most-recent'
        selected={this.state.selectedTab === 'most-recent'}
        onPress={() => {
          this.setState({
            selectedTab: 'most-recent',
          });
        }}>
        <E131Is9Hx />
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  },

});

var styles = StyleSheet.create({
    view10Tabbarios11:{
        paddingLeft: 0,
        paddingRight: 0,
        paddingTop: 0,
        paddingBottom: 0,
        marginLeft: 0,
        marginRight: 0,
        marginTop: 0,
        marginBottom: 0,
    }, 
});
