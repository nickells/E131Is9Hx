'use strict';

var React = require('react-native');

var ListView = require('./components/ListView');
var MapView = require('./components/MapView');
var ScrollView = require('./components/ScrollView');
var SliderIOS = require('./components/SliderIOS');
var SwitchIOS = require('./components/SwitchIOS');


var {
  Image,
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

module.exports = React.createClass({
    render: function() {
        return (
          <View>
            <View style={[styles.view1]}>
                <Text 
                	style={[styles.view1Navbar3]}>
                	My Cool App
                </Text>
            </View>
            <View style={[styles.view2]}>
                <SwitchIOS 
                	style={[styles.view2Switchios4]}>
                </SwitchIOS>
                <Text 
                	style={[styles.view2Text5]}>
                	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut neque eget sem egestas varius.
                </Text>
            </View>
            <View style={[styles.view6]}>
                <ScrollView 
                dataSource={['http://www.viralnovelty.net/wp-content/uploads/2014/07/121.jpg', 'http://imgscenter.com/images/2014/09/13/Beauty-of-nature-random-4884759-1280-800.jpg', 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcShVpqAWrvxn8f2-XGo0ES0XP555GrVnU83y4v5kxBg8wOK9m1E']}
                style={[styles.view6Scrollview7]}>
                </ScrollView>
            </View>
            <View style={[styles.view8]}>
                <SliderIOS 
                	style={[styles.view8Sliderios9]}>
                </SliderIOS>
            </View>
          </View>
        );
    }
})


var styles = StyleSheet.create({
      view1:{
      }, 
      view2:{
          flexDirection: 'row',
      }, 
      view1Navbar3:{
          paddingLeft: 0,
          paddingRight: 0,
          paddingTop: 0,
          paddingBottom: 0,
          marginLeft: 0,
          marginRight: 0,
          marginTop: 0,
          marginBottom: 0,
          fontSize: 17,
          textAlign: 'center',
          width: 375,
      }, 
      view2Switchios4:{
          paddingLeft: 0,
          paddingRight: 0,
          paddingTop: 0,
          paddingBottom: 0,
          marginLeft: 0,
          marginRight: 0,
          marginTop: 0,
          marginBottom: 0,
          width: 234.375,
      }, 
      view2Text5:{
          paddingLeft: 0,
          paddingRight: 0,
          paddingTop: 0,
          paddingBottom: 0,
          marginLeft: 0,
          marginRight: 0,
          marginTop: 0,
          marginBottom: 0,
          fontSize: 17,
          width: 234.375,
      }, 
      view6:{
      }, 
      view6Scrollview7:{
          paddingLeft: 0,
          paddingRight: 0,
          paddingTop: 0,
          paddingBottom: 0,
          marginLeft: 0,
          marginRight: 0,
          marginTop: 0,
          marginBottom: 0,
          width: 375,
          height: NaN,
      }, 
      view8:{
      }, 
      view8Sliderios9:{
          paddingLeft: 0,
          paddingRight: 0,
          paddingTop: 0,
          paddingBottom: 0,
          marginLeft: 0,
          marginRight: 0,
          marginTop: 0,
          marginBottom: 0,
          width: 375,
          height: NaN,
      }, 
      view10:{
      }, 
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
})

AppRegistry.registerComponent('reactNative', () => reactNative);

