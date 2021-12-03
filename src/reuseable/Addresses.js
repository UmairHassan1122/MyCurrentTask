import React, { Component } from 'react'
import { Image, Text, View } from 'react-native'
import Header from '../reuseable/Header'
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';


export default class Addresses extends Component {
    render() {
        return (
            <View>
                <Header
                    iconOnPress={() => this.props.navigation.goBack()}
                    icon={<Image source={require('../assets/images/Auth/back.png')} style={{ height: 20, width: 30 }} />} title="Addresses" txtStyle={{ marginLeft: 80, fontSize: 18, fontFamily: "Poppins-SemiBold", color: "black" }} />
                <View style={{ marginHorizontal: 16, borderWidth: 2, borderColor: "green", marginTop: 10, height: 150, borderRadius: 5 }} >
                    <View style={{ flexDirection: "row" }}>
                        <View style={{ height: 40, width: 40, borderRadius: 20, backgroundColor: "#BFC9CA", justifyContent: "center", alignItems: "center", margin: 10 }}>
                            <AntDesign name="home" size={20} />
                        </View>
                        <View style={{ justifyContent: "center", alignItems: "center", marginLeft: 8 }}>
                            <Text style={{ fontSize: 13, fontFamily: "Poppins-SemiBold", color: "black" }}>Home Address</Text>
                        </View>
                        <View style={{ justifyContent: "center", alignItems: "center", backgroundColor: "#E9967A", borderRadius: 12, padding: 7, height: 32, marginTop: 13, marginLeft: 10 }}>
                            <Text style={{ color: "red" }}>Default</Text>
                        </View>


                    </View>
                    <Text style={{ marginLeft: 10, fontSize: 15 }}>Khartoum, bahry - street 613 - hay</Text>
                    <Text style={{ marginLeft: 10, marginTop: 5, fontSize: 15 }}>alzohor</Text>
                    <Text style={{ marginLeft: 10, marginTop: 10, fontSize: 15 }}>a@gmail.com</Text>
                    <View style={{ height: 50, width: 50, borderRadius: 25, elevation: 3, backgroundColor: "white", justifyContent: "center", alignItems: "center", marginTop: 20, position: "absolute", right: 20 }}>
                        {/* <AntDesign name="home" size={20} /> */}
                        <Image source={require('../assets/images/google.jpeg')} style={{ height: 50, width: 50, borderRadius: 25 }} />
                    </View>
                </View>
                <View style={{ marginHorizontal: 16, borderWidth: 2, borderColor: "green", marginTop: 10, height: 150, borderRadius: 5 }}>
                    <View style={{ flexDirection: "row" }}>
                        <View style={{ height: 40, width: 40, borderRadius: 20, backgroundColor: "#BFC9CA", justifyContent: "center", alignItems: "center", margin: 10 }}>
                            <MaterialIcons name="shopping-bag" size={20} />
                        </View>
                        <View style={{ justifyContent: "center", alignItems: "center", marginLeft: 2 }}>
                            <Text style={{ fontSize: 15, fontFamily: "Poppins-SemiBold", color: "black" }}>Office</Text>
                        </View>
                        {/* <View style={{ justifyContent: "center", alignItems: "center", backgroundColor: "green", borderRadius: 12, padding: 7, height: 32, marginTop: 13, marginLeft: 10 }}>
                            <Text style={{ color: "red" }}>Default</Text>
                        </View> */}


                    </View>
                    <Text style={{ marginLeft: 10, fontSize: 15 }}>Khartoum, bahry - street 613 - hay</Text>
                    <Text style={{ marginLeft: 10, marginTop: 5, fontSize: 15 }}>alzohor</Text>
                    <Text style={{ marginLeft: 10, marginTop: 10, fontSize: 15 }}>a@gmail.com</Text>
                    <View style={{ height: 50, width: 50, borderRadius: 25, elevation: 3, backgroundColor: "white", justifyContent: "center", alignItems: "center", marginTop: 20, position: "absolute", right: 20 }}>
                        {/* <AntDesign name="home" size={20} /> */}
                        <Image source={require('../assets/images/google.jpeg')} style={{ height: 50, width: 50, borderRadius: 25 }} />
                    </View>
                </View>


            </View >
        )
    }
}
