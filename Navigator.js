import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/dist/AntDesign';
import Categories from './src/screens/Home/Categories';



/////////// Auth Screens /////////////
import LoginScreen from './src/screens/Auth/LoginScreen'
import SignUpScreen from './src/screens/Auth/SignUpScreen'
import SplashScreen from './src/screens/Auth/SplashScreen'
import OnBoardingScreen from './src/screens/Auth/OnBoardingScreen'
import Home from './src/screens/Home/Home';
import Profile from './src/screens/Home/Profile';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
export default class Navigator extends Component {
    MyTabs = () => {
        return (
            <Tab.Navigator screenOptions={{ headerShown: false }} tabBarOptions={{
                showLabel: false,

                style: {
                    position: "absolute",
                    bottom: 2,
                    left: 2,
                    right: 2,
                    elevation: 0,
                    backgroundColor: '#009387',
                    borderRadius: 8,
                    height: 60,
                    ...sty.shadow
                }
            }}>
                <Tab.Screen name="Home" component={Home} options={{
                    title: "Home",
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: "center", justifyContent: "center", top: 5 }}>

                            <Image
                                source={require("./src/assets/images/Home.png")}
                                resizeMode="contain"
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? '#e32f45' : 'black'
                                }}
                            />
                            <Text style={{ color: focused ? '#e32f45' : 'black', fontSize: 12 }}>Chats</Text>
                        </View>
                    )
                }} />
                <Tab.Screen name="Cart" component={Home} options={{
                    title: "Home",
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: "center", justifyContent: "center", top: 5 }}>

                            <Image
                                source={require("./src/assets/images/Cart.png")}
                                resizeMode="contain"
                                style={{
                                    width: 29,
                                    height: 29,
                                    tintColor: focused ? '#e32f45' : 'black'
                                }}
                            />
                            <Text style={{ color: focused ? '#e32f45' : 'black', fontSize: 12 }}>Cart</Text>
                        </View>
                    )
                }} />
                <Tab.Screen name="Profile" component={Profile} options={{
                    title: "Home",
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: "center", justifyContent: "center", top: 5 }}>

                            <Image
                                source={require("./src/assets/images/Profile.png")}
                                resizeMode="contain"
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? '#e32f45' : 'black'
                                }}
                            />
                            <Text style={{ color: focused ? '#e32f45' : 'black', fontSize: 12 }}>Profile</Text>
                        </View>
                    )
                }} />
            </Tab.Navigator>
        );
    }
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    
                    {/* Auth Screens */}
                    <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ ...TransitionPresets.SlideFromRightIOS, }} />
                    <Stack.Screen name="OnBoardingScreen" component={OnBoardingScreen} options={{ ...TransitionPresets.SlideFromRightIOS, }} />
                    <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ ...TransitionPresets.SlideFromRightIOS, }} />
                    <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{ ...TransitionPresets.SlideFromRightIOS, }} />
                    <Stack.Screen name="HomeScreen" component={this.MyTabs} options={{ ...TransitionPresets.SlideFromRightIOS, }} />
                    <Stack.Screen name="Categories" component={Categories} options={{ ...TransitionPresets.SlideFromRightIOS, }} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}
const sty = StyleSheet.create({
    shadow: {
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    }
});