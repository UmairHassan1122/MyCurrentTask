import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Image, Dimensions, Checkbox, StyleSheet } from 'react-native'
import Carousel from 'react-native-looped-carousel';
const { width, height } = Dimensions.get('window');
import Button from '../../reuseable/Button';
import English from '../../assets/Languages/English.json'
import LightTheme from '../../assets/Themes/LightTheme.json'

export default class First extends Component {

    state = {
        size: { width, height },
        checked: false
    };

    moveNext = () => {
        this.props.navigation.reset({
            index: 0,
            routes: [{ name: 'Second' }],
        });
    }

    skipScreens = () => {
        this.props.navigation.reset({
            index: 0,
            routes: [{ name: 'SplashScreen' }],
        });
    }

    _onLayoutDidChange = (e) => {
        const layout = e.nativeEvent.layout;
        this.setState({ size: { width: layout.width, height: layout.height } });
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1 }} onLayout={this._onLayoutDidChange}>
                    <Carousel
                        delay={20000}
                        style={this.state.size}
                        autoplay
                        bullets={true}
                        onPageBeingChanged={(val) => { alert(val) }}
                        chosenBulletStyle={{ backgroundColor: "green" }}
                        bulletStyle={{ backgroundColor: "grey" }}
                    >
                        <View style={[{ backgroundColor: "white", flex: 1, alignItems: "center" }]}>
                            <Image style={{ position: 'absolute', height: 250, width: 250, marginTop: 30 }} source={require('../../assets/images/Auth/Login.png')} />
                            <View style={{ flex: 1, justifyContent: 'center' }}>
                                <View style={{ alignSelf: 'center', marginTop: 90 }}>
                                    <Text style={{ fontWeight: 'bold', fontSize: 18, alignSelf: 'center' }}>Find anything online</Text>
                                    <Text style={{ textAlign: 'center', fontSize: 14 }}>Order online and get all your orders{'\n'} delivered to your door step </Text>
                                </View>
                            </View>
                        </View>
                        <View style={[{ backgroundColor: "white", flex: 1, alignItems: "center" }]}>
                            <Image style={{ position: 'absolute', height: 250, width: 250, marginTop: 30 }} source={require('../../assets/images/Auth/Login.png')} />
                            <View style={{ flex: 1, justifyContent: 'center' }}>
                                <View style={{ alignSelf: 'center', marginTop: 90 }}>
                                    <Text style={{ fontWeight: 'bold', fontSize: 18, alignSelf: 'center' }}>Fast delivery to your door</Text>
                                    <Text style={{ textAlign: 'center', fontSize: 14 }}>Order online and get all your orders{'\n'} delivered to your door step </Text>
                                </View>
                            </View>
                        </View>
                        <View style={[{ backgroundColor: "white", flex: 1, alignItems: "center" }]}>
                            <Image style={{ position: 'absolute', height: 250, width: 250, marginTop: 30 }} source={require('../../assets/images/Auth/Login.png')} />
                            <View style={{ flex: 1, justifyContent: 'center' }}>
                                <View style={{ alignSelf: 'center', marginTop: 90 }}>
                                    <Text style={{ fontWeight: 'bold', fontSize: 18, alignSelf: 'center' }}>Discover the best products</Text>
                                    <Text style={{ textAlign: 'center', fontSize: 14 }}>Order online and get all your orders{'\n'} delivered to your door step </Text>
                                </View>
                            </View>
                        </View>
                    </Carousel>
                </View>
                <View style={{ backgroundColor: "white" }}>
                    <View style={{ marginBottom: 20, flexDirection: 'row', alignItems: 'center', marginHorizontal: 20 }}>
                    </View>
                    <View>
                        <Button title={English.OnBoarding_Next_Button}
                            bgStyle={styles.Login_Button}
                            txtStyle={styles.Login_Button_Txt}
                            onPress={() => alert('Next')} />

                        <Button title={English.OnBoarding_Skip_Button}
                            bgStyle={styles.Create_Button}
                            txtStyle={styles.Create_Button_Txt}
                            onPress={() => this.props.navigation.reset({
                                index: 0,
                                routes: [{ name: 'LoginScreen' }],
                            })} />
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
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