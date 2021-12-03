import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Addresses from '../../reuseable/Addresses'
import NoAddress from '../../reuseable/Address'
import Button from '../../reuseable/Button'
import English from '../../assets/Languages/English.json'
import LightTheme from '../../assets/Themes/LightTheme.json'
import Header from '../../reuseable/Header'
import { SafeAreaView } from 'react-native-safe-area-context'



export default class AllAddresses extends Component {
    render() {
        return (


            <View style={{ flex: 1, justifyContent: "space-between" }}>
                {/* <NoAddress navi={this.props.navigation} /> */}
                <Addresses />

                <Button title={English.Addrss_Screen_AddButton}
                    bgStyle={{
                        marginTop: 30,
                        elevation: 3,
                        marginBottom: 10,
                        backgroundColor: LightTheme.Primary_Button_Color
                    }}
                    txtStyle={{
                        color: LightTheme.Primary_Button_Text_Color
                    }}
                    onPress={() => { this.props.navigation.navigate("AddNewAddress") }} />
            </View>

        )
    }
}
