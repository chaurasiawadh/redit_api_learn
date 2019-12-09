import React, {Component} from 'react';
import {
  View,
  Text,
  Linking,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {DrawerActions, StackActions, NavigationActions} from 'react-navigation';
import IconFont from 'react-native-vector-icons/FontAwesome5';
import colors from '../component/colors/color';
import {styles} from "../styles/slideMenu";
class SlideMenu extends Component {
  constructor() {
    super();
    this.state = {toggleDown: true};
  }
  favSlide = name => {
    DrawerActions.closeDrawer();
    const resetAction = StackActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({
          routeName: 'Home',
          params: {name},
        }),
      ],
    });
    this.props.navigation.dispatch(resetAction);
  };

  home = () => {
    DrawerActions.closeDrawer();
    const resetAction = StackActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({
          routeName: 'Home',
        }),
      ],
    });
    this.props.navigation.dispatch(resetAction);
  };

  toggleSideMenuFolderList = () => {
    this.setState({toggleDown: !this.state.toggleDown});
  };

  render() {
    return (
      <View>
        <ScrollView>
          <View style={styles.headView}>
            <TouchableOpacity
              onPress={() => this.toggleSideMenuFolderList()}
              style={styles.touchable}>
              <Text style={styles.headerTitle}>Anonymous</Text>
              {this.state.toggleDown ? (
                <IconFont name="caret-down" color={colors.white} size={18} />
              ) : (
                <IconFont name="caret-up" color={colors.white} size={18} />
              )}
            </TouchableOpacity>
          </View>
          {this.state.toggleDown ? (
            <View>
              <TouchableOpacity
                onPress={() => this.home()}
                style={styles.subCard}>
                <Text style={styles.txt}>Home</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.favSlide(true)}
                style={styles.subCard}>
                <Text style={styles.txt}>Favourite</Text>
              </TouchableOpacity>
            </View>
          ) : null}
        </ScrollView>
      </View>
    );
  }
}

export default SlideMenu;

