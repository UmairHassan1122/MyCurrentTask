import React, { Component } from 'react'
import { Text, View, ScrollView, Image, FlatList, TouchableOpacity, Dimensions, StyleSheet, StatusBar } from 'react-native'
const { width, height } = Dimensions.get('window');
import Carousel from 'react-native-looped-carousel';
const DATA = [{ id: 1, Name: "MakeUp", image: require('../assets/images/Lipstick.png'), Color: "#FF69B4" }, { id: 2, Name: "Electronic", image: require('../assets/images/Electronic.png'), Color: "#8A2BE2" }, { id: 3, Name: "Women", image: require('../assets/images/Women.png'), Color: "#6495ED" }, { id: 4, Name: "Electronic", image: require('../assets/images/download.png'), Color: "yellow" }, { id: 5, Name: "Electronic", image: require('../assets/images/download.png'), Color: "red" },]
export default class RenderCategory extends React.Component {

    state = {
        size: { width, height },
        checked: false,
        value: 0
    };
    render() {
        return (
            <View>
                <View style={{ height: 140, marginBottom: 10 }}>
                    <View style={{ marginLeft: 10, marginTop: 10, flexDirection: "row", justifyContent: "space-between" }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black' }}>Categories</Text>
                        <TouchableOpacity onPress={() => { this.props.navi.navigate("Categories") }} style={{ marginRight: 10 }}>
                            <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'black' }}>See All</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10 }}>


                        <View>
                            <FlatList
                                data={DATA}
                                keyExtractor={item => item.id}
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                renderItem={({ item, index }) => (
                                    <TouchableOpacity style={{ marginLeft: 8, marginRight: 8 }}
                                        onPress={() => { }} >
                                        <View style={{ width: 70, height: 70, borderRadius: 35, backgroundColor: item.Color, justifyContent: "center", alignItems: "center" }}>
                                            <Image
                                                source={item.image}
                                                style={{ width: 70, height: 70, borderRadius: 50, }} />

                                        </View>
                                        <View style={{ justifyContent: "center", alignItems: "center" }}>
                                            <Text>{item.Name}</Text>
                                        </View>

                                    </TouchableOpacity>
                                )} />
                        </View>

                    </View>

                </View>
                <View>
                    <Carousel
                        delay={20000}
                        style={{ height: 190 }}
                        autoplay={false}
                        bullets={true}
                        currentPage={this.state.value}
                        onPageBeingChanged={(val) => { this.setState({ value: val }) }}
                        chosenBulletStyle={{ backgroundColor: "green" }}
                        bulletStyle={{ backgroundColor: "green" }}
                    >

                        <View style={[{ backgroundColor: "#483D8B", flex: 1, marginHorizontal: 15, borderRadius: 15, marginTop: 2, height: 150, elevation: 5 }]}>
                            <View style={{ marginTop: 12, marginLeft: 20 }}>
                                <View style={{ borderRadius: 20, backgroundColor: "orange", height: 40, width: 40, justifyContent: "center", alignItems: "center" }}>
                                    <Text style={{ color: "white" }}>New</Text>
                                </View>
                                <View style={{ marginTop: 5 }}>
                                    <Text style={{ color: "white", fontSize: 18 }}>iPhone 13</Text>
                                    <Text style={{ color: "white" }}>Oh. So. Pro</Text>
                                </View>
                                <View style={{ marginTop: 5 }}>
                                    <TouchableOpacity style={{ backgroundColor: "white", padding: 6, width: 120, height: 40, alignItems: "center", justifyContent: "center", borderRadius: 30 }}>
                                        <Text style={{ color: "black", fontSize: 20 }}>Buy Now</Text>
                                    </TouchableOpacity>

                                </View>
                                <View>
                                    <Image source={require('../assets/images/download1.png')} style={{ height: 90, width: 90, position: "absolute", right: 20, top: -120 }} />
                                </View>
                            </View>

                        </View>
                        <View style={[{ backgroundColor: "#483D8B", flex: 1, marginHorizontal: 15, borderRadius: 15, marginTop: 2, height: 150, elevation: 5 }]}>
                            <View style={{ marginTop: 12, marginLeft: 20 }}>
                                <View style={{ borderRadius: 20, backgroundColor: "orange", height: 40, width: 40, justifyContent: "center", alignItems: "center" }}>
                                    <Text style={{ color: "white" }}>New</Text>
                                </View>
                                <View style={{ marginTop: 5 }}>
                                    <Text style={{ color: "white", fontSize: 18 }}>iPhone 13</Text>
                                    <Text style={{ color: "white" }}>Oh. So. Pro</Text>
                                </View>
                                <View style={{ marginTop: 5 }}>
                                    <TouchableOpacity style={{ backgroundColor: "white", padding: 6, width: 120, height: 40, alignItems: "center", justifyContent: "center", borderRadius: 30 }}>
                                        <Text style={{ color: "black", fontSize: 20 }}>Buy Now</Text>
                                    </TouchableOpacity>

                                </View>
                                <View>
                                    <Image source={require('../assets/images/download1.png')} style={{ height: 90, width: 90, position: "absolute", right: 20, top: -120 }} />
                                </View>
                            </View>

                        </View>
                        <View style={[{ backgroundColor: "#483D8B", flex: 1, marginHorizontal: 15, borderRadius: 15, marginTop: 2, height: 150, elevation: 5 }]}>
                            <View style={{ marginTop: 12, marginLeft: 20 }}>
                                <View style={{ borderRadius: 20, backgroundColor: "orange", height: 40, width: 40, justifyContent: "center", alignItems: "center" }}>
                                    <Text style={{ color: "white" }}>New</Text>
                                </View>
                                <View style={{ marginTop: 5 }}>
                                    <Text style={{ color: "white", fontSize: 18 }}>iPhone 13</Text>
                                    <Text style={{ color: "white" }}>Oh. So. Pro</Text>
                                </View>
                                <View style={{ marginTop: 5 }}>
                                    <TouchableOpacity style={{ backgroundColor: "white", padding: 6, width: 120, height: 40, alignItems: "center", justifyContent: "center", borderRadius: 30 }}>
                                        <Text style={{ color: "black", fontSize: 20 }}>Buy Now</Text>
                                    </TouchableOpacity>

                                </View>
                                <View>
                                    <Image source={require('../assets/images/download1.png')} style={{ height: 90, width: 90, position: "absolute", right: 20, top: -120 }} />
                                </View>
                            </View>

                        </View>




                    </Carousel>
                </View>


            </View>
        )
    }
}