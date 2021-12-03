import React, { Component } from 'react'
import { Image, Text, View } from 'react-native'

export default class Tsting extends Component {
    render() {
        return (
            <View style={{}}>
                <Image source={require('../src/assets/images/Auth/1.png')} style={{ width: '100%', height: "50%", display: 'flex', justifyContent: 'center' }} />
                <View style={{ position: 'absolute', top: 10, left: 0, width: '100%', height: '50%', background: 'red' }}></View>
            </View>
        )
    }
}
