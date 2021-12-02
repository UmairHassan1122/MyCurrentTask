import React from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { check, PERMISSIONS, RESULTS, request } from 'react-native-permissions';
import Geolocation from 'react-native-geolocation-service';
import Geocoder from 'react-native-geocoder';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import English from '../../assets/Languages/English.json'
const { width, height } = Dimensions.get('window');
class Home extends React.Component {

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
        Distance: 0, Time: 0, hasLocationPermission: false

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
            alert(JSON.stringify(response[0].formattedAddress))
            this.setState({ pickupCords: { latitude: lat, longitude: lng, latitudeDelta: 0.3, longitudeDelta: 0.8, Address: response[0].formattedAddress } })




        })
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ height: 40, width: "100%", marginTop: 10 }}>
                    <GooglePlacesAutocomplete
                        placeholder="search"
                        fetchDetails={true}
                        GooglePlacesSearchQuery={{
                            rankby: "distance"
                        }}

                        onPress={(data, details = null) => {
                            this.getAddress(details.geometry.location.lat, details.geometry.location.lng);


                        }}
                        query={{
                            key: English.Google_Key,
                            language: 'en',
                            components: "country:pak",
                            types: "establishment",
                        }}

                        styles={{

                            container: { flex: 0, position: "absolute", width: "100%", zIndex: 1 }, listView: { backgroundColor: "white" }
                        }}
                    />
                </View>
                <View style={{ flex: 4 }}>
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
                <View style={{ flex: 1, justifyContent: "center", flexDirection: "row", alignItems: "center", backgroundColor: "red", borderTopRightRadius: 15, borderTopLeftRadius: 15 }}>
                    <Text style={{ marginLeft: 30, color: "white" }}>{this.state.Distance} km</Text>
                    <Text style={{ marginLeft: 30, color: "white" }}>{(this.state.Time / 60).toFixed(2)} hrs</Text>
                </View>
            </View>
        )
    }
}

export default Home;