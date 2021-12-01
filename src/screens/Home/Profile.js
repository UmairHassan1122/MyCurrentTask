import React, { Component } from 'react'
import { Text, View, Image, StatusBar } from 'react-native'
import ProfileReuseable from '../../reuseable/ProfileReuseable'
import MaterialIcons from 'react-native-vector-icons/dist/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import EvilIcons from 'react-native-vector-icons/dist/EvilIcons';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';

export default class Profile extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <StatusBar barStyle={'dark-content'} backgroundColor="white" />
                <View>
                    <View style={{ justifyContent: "center", alignItems: "center", marginTop: 50, }}>
                        <Image source={require("../../assets/A.jpeg")} style={{ height: 100, width: 100, borderRadius: 50, padding: 10, borderWidth: 1, borderColor: "black" }} />
                        <Text style={{ fontSize: 18, fontWeight: "bold", color: "black" }}>Abdul Rehman</Text>
                    </View>

                </View>

                <View style={[{ backgroundColor: "white", marginHorizontal: 15, borderRadius: 15, marginTop: 2, height: 270, elevation: 5, marginTop: 20 }]}>
                    <ProfileReuseable title="My Account" icon={<MaterialIcons name="user" size={30} />} />
                    <ProfileReuseable title="My Orders" icon={<MaterialCommunityIcons name="border-none-variant" size={30} />} />
                    <ProfileReuseable title="My Address" icon={<EvilIcons name="location" size={30} />} />
                    <ProfileReuseable title="Edit Profile" icon={<AntDesign name="edit" size={30} />} />
                </View>
                <Text style={{ marginLeft: 15, marginTop: 10, fontSize: 18, fontWeight: "bold" }}>Settings</Text>
                <View style={[{ backgroundColor: "white", marginHorizontal: 15, borderRadius: 15, marginTop: 2, height: 270, elevation: 5, marginTop: 20 }]}>
                    <ProfileReuseable title="My Account" icon={<MaterialIcons name="user" size={30} />} />
                    <ProfileReuseable title="My Orders" icon={<MaterialCommunityIcons name="border-none-variant" size={30} />} />
                    <ProfileReuseable title="My Address" icon={<EvilIcons name="location" size={30} />} />
                    <ProfileReuseable title="Edit Profile" icon={<AntDesign name="edit" size={30} />} />
                </View>
            </View>
        )
    }
}
