import React, {Component} from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import colors from '../colors/color';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFont from 'react-native-vector-icons/FontAwesome5';
import IconFontisto from 'react-native-vector-icons/Fontisto';

  class Header extends Component{
  
    render(){

  return (
    <View style={{backgroundColor: colors.primary, paddingBottom:10}}>
      <StatusBar backgroundColor={colors.header} />
        <View style={{flexDirection:'row'}}>
          <TouchableOpacity onPress={this.props.onSlide}
          style={{padding: 6, paddingLeft: 10}}>
            <Icon name="menu" size={30} color={colors.white} />
          </TouchableOpacity>
          <View style={{marginLeft:20, paddingTop:6}}>
            <Text style={{color:colors.white, fontSize:18, fontWeight:'bold'}}>Popular</Text>
            <Text style={{color: colors.white, fontSize:14}}>Hot</Text>
          </View>
          <TouchableOpacity style={{margin: 10, paddingLeft:30}}>
            <IconFont name="caret-down" color={colors.white} size={18} />
          </TouchableOpacity>

          <View style={{alignSelf:"center", justifyContent: 'flex-end',flexDirection:"row", flex:1}}>
            <TouchableOpacity style={{paddingRight:20, paddingTop:5}}>
            <IconFontisto name="search" size={16} color={colors.white} />
            </TouchableOpacity>
            <TouchableOpacity style={{paddingRight:20}}>
            <Icon name="menu-open" size={20} color={colors.white} />
            </TouchableOpacity>
            <TouchableOpacity style={{paddingRight:20, paddingTop:6}}>
            <IconFontisto name="more-v-a" size={16} color={colors.white} />
            </TouchableOpacity>
          </View>
        </View>
    </View>
  );
}
};

export default Header;
