import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Switch } from 'react-native'
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import ToggleSwitch from 'toggle-switch-react-native'

export default class SettingsReuseable extends Component {
    state = {
        value: false
    }
    render() {
        return (
            <TouchableOpacity style={{ backgroundColor: "#fff", marginHorizontal: 20, borderBottomWidth: 1, borderBottomColor: "#DCDCDC", alignItems: 'center', marginTop: 10, padding: 5, }}>

                <View style={{ flexDirection: "row" }}>
                    <View style={{ marginLeft: 10, backgroundColor: "#FFFAF0", height: 40, width: 40, borderRadius: 20, justifyContent: "center", alignItems: "center", }}>
                        {this.props.icon}
                    </View>
                    <Text style={{ padding: 8, flex: 1, fontFamily: 'Poppins-Regular', marginTop: 5 }}>{this.props.title}</Text>
                    <View style={{ marginLeft: 10, height: 40, width: 40, borderRadius: 20, justifyContent: "center", alignItems: "center", }}>
                        <ToggleSwitch
                            isOn={this.state.value}
                            onColor="green"
                            offColor="red"
                            labelStyle={{ color: "black", fontWeight: "900" }}
                            size="medium"
                            onToggle={isOn => { this.setState({ value: isOn }) }}
                        />
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}
