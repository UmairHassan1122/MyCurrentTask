import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import LightTheme from '../../assets/Themes/LightTheme.json'
import English from '../../assets/Languages/English.json'
import Button from '../../reuseable/Button'
import Header from '../../reuseable/Header'
import EmailIcon from 'react-native-vector-icons/Feather'

export default class SignUpScreen extends Component {
    render() {
        return (
            <ScrollView contentContainerStyle={styles.container}>
                <Header title='text' 
                iconOnPress={()=>this.props.navigation.goBack()}
                icon={<EmailIcon name={"arrow-left"} size={25} color={LightTheme.Black_Color} />} />

                <View style={{}}>
                    <Text> SignUpScreen </Text>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: LightTheme.White_Color
    },



})