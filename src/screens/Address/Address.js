import React, { Component } from 'react'
import { Text, View, SafeAreaView, Image } from 'react-native'
import { Surface } from 'react-native-paper'
import { connect } from 'react-redux';
import Button from '../../reuseable/Button'
import English from '../../assets/Languages/English.json'
import LightTheme from '../../assets/Themes/LightTheme.json'


class Address extends Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ justifyContent: "center", alignItems: "center", flex: 1, marginHorizontal: 16 }}>
                    <Image source={require('../../assets/images/Address.png')} style={{ height: 200, width: 200 }} />
                    <View>
                        <Text style={{ fontFamily: "Poppins-SemiBold", fontSize: 18, marginTop: 10 }}>No Adresses</Text>
                    </View>
                    <Text style={{ fontFamily: "Poppins-SemiBold", fontSize: 14, marginTop: 10, marginBottom: 50 }}>It seems like you don’t have saved addresses</Text>
                </View>
                <Button title={English.Addrss_Screen_AddButton}
                    bgStyle={{
                        marginTop: 30,
                        elevation: 3,
                        marginBottom: 10,
                        backgroundColor: LightTheme.Primary_Button_Color
                    }}
                    txtStyle={{
                        color: LightTheme.Primary_Button_Text_Color
                    }}
                    onPress={() => { this.props.navigation.navigate("AddNewAddress") }} />
            </SafeAreaView>
        )
    }
}


export default (Address)