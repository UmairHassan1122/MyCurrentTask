import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

/////////// Auth Screens /////////////
import LoginScreen from './src/screens/Auth/LoginScreen'
import SignUpScreen from './src/screens/Auth/SignUpScreen'
import SplashScreen from './src/screens/Auth/SplashScreen'

const Stack = createStackNavigator();

export default class Navigator extends Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    {/* Auth Screens */}
                    <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ ...TransitionPresets.SlideFromRightIOS,}} />
                    <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{ ...TransitionPresets.SlideFromRightIOS,  }} />
                    <Stack.Screen name="SplashScreen" component={SplashScreen} options={{...TransitionPresets.SlideFromRightIOS,}} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}
