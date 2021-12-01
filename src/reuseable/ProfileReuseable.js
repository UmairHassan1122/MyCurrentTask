import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class ProfileReuseable extends Component {
    render() {
        return (
            <View style={{ backgroundColor: "#fff", marginHorizontal: 20, elevation: 5, flexDirection: 'row', alignItems: 'center', marginTop: 10, padding: 5 }}>

                <View style={{ marginLeft: 10, backgroundColor: "#FFFAF0", height: 40, width: 40, borderRadius: 20, justifyContent: "center", alignItems: "center", }}>
                    {this.props.icon}
                </View>

                <Text style={{ padding: 8, flex: 1, fontFamily: 'Poppins-Regular', marginTop: 5 }}>{this.props.title}</Text>

            </View>
        )
    }
}
