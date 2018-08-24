import * as React from "react";

import { HomeScreen, MyScreen, SurpriseScreen } from "./src/screens";
import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";

import Icon from "react-native-vector-icons/Ionicons";
import { Text } from "react-native";

const HomeStack = createStackNavigator({
  Home: HomeScreen
});

const MyStack = createStackNavigator({
  My: MyScreen
});

const SurpriseStack = createStackNavigator({
  Surprise: SurpriseScreen
});

export default createBottomTabNavigator(
  {
    Home: HomeStack,
    Surprise: SurpriseStack,
    My: MyStack
  },
  {
    /* Other configuration remains unchanged */
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "Home") {
          iconName = `ios-information-circle${focused ? "" : "-outline"}`;
        } else if (routeName === "My") {
          iconName = "ios-options";
        } else if (routeName === "Surprise") {
          iconName = "ios-aperture";
        }
        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Icon name={iconName} size={28} color={tintColor} />;
      },
      tabBarLabel: () => {
        const { routeName } = navigation.state;
        let textName = "";
        if (routeName === "Home") {
          textName = "主页";
        } else if (routeName === "My") {
          textName = "我的";
        } else if (routeName === "Surprise") {
          textName = "惊喜";
        }
        return <Text style={{ fontSize: 12 }}>{textName}</Text>;
      }
    }),
    tabBarOptions: {
      activeTintColor: "tomato",
      inactiveTintColor: "gray"
    }
  }
);
