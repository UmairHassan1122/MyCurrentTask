import React, { Component } from 'react'
import { Text, View } from 'react-native'
import PrefHandler from '../../data/local/PrefHandler';

export default class SplashScreen extends Component {
    componentDidMount() {
        const prefs = new PrefHandler()
        prefs.getSession((response) => {
            if (response.token) {
                setTimeout(() => {
                    this.props.navigation.reset({
                        index: 0,
                        routes: [{ name: 'LoginScreen' }],
                    });
                }, 2000);
            }
            else {
                setTimeout(() => {
                    this.props.navigation.reset({
                        index: 0,
                        routes: [{ name: 'LoginScreen' }],
                    });
                }, 2000);
            }
        })

    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text> This is  SplashScreen </Text>
            </View>
        )
    }
}
