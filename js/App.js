/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View, Text ,Button, Image,Dimensions} from 'react-native';
import { StackNavigator,TabNavigator, CardStackTransitioner} from 'react-navigation';

import HomePage from './HomePage'
import LoginPage from './LoginPage'
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator'

const { width ,height} = Dimensions.get('window')

const HomeScreen = ({ navigation }) => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
            onPress={() => navigation.navigate('Details')}
            title="Go to details"
        />
    </View>
);


const DetailsScreen = () => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
    </View>
);

const TransitionConfiguration = () => ({
    screenInterpolator: (sceneProps) => {
        const { scene } = sceneProps;
        const { route } = scene;
        const params = route.params || {};
        const transition = params.transition || 'forHorizontal';
        return CardStackStyleInterpolator[transition](sceneProps);
    },
});



function navigationOptions(title) {
    return {
        title: title,
        headerTintColor: "black",
        headerStyle: {backgroundColor:'white'
        },
        headerBackTitle: "返回",
        headerTitle: (
            <View style={{marginRight: 0,flex:1,justifyContent:'center', alignItems:'center',width:width*0.7}}>
                <Text>{title}</Text>
            </View>
        ),
    }
}


const setup = StackNavigator({


    HomePage: {
        screen: HomePage,
        navigationOptions: {
            headerTintColor: "white",
            headerStyle: {backgroundColor:'white'},
        }
    },
    LoginPage: {
        screen: LoginPage,
        headerMode: 'none',
        mode: "modal",
        navigationOptions: navigationOptions("登录")
    },

},{
    transitionConfig:TransitionConfiguration
});


export default setup;
