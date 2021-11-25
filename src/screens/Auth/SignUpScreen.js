import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import LightTheme from '../../assets/Themes/LightTheme.json'
import English from '../../assets/Languages/English.json'
import Button from '../../reuseable/Button'
import Header from '../../reuseable/Header'
import Input from '../../reuseable/Input'
import BackIcon from 'react-native-vector-icons/Feather'
import EmailIcon from 'react-native-vector-icons/Ionicons'

export default class SignUpScreen extends Component {

    constructor() {
        super()
        this.state = {
            email: ''
        }
    }

    render() {
        return (
            <ScrollView contentContainerStyle={styles.container}>
                <Header
                    iconOnPress={() => this.props.navigation.goBack()}
                    icon={<BackIcon name={"arrow-left"} size={25} color={LightTheme.Black_Color} />} />

                <View style={{ alignSelf: 'center' }}>
                    <Text style={styles.Heading}>{English.Signup_Screen_Heading}</Text>
                </View>

                <View style={{ alignSelf: 'center' }}>
                    <Text style={styles.Information}>{English.Signup_Screen_Information}</Text>
                </View>

                <Input title='Email'
                    bgStyle={styles.Email_Input}
                    icon={<EmailIcon name={"mail-outline"} size={25} color={LightTheme.Black_Color} />}
                    keyboardType='email-address'
                    onChange={(txt) => this.setState({ email: txt })}
                />
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: LightTheme.White_Color
    },

    Heading: {
        fontSize: 20,
        fontFamily: English.Bold_Font,
        color: LightTheme.Black_Color,
        marginTop: 80
    },

    Information: {
        textAlign: 'center',
        fontFamily: English.Regular_Font,
        marginHorizontal: 50,
    },

    Email_Input: {
        marginTop: 30,
        paddingBottom: 5,
        paddingTop: 5,
    },


})