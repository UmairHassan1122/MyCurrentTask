import React, { Component } from 'react'
import { Text, View, ScrollView, Image } from 'react-native'
import English from '../../assets/Languages/English.json'
import LightTheme from '../../assets/Themes/LightTheme.json'
import DarkTheme from '../../assets/Themes/DarkTheme.json'
import Button from '../../reuseable/Button'
import Input from '../../reuseable/Input'
import EmailIcon from 'react-native-vector-icons/Ionicons'
import { connect } from 'react-redux';

class LoginScreen extends Component {

    constructor() {
        super()
        this.state = {
            email: '',
            checked: false,
            value: 0
        }
    }


    toggleTheme = () => {
        this.props.updateTheme(!this.props.theme)
        // this.props.updateLanguage(!this.props.Lang)
    }

    render() {
        return (
            <ScrollView contentContainerStyle={{
                flexGrow: 1,
                backgroundColor: this.props.theme ? LightTheme.Primary_Color : DarkTheme.Primary_Color
            }}>
                <View style={{
                    flex: 1,
                }}>

                    {/* //? Header View /////////////////////////////// */}
                    <View style={{
                        flex: 6,
                        backgroundColor: this.props.theme ? LightTheme.Primary_Color : DarkTheme.Primary_Color
                    }}>
                        <Button
                            title={English.Login_Screen_SkipButton}
                            bgStyle={{
                                alignSelf: 'flex-end',
                                marginRight: 20,
                                marginTop: 20,
                                borderRadius: 5,
                                paddingTop: 7,
                                paddingBottom: 4
                            }}
                            txtStyle={{
                                fontSize: 14,
                                fontFamily: English.Bold_Font,
                                color: this.props.theme ? LightTheme.Primary_Text_Color : DarkTheme.Primary_Text_Color,
                            }}
                            onPress={() => alert('Skip')} />
                    </View>

                    {/* //? Bottom View /////////////////////////// */}
                    <View style={{
                        borderTopLeftRadius: 30,
                        borderTopRightRadius: 30,
                        backgroundColor: this.props.theme ? LightTheme.White_Color : DarkTheme.White_Color
                    }}>

                        <View>
                            <Image
                                source={require('../../assets/images/Auth/Logo.png')}
                                style={{
                                    alignSelf: 'center',
                                    marginTop: 10,
                                    height: 93,
                                    width: 73,
                                    marginBottom: 10
                                }} />
                        </View>

                        <Text style={{
                            alignSelf: 'center',
                            fontFamily: 'Poppins-Bold',
                            fontSize: 20,
                            marginBottom: 20,
                            color: this.props.theme ? LightTheme.Secondary_Text_Color : DarkTheme.Secondary_Text_Color,
                        }}>
                            {English.Login_Screen_Heading}
                        </Text>

                        <Text style={{
                            textAlign: 'center',
                            fontFamily: English.Regular_Font,
                            marginHorizontal: 50,
                            color: this.props.theme ? LightTheme.Secondary_Button_Text_Color : DarkTheme.Secondary_Button_Text_Color,
                        }}>
                            {English.Login_Screen_Information}
                        </Text>

                        <Input title='Email'
                            bgStyle={{
                                marginTop: 30,
                                paddingBottom: 5,
                                paddingTop: 5,
                            }}
                            icon={<EmailIcon name={"mail-outline"} size={25} color={LightTheme.Black_Color} />}
                            keyboardType='email-address'
                            onChange={(txt) => this.setState({ email: txt })}
                        />

                        <Button title={English.Login_Screen_LoginButton}
                            bgStyle={{
                                marginTop: 30,
                                elevation: 3,
                                backgroundColor: LightTheme.Primary_Color,
                            }}
                            txtStyle={{
                                color: this.props.theme ? LightTheme.Secondary_Button_Text_Color : DarkTheme.Secondary_Button_Text_Color,
                            }}
                            onPress={() => this.toggleTheme()} />

                        <Button title={English.Login_Screen_CreateButton}
                            bgStyle={{
                                marginTop: 10,
                                backgroundColor: LightTheme.White_Color,
                                borderWidth: 2,
                                elevation: 3,
                                borderColor: LightTheme.Border_Color,
                                marginBottom: 20,
                            }}
                            txtStyle={{
                                color: this.props.theme ? LightTheme.Primary_Button_Text_Color : DarkTheme.Primary_Button_Text_Color,
                            }}
                            onPress={() => this.props.navigation.navigate('SignUpScreen')} />
                    </View>
                </View>
            </ScrollView>
        )
    }
}

const mapStateToProps = (state) => {

    // alert(JSON.stringify(state.Lang.language))
    return {
        Lang: state.Lang.language,
        theme: state.Theme.theme,

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updateTheme: (value) => dispatch({ type: 'UPDATE_THEME', mode: value }),
        updateLanguage: (value) => dispatch({ type: 'UPDATE_Language', mode: value }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)