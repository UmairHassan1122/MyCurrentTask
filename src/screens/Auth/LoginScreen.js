import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView, Image } from 'react-native'
import LightTheme from '../../assets/Themes/LightTheme.json'
import English from '../../assets/Languages/English.json'
import Button from '../../reuseable/Button'
import Input from '../../reuseable/Input'
import EmailIcon from 'react-native-vector-icons/Ionicons'

export default class LoginScreen extends Component {

    constructor() {
        super()
        this.state = {
            email: ''
        }
    }

    render() {
        return (
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={styles.container}>
                    {/* Header View */}
                    <View style={styles.Header_Container}>
                        <Button
                            title={English.Login_Screen_SkipButton}
                            bgStyle={styles.Skip_Button}
                            txtStyle={styles.Skip_Text}
                            onPress={() => alert('Skip')} />
                    </View>

                    {/* Bottom View */}
                    <View style={styles.Bottom_Container}>

                        <View>
                            <Image
                                source={require('../../assets/images/Auth/Login.png')}
                                style={styles.Login_Logo} />
                        </View>

                        <Text style={styles.Heading}>
                            {English.Login_Screen_Heading}
                        </Text>

                        <Text style={styles.Information}>
                            {English.Login_Screen_Information}
                        </Text>

                        <Input title='Email'
                            bgStyle={styles.Email_Input}
                            icon={<EmailIcon name={"mail-outline"} size={25} color={LightTheme.Black_Color} />}
                            keyboardType='email-address'
                            onChange={(txt) => this.setState({ email: txt })}
                        />

                        <Button title={English.Login_Screen_LoginButton}
                            bgStyle={styles.Login_Button}
                            txtStyle={styles.Login_Button_Txt}
                            onPress={() => alert('Login')} />

                        <Button title={English.Login_Screen_CreateButton}
                            bgStyle={styles.Create_Button}
                            txtStyle={styles.Create_Button_Txt}
                            onPress={() => this.props.navigation.navigate('SignUpScreen')} />
                    </View>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: LightTheme.Primary_Color
    },

    ////// Header_Container Styling /////////////
    Header_Container: {
        flex: 6,
        backgroundColor: LightTheme.Primary_Color
    },

    Skip_Button: {
        // backgroundColor: LightTheme.White_Color,
        alignSelf: 'flex-end',
        marginRight: 20,
        marginTop: 20,
        borderRadius: 5,
        paddingTop: 7,
        paddingBottom: 4
    },

    Skip_Text: {
        fontSize: 14,
        fontFamily: 'Poppins-Bold',
        color: LightTheme.White_Color
    },

    ////// Bottom_Container Styling /////////////
    Login_Logo: {
        alignSelf: 'center',
        marginTop: 10
    },

    Bottom_Container: {
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor: LightTheme.White_Color
    },

    Heading: {
        alignSelf: 'center',
        fontFamily: 'Poppins-Bold',
        fontSize: 20,
        marginBottom: 20,
        color: LightTheme.Black_Color
    },

    Information: {
        textAlign: 'center',
        fontFamily: 'Poppins-Regular',
        marginHorizontal: 50,
    },

    Email_Input: {
        marginTop: 30,
        paddingBottom: 5,
        paddingTop: 5,
    },

    Login_Button: {
        marginTop: 30,
        elevation: 3,
        backgroundColor: LightTheme.Primary_Color,
    },

    Login_Button_Txt: {
        color: LightTheme.White_Color
    },

    Create_Button: {
        marginTop: 10,
        backgroundColor: LightTheme.White_Color,
        borderWidth: 2,
        elevation: 3,
        borderColor: LightTheme.Border_Color,
        marginBottom: 20,
    },

    Create_Button_Txt: {
        color: LightTheme.Black_Color
    }
})