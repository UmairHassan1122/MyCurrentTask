import React, { Component } from 'react'
import { Text, View, Image, Dimensions, StyleSheet } from 'react-native'
import PrefHandler from '../../data/local/PrefHandler';
import * as Animatable from 'react-native-animatable';
const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;
export default class SplashScreen extends Component {
    componentDidMount() {
        const prefs = new PrefHandler()
        prefs.getSession((response) => {
            if (response.token) {
                setTimeout(() => {
                    this.props.navigation.reset({
                        index: 0,
                        routes: [{ name: 'HomeScreen' }],
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
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "white" }}>
                <Animatable.Image style={styles.logo}
                    animation="fadeInRight"
                    duraton="4500" resizeMode="stretch" source={require('../../assets/images/Auth/Logo.png')} style={{ height: 300, width: 200, borderRadius: 50 }} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#009387'
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },

    logo: {
        width: height_logo,
        height: height_logo
    },

});