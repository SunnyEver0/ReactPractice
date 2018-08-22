import * as React from 'react';
import {
    createBottomTabNavigator,
    createStackNavigator,
} from 'react-navigation';

import { HomeScreen, SurpriseScreen, MyScreen } from './src/screens';


const HomeStack = createStackNavigator({
    Home: HomeScreen,
});

const MyStack = createStackNavigator({
    My: MyScreen,
});

const SurpriseStack = createStackNavigator({
    Surprise: SurpriseScreen
});

export default createBottomTabNavigator(
    {
        Home: HomeStack,
        Surprise: SurpriseStack,
        My: MyStack,
    },
    {
        /* Other configuration remains unchanged */
    }
);
