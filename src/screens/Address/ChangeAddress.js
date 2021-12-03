import React, { useState } from 'react';
import { Text, View, StyleSheet, Dimensions, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { check, PERMISSIONS, RESULTS, request } from 'react-native-permissions';
import Geolocation from 'react-native-geolocation-service';
import Geocoder from 'react-native-geocoder';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import English from '../../assets/Languages/English.json'
const { width, height } = Dimensions.get('window');
import Button from '../../reuseable/Button'
import LightTheme from '../../assets/Themes/LightTheme.json'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import Header from '../../reuseable/Header'
import Input from '../../reuseable/Input'
import DropDownPicker from 'react-native-dropdown-picker';
import { tsThisType } from '@babel/types';
import { color } from 'react-native-reanimated';
import PhoneInput from "react-native-phone-number-input";

class ChangeAddress extends React.Component {

    state = {
        open: false,
        value: "",
        items: [
            { label: 'Apple', value: 'apple' },
            { label: 'Banana', value: 'banana' }
        ]
    }
    componentDidMount() {
        check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)
            .then((result) => {
                switch (result) {
                    case RESULTS.DENIED:
                        request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION).then((result) =>
                            console.log(JSON.stringify(result + "ahooooo")))
                        this.getCurrentLatLon()
                        break;
                    case RESULTS.GRANTED:
                        this.setState({ hasLocationPermission: true })
                        this.getCurrentLatLon()
                        break;


                }
            })
            .catch((error) => {
                console.log("Error")
            });

    }

    state = {
        pickupCords: { latitude: 28.4212, longitude: 70.2989, latitudeDelta: 0.0922, longitudeDelta: 0.0421, Address: "Rahim Yar Khan, Punjab, Pakistan" }, droplocationCords: { latitude: 31.5204, longitude: 74.3587, latitudeDelta: 0.0922, longitudeDelta: 0.0421, },
        Distance: 0, Time: 0, hasLocationPermission: false, address: ""

    }



    getCurrentLatLon = () => {

        Geolocation.getCurrentPosition(
            (position) => {

                this.getAddress(position.coords.latitude, position.coords.longitude);
            },
            (error) => {

                console.log(error.code, error.message);
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );

    }


    getAddress = (lat, lng) => {
        Geocoder.geocodePosition({ lat, lng }).then(response => {
            // alert(JSON.stringify(response[0].formattedAddress))
            this.setState({ pickupCords: { latitude: lat, longitude: lng, latitudeDelta: 0.3, longitudeDelta: 0.8, Address: response[0].formattedAddress }, address: response[0].formattedAddress })




        })
    }


    DropDown = () => {
        const [open, setOpen] = useState(false);
        const [value, setValue] = useState(null);
        const [items, setItems] = useState([
            { label: 'Apple', value: 'apple' },
            { label: 'Banana', value: 'banana' }
        ]);

        return (
            <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                searchable={true}
                translation={{
                    PLACEHOLDER: "   Home",


                }}
                onChangeValue={(value) => {
                    alert(value)
                }}
                style={{ borderRadius: 30, borderColor: "white", elevation: 5, height: 58 }}
            />
        );
    }
    render() {
        return (
            <ScrollView>
                <Header
                    iconOnPress={() => this.props.navigation.goBack()}
                    icon={<Image source={require('../../assets/images/Auth/back.png')} style={{ height: 20, width: 30 }} />} title="Add Address" txtStyle={{ marginLeft: 80, fontSize: 18, fontFamily: "Poppins-SemiBold", color: "black" }} />
                <View style={{ justifyContent: "space-between", flexDirection: "row", marginTop: 10, marginHorizontal: 16 }}>
                    <Text style={{ fontSize: 14, fontFamily: "Poppins-SemiBold", color: "black" }}>My Address</Text>
                    <Text style={{ color: "red" }}>Change</Text>

                </View>
                <View style={{ height: 180, marginHorizontal: 16, borderRadius: 5, marginTop: 5, elevation: 3 }}>
                    <MapView style={StyleSheet.absoluteFillObject}
                        initialRegion={this.state.pickupCords}
                        ref={e => this.mapref = e}
                        region={this.state.pickupCords}
                    >

                        <MapView.Marker
                            pinColor="black"
                            draggable={true}
                            onDragStart={(e) => { console.log("Drag start ==> " + JSON.stringify(e.nativeEvent.coordinate)) }}
                            onDragEnd={(e) => { this.getAddress(e.nativeEvent.coordinate.latitude, e.nativeEvent.coordinate.longitude) }}
                            coordinate={this.state.pickupCords}
                            title={"Location Title"}
                            description={this.state.pickupCords.Address}
                        />
                    </MapView>
                </View>
                <View>
                    <Text style={{ color: "black", fontFamily: "Poppins-SemiBold", marginHorizontal: 16, marginTop: 20 }}>Area</Text>
                    <Input title='Email'
                        bgStyle={{
                            marginTop: 5,
                            paddingBottom: 5,
                            paddingTop: 5
                        }}

                        keyboardType='email-address'
                        onChange={(txt) => this.setState({ email: txt })}
                    />
                    <Text style={{ color: "black", fontFamily: "Poppins-SemiBold", marginHorizontal: 16, marginTop: 10 }}>Address Type</Text>
                    <View style={{ marginHorizontal: 16 }}>
                        <this.DropDown />
                    </View>

                    <Text style={{ color: "black", fontFamily: "Poppins-SemiBold", marginHorizontal: 16, marginTop: 10 }}>Street</Text>
                    <Input title='Street'
                        bgStyle={{
                            marginTop: 5,
                            paddingBottom: 5,
                            paddingTop: 5
                        }}

                        keyboardType='email-address'
                        onChange={(txt) => this.setState({ email: txt })}
                    />
                    <Text style={{ color: "black", fontFamily: "Poppins-SemiBold", marginHorizontal: 16, marginTop: 10 }}>Apartment</Text>
                    <Input title='Apartment'
                        bgStyle={{
                            marginTop: 5,
                            paddingBottom: 5,
                            paddingTop: 5
                        }}

                        keyboardType='email-address'
                        onChange={(txt) => this.setState({ email: txt })}
                    />

                    <Text style={{ color: "black", fontFamily: "Poppins-SemiBold", marginHorizontal: 16, marginTop: 10 }}>Phone Number</Text>
                    <PhoneInput
                        containerStyle={{ marginLeft: 25, marginTop: 10, borderRadius: 30, width: 315, height: 62 }}
                        textContainerStyle={{ borderRadius: 30, backgroundColor: "white" }}
                        textInputStyle={{ fontSize: 18, color: "black", alignItems: "center", alignSelf: "center" }}
                        defaultCode="PK"
                        layout="first"
                        onChangeCountry={(text) => { alert(text) }}
                        onChangeText={(text) => { alert(text) }}
                        placeholder="Enter Phone Number"
                        onChangeFormattedText={(text) => { alert(text) }}
                        withShadow
                    />

                    <Button title={English.Address_Screen_AddNewButton}
                        bgStyle={{
                            marginTop: 30,
                            elevation: 3,
                            backgroundColor: LightTheme.Primary_Button_Color
                        }}
                        txtStyle={{
                            color: LightTheme.Primary_Button_Text_Color
                        }}
                        onPress={() => this.userLogin()} />

                </View>

            </ScrollView>
        )
    }
}

export default ChangeAddress;