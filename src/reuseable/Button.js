import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import LightTheme from '../../src/assets/Themes/LightTheme.json'
// import { connect } from 'react-redux'
// import ReducersProps from '../../data/local/reducers/ReducersProps'

const Button = ({ title, onPress, theme, bgStyle, txtStyle }) => {
    return (
        <TouchableOpacity style={{  padding: 16, marginHorizontal: 20, borderRadius: 30,  ...bgStyle }}
            onPress={() => onPress && onPress()}>
            <Text style={{
                ...txtStyle, textAlign: 'center',
                fontFamily: 'Poppins-Bold',
                
            }}>
                {title}
            </Text>
        </TouchableOpacity>

    )
}

export default Button
