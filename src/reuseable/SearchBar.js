import React, { Component } from "react";
import { View } from "react-native";
import SearchBar from "react-native-dynamic-search-bar";
var Spinner = require('react-native-spinkit');

export default class Search extends Component {

    state = {
        spinnerVisibility: false,
        searchText: ''
    }
    handleOnChangeText = (text) => {
        // ? Visible the spinner
        this.setState({
            searchText: text,
            spinnerVisibility: true,
        });

        // ? After you've done to implement your use-case
        // ? Do not forget to set false to spinner's visibility
        setTimeout(() => {
            this.setState({

                spinnerVisibility: false,
            });
        }, 1000);
    };

    render() {
        const { spinnerVisibility } = this.state;
        return (
            <View>
                <SearchBar
                    height={50}
                    fontSize={16}
                    fontColor="#fdfdfd"
                    iconColor="#fdfdfd"
                    shadowColor="#282828"
                    cancelIconColor="#fdfdfd"
                    spinnerVisibility={spinnerVisibility}
                    placeholder="Search any Product ..."
                    fontFamily="BurbankBigCondensed-Black"

                    onChangeText={this.handleOnChangeText}
                    style={{ height: 50, borderRadius: 30, marginTop: -30, backgroundColor: "white", elevation: 3, borderColor: "grey" }}
                />
            </View>
        );
    }
}