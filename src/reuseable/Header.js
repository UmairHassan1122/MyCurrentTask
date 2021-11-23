import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import LightTheme from '../assets/Themes/LightTheme.json'

const Header = ({ title, iconOnPress,onPress, theme, icon }) => {

    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 20, marginTop: 20 }}>
            <TouchableOpacity onPress={() => iconOnPress && iconOnPress()}>
                {icon}
            </TouchableOpacity>

            <Text>
                {title}
            </Text>

            <TouchableOpacity onPress={() => onPress && onPress()}>
                <Text style={{
                    fontSize: 14,
                    fontFamily: 'Poppins-Bold',
                    color: LightTheme.Black_Color
                }}>Skip</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Header
