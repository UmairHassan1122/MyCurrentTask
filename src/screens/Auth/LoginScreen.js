import React, { Component } from 'react'
import { Text, View, ScrollView, Image, ActivityIndicator } from 'react-native'
import English from '../../assets/Languages/English.json'
import LightTheme from '../../assets/Themes/LightTheme.json'
import DarkTheme from '../../assets/Themes/LightTheme.json'
import Button from '../../reuseable/Button'
import Input from '../../reuseable/Input'
import EmailIcon from 'react-native-vector-icons/Ionicons'
import { connect } from 'react-redux';
import Routes from '../../data/remote/Routes'
import WebHandler from '../../data/remote/WebHandler'
import PrefHandler from '../../data/local/PrefHandler'

const dataRequest = new WebHandler()


class LoginScreen extends Component {

    constructor() {
        super()

    }
    state = {
        email: '',
        checked: false,
        password: "",
        value: 0,
        loginStaus: false
    }


    userLogin = () => {
        var bodyParams = new FormData();
        if (this.state.email == "") {
            alert("Email is Required")
            return
        }
        else if (this.state.password == "") {
            alert("Password is Required")
            return
        }
        else {
            bodyParams.append("email", this.state.email);
            bodyParams.append("password", 123456);
            this.setState({ loginStaus: true })
            dataRequest.sendPostDataRequest(Routes.SIGNIN, bodyParams, (response) => {
                if (response.status) {
                    const prefs = new PrefHandler()
                    prefs.createSession(response.data, response.token, (isCreated) => {
                        if (isCreated) {
                            this.setState({ loginStaus: false })
                            this.props.navigation.reset({
                                index: 0,
                                routes: [{ name: 'HomeScreen' }],
                            });
                        } else {
                            alert("something went wrong..")
                            this.setState({ loginStaus: false })
                        }
                    })


                }
            })


        }

    }
    render() {
        const { email, password, checked, value } = this.state
        const { theme } = this.props
        return (
            <ScrollView contentContainerStyle={{
                flexGrow: 1,
                backgroundColor: theme ? LightTheme.Secondary_Color : DarkTheme.Secondary_Color
            }}>
                <View style={{
                    flex: 1,
                }}>
                    
                   
                    {/* //TODO Header View /////////////////////////////// */}
                    <View style={{
                        flex: 6,
                        backgroundColor: theme ? LightTheme.Secondary_Color : DarkTheme.Secondary_Color
                    }}>
                         <Image style={{ height: 250,  width: '100%' ,position:'absolute' }} source={require('../../assets/images/Auth/2.png')} />
                    </View>
                    {/* //TODO Bottom View /////////////////////////// */}
                    <View style={{
                        borderTopLeftRadius: 30,
                        borderTopRightRadius: 30,
                        backgroundColor: theme ? LightTheme.White_Color : DarkTheme.White_Color
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
                            color: theme ? LightTheme.Secondary_Text_Color : DarkTheme.Secondary_Text_Color,
                        }}>
                            {English.Login_Screen_Heading}
                        </Text>
                        <Text style={{
                            textAlign: 'center',
                            fontFamily: English.Regular_Font,
                            marginHorizontal: 50,
                            color: theme ? LightTheme.Secondary_Button_Text_Color : DarkTheme.Secondary_Button_Text_Color,
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
                        <Input title='Password'
                            bgStyle={{
                                marginTop: 10,
                                paddingBottom: 5,
                                paddingTop: 5,
                            }}
                            icon={<EmailIcon name={"mail-outline"} size={25} color={LightTheme.Black_Color} />}
                            keyboardType='email-address'
                            onChange={(txt) => this.setState({ password: txt })}
                        />
                        <Button title={English.Login_Screen_LoginButton}
                            bgStyle={{
                                marginTop: 30,
                                elevation: 3,
                                backgroundColor: theme ? LightTheme.Primary_Button_Color : DarkTheme.Primary_Button_Color,
                            }}
                            txtStyle={{
                                color: theme ? LightTheme.Primary_Button_Text_Color : DarkTheme.Primary_Button_Text_Color,
                            }}
                            onPress={() => this.userLogin()} />
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
                                color: theme ? LightTheme.Secondary_Button_Text_Color : DarkTheme.Secondary_Button_Text_Color,
                            }}
                            onPress={() => {
                                this.props.navigation.reset({
                                    index: 0,
                                    routes: [{ name: 'SignUpScreen' }],
                                })
                            }} />

                        {
                            this.state.loginStaus == true ? <ActivityIndicator size="large" color="#0000ff" style={{ position: "absolute", bottom: 150, left: 150 }} /> : null
                        }

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