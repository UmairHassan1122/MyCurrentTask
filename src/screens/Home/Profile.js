import React, { Component } from 'react'
import { Text, View, Image, StatusBar, ScrollView, TouchableOpacity } from 'react-native'
import ProfileReuseable from '../../reuseable/ProfileReuseable'
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import EvilIcons from 'react-native-vector-icons/dist/EvilIcons';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import Feather from 'react-native-vector-icons/dist/Feather';
import SettingsReuseable from '../../reuseable/SettingsReuseable';
import ToggleSwitch from 'toggle-switch-react-native'


export default class Profile extends Component {
    state = {
        value: false
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <StatusBar barStyle={'dark-content'} backgroundColor="white" />
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    <View>
                        <View style={{ justifyContent: "center", alignItems: "center", marginTop: 50, }}>
                            <View style={{ backgroundColor: "white", elevation: 5, borderRadius: 55, }}>
                                <Image source={require("../../assets/A.jpeg")} style={{ height: 110, width: 110, borderRadius: 55, padding: 10, }} />
                            </View>
                            <Text style={{ fontSize: 18, marginTop: 5, color: "black", fontFamily: "Poppins-SemiBold" }}>Abdul Rehman</Text>
                        </View>

                    </View>

                    <View style={[{ backgroundColor: "white", marginHorizontal: 16, borderRadius: 15, marginTop: 2, height: 270, elevation: 3, marginTop: 20 }]}>
                        <ProfileReuseable title="My Account" icon={<AntDesign name="user" size={25} />} />
                        <ProfileReuseable title="My Orders" icon={<MaterialCommunityIcons name="border-none-variant" size={25} />} />
                        <ProfileReuseable title="My Address" icon={<EvilIcons name="location" size={25} />} />
                        <ProfileReuseable title="Edit Profile" icon={<AntDesign name="edit" size={25} />} />
                    </View>
                    <Text style={{ marginLeft: 16, marginTop: 10, fontSize: 18, fontWeight: "bold" }}>Settings</Text>
                    <View style={[{ backgroundColor: "white", marginHorizontal: 15, borderRadius: 15, height: 200, elevation: 3, marginTop: 10, marginBottom: 20 }]}>
                        <TouchableOpacity style={{ backgroundColor: "#fff", marginHorizontal: 20, borderBottomWidth: 1, borderBottomColor: "#DCDCDC", alignItems: 'center', marginTop: 10, padding: 5, }}>

                            <View style={{ flexDirection: "row" }}>
                                <View style={{ marginLeft: 10, backgroundColor: "#FFFAF0", height: 40, width: 40, borderRadius: 20, justifyContent: "center", alignItems: "center", }}>
                                    <MaterialIcons name="notifications-none" size={25} />
                                </View>
                                <Text style={{ padding: 8, flex: 1, fontFamily: 'Poppins-Regular', color: "black", marginTop: 5 }}>Mute Notifications</Text>
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
                        <TouchableOpacity style={{ backgroundColor: "#fff", marginHorizontal: 20, borderBottomWidth: 1, borderBottomColor: "#DCDCDC", alignItems: 'center', marginTop: 10, padding: 5, }}>

                            <View style={{ flexDirection: "row" }}>
                                <View style={{ marginLeft: 10, backgroundColor: "#FFFAF0", height: 40, width: 40, borderRadius: 20, justifyContent: "center", alignItems: "center", }}>
                                    <Feather name="globe" size={25} />
                                </View>
                                <Text style={{ padding: 8, flex: 1, fontFamily: 'Poppins-Regular', color: "black", marginTop: 5 }}>Language</Text>
                                <View style={{ marginLeft: 10, height: 40, width: 50, borderRadius: 20, justifyContent: "center", alignItems: "center", }}>
                                    <Text>English</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ backgroundColor: "#fff", marginHorizontal: 20, borderBottomWidth: 1, borderBottomColor: "#DCDCDC", alignItems: 'center', marginTop: 10, padding: 5, }}>

                            <View style={{ flexDirection: "row" }}>
                                <View style={{ marginLeft: 10, backgroundColor: "#FFFAF0", height: 40, width: 40, borderRadius: 20, justifyContent: "center", alignItems: "center", }}>
                                    <MaterialIcons name="privacy-tip" size={25} />
                                </View>
                                <Text style={{ padding: 8, flex: 1, fontFamily: 'Poppins-Regular', color: "black", marginTop: 5 }}>Privacy & Policy</Text>
                                <View style={{ marginLeft: 10, height: 40, width: 50, borderRadius: 20, justifyContent: "center", alignItems: "center", }}>
                                    <AntDesign name="right" size={20} />
                                </View>
                            </View>
                        </TouchableOpacity>


                    </View>
                </ScrollView>
            </View>
        )
    }
}
