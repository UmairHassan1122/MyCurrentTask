import React, { Component } from 'react'
import { Text, View, ScrollView, Image, FlatList, TouchableOpacity, Dimensions, StyleSheet, StatusBar } from 'react-native'
import Icon from 'react-native-vector-icons/dist/Ionicons';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import { Badge, TextInput } from 'react-native-paper';
import Search from '../../reuseable/SearchBar'
import Carousel from 'react-native-looped-carousel';
import { FlatGrid } from 'react-native-super-grid';
const { width, height } = Dimensions.get('window');
import RenderCategory from '../../reuseable/RenderCatogories'
import LightTheme from '../../assets/Themes/LightTheme.json'
import DarkTheme from '../../assets/Themes/DarkTheme.json'

const DATA = [
    { id: 1, Name: "MakeUp", img: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80', Color: "#FF69B4" },
    { id: 2, Name: "Electronic", img: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80', Color: "#8A2BE2" },
    { id: 3, Name: "Women", img: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80', Color: "#6495ED" }, 
    { id: 4, Name: "Electronic", img: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80', Color: "yellow" },
    { id: 4, Name: "men", img: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80', Color: "red" },
    { id: 6, Name: "glass", img: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80', Color: "red" },
]

export default class Home extends Component {

    state = {
        size: { width, height },
        checked: false,
        value: 0
    };
    render() {
        return (
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <StatusBar
                    animated={true}
                    backgroundColor="#FFFAF0"
                    barStyle={'dark-content'} />
                <View style={{ height: 120, width: "100%", backgroundColor: LightTheme.Secondary_Color, borderBottomLeftRadius: 30, borderBottomRightRadius: 30, }}>
                    <View style={{ flexDirection: "row", justifyContent: 'space-between', marginHorizontal: 20, marginTop: 15 }}>
                        <View style={{}}>
                            <Image source={require('../../assets/images/download.png')} style={{ height: 35, width: 35, borderRadius: 25 }} />
                        </View>

                        <View style={{}}>
                            <View>
                                <View style={{ flexDirection: "row", alignItems: 'center', marginLeft: 5 }}>
                                    <Icon name="location-outline" size={20} color='#000' />
                                    <Text style={{ fontSize: 18, fontFamily: 'Poppins-Bold', color: LightTheme.Primary_Text_Color, marginTop: 3 }}>Deliver to</Text>
                                </View>
                                <View style={{ flexDirection: "row" }}>
                                    <Text style={{ fontSize: 18, fontFamily: 'Poppins-Regular', color: "black" }}>Khartoum, </Text>
                                    <Text style={{ fontSize: 18, fontFamily: 'Poppins-Regular', color: "black" }}>Barry</Text>
                                </View>
                            </View>
                        </View>

                        <View style={{ width: 35, height: 35, backgroundColor: "white", alignItems: "center", justifyContent: "center", borderRadius: 30 }}>
                            <Badge size={12} style={{ position: "absolute", right: 0, top: 0 }}></Badge>
                            <MaterialIcons name="notifications-none" size={30} />
                            {/* <Image source={require('../../assets/images/download.png')} style={{ height: 50, width: 50, borderRadius: 25 }} /> */}
                        </View>

                    </View>

                </View>

                {/* Header End */}
                <View>
                    <Search />
                </View>

                <FlatList
                    data={DATA}
                    ListHeaderComponent={
                        <View>
                            <View>
                                <RenderCategory navi={this.props.navigation} />
                                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: 'center', marginHorizontal: 16 }}>
                                    <Text style={{ fontSize: 18, fontFamily: 'Poppins-Bold', color: 'black', }}>Top Products</Text>
                                    <TouchableOpacity style={{}}>
                                        <Text style={{ fontSize: 14, fontFamily: 'Poppins-SemiBold',color:'#FF5733' }}>See All</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    }
                />

                <View style={{ flex: 1,marginTop:10 }}>
                    <FlatList
                        data={DATA}
                        numColumns={2}
                        style={styles.gridView}
                        renderItem={({ item }) => (
                            <View style={[styles.itemContainer, { elevation: 5, marginBottom: 10, borderRadius: 10, backgroundColor: '#fff' }]}>
                                <Image source={{ uri: item.img }} style={{ height: 140, borderRadius: 10, width: '90%', alignSelf: 'center', marginTop: 10 }} />
                                <Text style={styles.itemName}>{item.Name}</Text>
                                <Text style={styles.itemCode}>{item.id}</Text>
                            </View>
                        )}
                    />
                </View>

            </ScrollView>
        )
    }
}






// class RenderProducts extends React.Component {

//     render() {
//         return (



//         )
//     }
// }


const styles = StyleSheet.create({
    gridView: {
        marginTop: 0,
        flex: 1, marginHorizontal: 7,
        marginBottom:20,
    },
    itemContainer: {
        marginHorizontal: 7,
        justifyContent: 'space-between',
        flex: 1
    },
    itemName: {
    },
    itemCode: {
    },
});