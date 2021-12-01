import React, { Component } from 'react'
import { Text, View, ScrollView, Image, FlatList, TouchableOpacity, Dimensions, StyleSheet, StatusBar } from 'react-native'
import Icon from 'react-native-vector-icons/dist/Ionicons';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import { Badge, TextInput } from 'react-native-paper';
import Search from '../../reuseable/SearchBar'
import Carousel from 'react-native-looped-carousel';
import { FlatGrid } from 'react-native-super-grid';
const DATA = [{ id: 1, Name: "MakeUp", image: require('../../assets/images/Lipstick.png'), Color: "#FF69B4" }, { id: 2, Name: "Electronic", image: require('../../assets/images/Electronic.png'), Color: "#8A2BE2" }, { id: 3, Name: "Women", image: require('../../assets/images/Women.png'), Color: "#6495ED" }, { id: 4, Name: "Electronic", image: require('../../assets/images/download.png'), Color: "yellow" }, { id: 5, Name: "Electronic", image: require('../../assets/images/download.png'), Color: "red" },]
const { width, height } = Dimensions.get('window');
import RenderCategory from '../../reuseable/RenderCatogories'

const data = [
    { name: 'TURQUOISE', code: '#1abc9c' },
    { name: 'EMERALD', code: '#2ecc71' },
    { name: 'PETER RIVER', code: '#3498db' },
    { name: 'AMETHYST', code: '#9b59b6' },
    { name: 'WET ASPHALT', code: '#34495e' },
    { name: 'GREEN SEA', code: '#16a085' },
    { name: 'NEPHRITIS', code: '#27ae60' },
    { name: 'BELIZE HOLE', code: '#2980b9' },
    { name: 'WISTERIA', code: '#8e44ad' },
    { name: 'MIDNIGHT BLUE', code: '#2c3e50' },
    { name: 'SUN FLOWER', code: '#f1c40f' },
    { name: 'CARROT', code: '#e67e22' },
    { name: 'ALIZARIN', code: '#e74c3c' },
    { name: 'CLOUDS', code: '#ecf0f1' },
    { name: 'CONCRETE', code: '#95a5a6' },
    { name: 'ORANGE', code: '#f39c12' },
    { name: 'PUMPKIN', code: '#d35400' },
    { name: 'POMEGRANATE', code: '#c0392b' },
    { name: 'SILVER', code: '#bdc3c7' },
    { name: 'ASBESTOS', code: '#7f8c8d' },
];
export default class Home extends Component {

    state = {
        size: { width, height },
        checked: false,
        value: 0
    };
    render() {
        return (

            <View >
                <StatusBar
                    animated={true}
                    backgroundColor="#FFFAF0"
                    barStyle={'dark-content'} />
                <View style={{ height: 90, width: "100%", backgroundColor: "#FFFAF0", borderBottomLeftRadius: 30, borderBottomRightRadius: 30, justifyContent: "center" }}>
                    <View style={{ flexDirection: "row" }}>
                        <View style={{ flex: 1, marginLeft: 20 }}>
                            <Image source={require('../../assets/images/download.png')} style={{ height: 50, width: 50 }} />
                        </View>
                        <View style={{ marginLeft: 10, flex: 1 }}>
                            <View>
                                <View style={{ flexDirection: "row" }}>
                                    <Icon name="location-outline" size={30} />
                                    <Text style={{ fontSize: 18 }}>Deliver to</Text>
                                </View>
                                <View style={{ flexDirection: "row" }}>
                                    <Text style={{ fontSize: 18, fontWeight: "bold", color: "black" }}>Khartoum , </Text>
                                    <Text style={{ fontSize: 18, fontWeight: "bold", color: "black" }}>Barry</Text>
                                </View>
                            </View>
                        </View>

                        <View style={{ width: 60, height: 60, marginLeft: 70, marginRight: 15, backgroundColor: "white", alignItems: "center", justifyContent: "center", borderRadius: 30 }}>
                            <Badge size={12} style={{ position: "absolute", right: 4, top: 4 }}></Badge>
                            <MaterialIcons name="notifications-none" size={30} />
                            {/* <Image source={require('../../assets/images/download.png')} style={{ height: 50, width: 50, borderRadius: 25 }} /> */}
                        </View>

                    </View>

                </View>

                {/* Header End */}
                <View>
                    <Search />
                </View>

                <ScrollView>
                    <FlatList
                        data={DATA}
                        ListHeaderComponent={
                            <View>
                                <View>
                                    <RenderCategory navi={this.props.navigation} />
                                    <View style={{ marginLeft: 10, flexDirection: "row", justifyContent: "space-between" }}>
                                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black' }}>Top Products</Text>
                                        <TouchableOpacity style={{ marginRight: 10 }}>
                                            <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'black' }}>See All</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>

                            </View>

                        }
                        renderItem={({ item }) => (<RenderProducts item={item} />)}
                    // keyExtractor={item => item.Mname.toString()}
                    // ItemSeparatorComponent={this.ItemSeparator}
                    />
                </ScrollView>



            </View>
        )
    }
}






class RenderProducts extends React.Component {

    render() {
        return (

            <View style={{ height: 190 }}>
                <FlatGrid
                    itemDimension={130}
                    data={DATA}
                    style={styles.gridView}
                    spacing={10}
                    renderItem={({ item }) => (
                        <View style={[styles.itemContainer, { backgroundColor: "red" }]}>
                            <Text style={styles.itemName}>{item.Name}</Text>
                            <Text style={styles.itemCode}>{item.id}</Text>
                        </View>
                    )}
                />
            </View>



        )
    }
}


const styles = StyleSheet.create({
    gridView: {
        marginTop: 15,
        flex: 1
    },
    itemContainer: {
        justifyContent: 'flex-end',
        borderRadius: 5,
        padding: 10,
        height: 140,

    },
    itemName: {
        fontSize: 16,
        color: '#fff',
        fontWeight: '600',
    },
    itemCode: {
        fontWeight: '600',
        fontSize: 12,
        color: '#fff',
    },
});