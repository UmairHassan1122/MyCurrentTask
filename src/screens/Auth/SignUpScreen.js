import React, { Component } from 'react'
import { Text, View, ScrollView, Image, ActivityIndicator } from 'react-native'
import LightTheme from '../../assets/Themes/LightTheme.json'
import DarkTheme from '../../assets/Themes/DarkTheme.json'
import English from '../../assets/Languages/English.json'
import Button from '../../reuseable/Button'
import Header from '../../reuseable/Header'
import Input from '../../reuseable/Input'
import BackIcon from 'react-native-vector-icons/Feather'
import EmailIcon from 'react-native-vector-icons/Ionicons'
import MaleIcon from 'react-native-vector-icons/Fontisto'
import FemaleIcon from 'react-native-vector-icons/Fontisto'
import { Checkbox } from 'react-native-paper';
import Routes from '../../data/remote/Routes'
import WebHandler from '../../data/remote/WebHandler'
import PrefHandler from '../../data/local/PrefHandler'
export default class SignUpScreen extends Component {
    constructor() {
        super()

    }
    state = {
        email: '',
        name: '',
        password: '',
        male: false,
        female: false,
        malecolor: false,
        femalecolor: false,
        termcondition: false,
        SignUpStaus: false
    }
    userSignUp = () => {
        if (this.state.name == "") {
            alert("Name is Required")
        }
        else if (this.state.email == "") {
            alert("Email Fields Are Required")
        }
        else if (this.state.password == "") {
            alert("Password is Required")
        }
        else {
            var bodyParams = new FormData();
            bodyParams.append("email", this.state.email);
            bodyParams.append("password", 123456);
            this.setState({ SignUpStaus: true })
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
            alert("Done")
        }


    }
    render() {
        const { male, female, femalecolor, malecolor, termcondition } = this.state
        const { theme } = this.props
        return (
            <ScrollView contentContainerStyle={{
                flexGrow: 1,
                backgroundColor: LightTheme.White_Color
            }}>
                <Header
                    iconOnPress={() => this.props.navigation.goBack()}
                    icon={<Image source={require('../../assets/images/Auth/back.png')} style={{ height: 20, width: 30 }} />} />
                <View>
                    <Image source={require('../../assets/images/Auth/Logo.png')}
                        style={{
                            alignSelf: 'center',
                            marginTop: 50,
                            height: 93,
                            width: 73,
                        }} />
                </View>
                <View style={{ alignSelf: 'center' }}>
                    <Text style={{
                        fontSize: 20,
                        fontFamily: English.Bold_Font,
                        color: LightTheme.Black_Color,
                        marginTop: 30
                    }}>
                        {English.Signup_Screen_Heading}
                    </Text>
                </View>
                <View style={{ alignSelf: 'center' }}>
                    <Text style={{
                        textAlign: 'center',
                        fontFamily: English.Regular_Font,
                        marginHorizontal: 50,
                    }}>
                        {English.Signup_Screen_Information}
                    </Text>
                </View>
                <Input title='Name'
                    bgStyle={{
                        marginTop: 10,
                        paddingTop: 5,
                    }}
                    icon={<EmailIcon name={"mail-outline"} size={25} color={LightTheme.Black_Color} />}
                    onChange={(txt) => this.setState({ name: txt })}
                />
                <Input title='Email'
                    bgStyle={{
                        marginTop: 5,
                        paddingTop: 5,
                    }}
                    icon={<EmailIcon name={"mail-outline"} size={25} color={LightTheme.Black_Color} />}
                    keyboardType='email-address'
                    onChange={(txt) => this.setState({ email: txt })}
                />
                <Input title='Password'
                    bgStyle={{
                        marginTop: 5,
                        paddingTop: 5,
                    }}
                    icon={<EmailIcon name={"mail-outline"} size={25} color={LightTheme.Black_Color} />}
                    keyboardType='email-address'
                    onChange={(txt) => this.setState({ password: txt })}
                />
                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 20, marginTop: 10 }}>
                        <View>
                            <Checkbox
                                status={male ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    this.setState({ male: !male, female: false, malecolor: true, femalecolor: false });


                                }}
                            />
                        </View>
                        <View>
                            <MaleIcon name='male' size={20} color={male ? 'red' : 'grey'} />
                        </View>
                        <View style={{ marginLeft: 5 }}>
                            <Text>Male</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 10, marginTop: 10, borderLeftWidth: 1 }}>
                        <View style={{}}>
                            <Checkbox
                                status={female ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    this.setState({ female: !female, male: false, femalecolor: true, malecolor: false });

                                }}
                            />
                        </View>
                        <View>
                            <FemaleIcon name='female' size={20} color={female ? 'red' : 'grey'} />
                        </View>
                        <View style={{ marginLeft: 5 }}>
                            <Text>Female</Text>
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 20, marginTop: 10, borderLeftWidth: 1 }}>
                    <View style={{}}>
                        <Checkbox
                            status={termcondition ? 'checked' : 'unchecked'}
                            onPress={() => {
                                this.setState({ termcondition: !termcondition });
                            }}
                        />
                    </View>
                    <View style={{ marginLeft: 0 }}>
                        <Text>I agree to term & conditions</Text>
                    </View>
                </View>
                <Button title={English.Signup_Screen_CreateButton}
                    bgStyle={{
                        marginTop: 20,
                        elevation: 3,
                        backgroundColor: LightTheme.Primary_Color,
                    }}
                    txtStyle={{
                        color: theme ? LightTheme.Secondary_Button_Text_Color : DarkTheme.Secondary_Button_Text_Color,
                    }}
                    onPress={() => this.userSignUp()} />
                <Button title={English.Signup_Screen_LoginButton}
                    bgStyle={{
                        marginTop: 10,
                        backgroundColor: LightTheme.White_Color,
                        borderWidth: 2,
                        elevation: 3,
                        borderColor: LightTheme.Border_Color,
                        marginBottom: 20,
                    }}
                    txtStyle={{
                        color: '#000'
                        // color: theme ? LightTheme.Primary_Button_Text_Color : DarkTheme.Primary_Button_Text_Color,
                    }}
                    onPress={() => {
                        this.props.navigation.reset({
                            index: 0,
                            routes: [{ name: 'LoginScreen' }],
                        })
                    }} />
                {
                    this.state.SignUpStaus == true ? <ActivityIndicator size="large" color="#0000ff" style={{ position: "absolute", bottom: 150, left: 150 }} /> : null
                }
            </ScrollView>
        )
    }
}