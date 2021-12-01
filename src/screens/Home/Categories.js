import React, { Component } from 'react'
import { Text, View, ScrollView, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native'
import Search from '../../reuseable/SearchBar'
import { FlatGrid } from 'react-native-super-grid';
const DATA = [{ id: 1, Name: "MakeUp", image: require('../../assets/images/Lipstick.png'), Color: "#FF69B4" }, { id: 2, Name: "Electronic", image: require('../../assets/images/Electronic.png'), Color: "#8A2BE2" }, { id: 3, Name: "Women", image: require('../../assets/images/Women.png'), Color: "#6495ED" }, { id: 4, Name: "Electronic", image: require('../../assets/images/download.png'), Color: "yellow" }, { id: 5, Name: "Electronic", image: require('../../assets/images/download.png'), Color: "red" },]
export default class Categories extends Component {
    render() {
        return (
            <ScrollView>
                <View style={{ marginTop: 30 }}>
                    <Search />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10 }}>


                    <View style={{}}>
                        <FlatGrid
                            itemDimension={110}
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

                </View>
            </ScrollView>
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

