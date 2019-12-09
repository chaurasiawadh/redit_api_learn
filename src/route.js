import {Easing, Animated} from 'react-native';
import {createStackNavigator, createDrawerNavigator} from 'react-navigation';

import SlideMenu from './slideMenu/slideMenu';
import Home from './screen/home';

const transitionConfig = () => {
  return {
    transitionSpec: {
      duration: 750,
      easing: Easing.out(Easing.poly(10)),
      timing: Animated.timing,
      useNativeDriver: true,
    },
    screenInterpolator: sceneProps => {
      const {layout, position, scene} = sceneProps;
      const thisSceneIndex = scene.index;
      const width = layout.initWidth;
      const translateX = position.interpolate({
        inputRange: [thisSceneIndex - 1, thisSceneIndex],
        outputRange: [width, 0],
      });

      return {transform: [{translateX}]};
    },
  };
};

const AppNavigator = createStackNavigator(
  {
    Home: {screen: Home,
      navigationOptions: ({navigation}) => ({
        header: null,
      }),
    },
},

  {
    transitionConfig,
  },
    );
const Drawer = createDrawerNavigator(
  {
    AppNavigator: {screen: AppNavigator},
  },
  {
    contentComponent: SlideMenu,
    gestureEnabled: true,
    drawerWidth: 250,
  },
);
export default Drawer;
