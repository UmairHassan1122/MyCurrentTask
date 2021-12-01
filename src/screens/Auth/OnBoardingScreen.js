import React, { Component } from 'react'
import { Text, View, Image, Dimensions, } from 'react-native'
import Carousel from 'react-native-looped-carousel';
import Button from '../../reuseable/Button';
import English from '../../assets/Languages/English.json'
import LightTheme from '../../assets/Themes/LightTheme.json'
import DarkTheme from '../../assets/Themes/DarkTheme.json'
import { connect } from 'react-redux';

const { width, height } = Dimensions.get('window');
class First extends Component {

    state = {
        size: { width, height },
        checked: false,
        value: 0
    };

    moveNext = () => {
        this.props.navigation.reset({
            index: 0,
            routes: [{ name: 'LoginScreen' }],
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

    toggleTheme = () => {

        this.props.updateTheme(!this.props.theme)

        // this.props.updateLanguage(!this.props.Lang)
    }

    render() {
const {theme} = this.props
        return (
            <View style={{ flex: 1 }}>

                {/* //TODO /////////// Carousel View /////////////////////// */}
                <View style={{ flex: 1 }} onLayout={this._onLayoutDidChange}>
                    <Carousel
                        delay={1000}
                        style={this.state.size}
                        ref={e => this._carousel = e}
                        autoplay={false}
                        bullets={true}
                        currentPage={this.state.value}
                        onPageBeingChanged={(val) => { this.setState({ value: val }) }}
                        chosenBulletStyle={{ backgroundColor: theme ? LightTheme.Carousel_Bullet_Color : DarkTheme.Carousel_Bullet_Color }}
                        bulletStyle={{ backgroundColor: "grey" }}>

                        {/* //TODO /////////////// Carousel  1st Image ////////////// */}
                        <View style={[{ backgroundColor: theme ? LightTheme.Primary_Color : DarkTheme.Primary_Color, flex: 1, alignItems: "center" }]}>

                            <Image style={{ height: 350, width: '100%', borderBottomRightRadius: 300, borderBottomLeftRadius: 300 }} source={require('../../assets/images/Auth/1.png')} />
                            <View style={{ flex: 1, justifyContent: 'center' }}>
                                <View style={{ alignSelf: 'center', }}>
                                    <Text style={{ fontFamily: English.Bold_Font, fontSize: 18, alignSelf: 'center', color: theme ? LightTheme.Primary_Text_Color : DarkTheme.Primary_Text_Color, }}> {this.props.Lang ? "Find anything online" : "آپ کیسے ہو"}</Text>
                                    <Text style={{ textAlign: 'center', fontFamily: English.Regular_Font, marginHorizontal: 50, marginTop: 10, fontSize: 14, color: theme ? LightTheme.Primary_Text_Color : DarkTheme.Primary_Text_Color, }}>{this.props.Lang ? "Order online and get all your orders delivered to your door step" : "بحرالکاہل اور جنوبی سمندروں کا ایک پرندہ جس کے پر سیاہ سفید اور پنکھ لمبے ہوتے ہیں"}</Text>
                                </View>
                            </View>
                        </View>

                        {/* //TODO /////////////// Carousel  2st Image ////////////// */}
                        <View style={[{ backgroundColor: theme ? LightTheme.Primary_Color : DarkTheme.Primary_Color, flex: 1, alignItems: "center" }]}>
                            <Image style={{ height: 350, borderBottomRightRadius: 300, borderBottomLeftRadius: 300, width: '100%' }} source={require('../../assets/images/Auth/2.png')} />
                            <View style={{ flex: 1, justifyContent: 'center' }}>
                                <View style={{ alignSelf: 'center' }}>
                                    <Text style={{ fontFamily: English.Bold_Font, fontSize: 18, alignSelf: 'center', color: theme ? LightTheme.Primary_Text_Color : DarkTheme.Primary_Text_Color, }}>Fast delivery to your door</Text>
                                    <Text style={{ textAlign: 'center', fontSize: 14, marginTop: 10, fontFamily: English.Regular_Font, marginHorizontal: 50, color: theme ? LightTheme.Primary_Text_Color : DarkTheme.Primary_Text_Color, }}>Order online and get all your orders delivered to your door step </Text>
                                </View>
                            </View>
                        </View>

                        {/* //TODO /////////////// Carousel  3st Image ////////////// */}
                        <View style={[{ backgroundColor: theme ? LightTheme.Primary_Color : DarkTheme.Primary_Color, flex: 1, alignItems: "center" }]}>
                            <Image style={{ height: 350, width: '100%', borderBottomRightRadius: 300, borderBottomLeftRadius: 300 }} source={require('../../assets/images/Auth/3.png')} />
                            <View style={{ flex: 1, justifyContent: 'center' }}>
                                <View style={{ alignSelf: 'center' }}>
                                    <Text style={{ fontFamily: English.Bold_Font, fontSize: 18, alignSelf: 'center', color: theme ? LightTheme.Primary_Text_Color : DarkTheme.Primary_Text_Color, }}>Discover the best products</Text>
                                    <Text style={{ textAlign: 'center', marginTop: 10, fontFamily: English.Regular_Font, fontSize: 14, marginHorizontal: 50, color: theme ? LightTheme.Primary_Text_Color : DarkTheme.Primary_Text_Color, }}>Order online and get all your orders delivered to your door step </Text>
                                </View>
                            </View>
                        </View>
                    </Carousel>
                </View>

                {/* //TODO //////////////// Bottom View ///////////////////////// */}
                <View style={{ backgroundColor: theme ? LightTheme.Primary_Color : DarkTheme.Primary_Color, }}>
                    <View>

                        {/* //TODO ////////////// Next Button ///////////////////// */}
                        <Button title={this.state.value == 2 ? English.OnBoarding_CONTINUE_Button : English.OnBoarding_Next_Button}
                            bgStyle={{
                                marginTop: 30,
                                elevation: 3,
                                backgroundColor: theme ? LightTheme.Primary_Button_Color : DarkTheme.Primary_Button_Color,
                            }}
                            txtStyle={{
                                color: theme ? LightTheme.Primary_Button_Text_Color : DarkTheme.Primary_Button_Text_Color,
                            }}
                            onPress={() => { this.state.value == 2 ? this.moveNext() : this._carousel._animateNextPage() }} />

                        {/* //TODO ///////////// Skip Button /////////////////////// */}
                        <Button title={English.OnBoarding_Skip_Button}
                            bgStyle={{
                                marginTop: 10,
                                borderWidth: 2,
                                elevation: 3,
                                borderColor: theme ? LightTheme.Border_Color : DarkTheme.Border_Color,
                                marginBottom: 20,
                                backgroundColor: theme ? LightTheme.Secondary_Button_Color : DarkTheme.Secondary_Button_Color,
                            }}
                            txtStyle={{
                                color: theme ? LightTheme.Secondary_Button_Text_Color : DarkTheme.Secondary_Button_Text_Color,
                            }}
                            onPress={() => this.props.navigation.reset
                                ({
                                    index: 0,
                                    routes: [{ name: 'LoginScreen' }],
                                })} />
                    </View>
                </View>
            </View>
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


export default connect(mapStateToProps, mapDispatchToProps)(First)