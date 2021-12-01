import React, { useState, useEffect } from 'react'
import { View, Text, TextInput } from 'react-native'

const Input = ({ bgStyle, onChange, icon, title, keyboardType }) => {

    const [value, setValue] = useState("")

    return (
        <View style={{ backgroundColor: "#fff", borderRadius: 30, marginHorizontal: 20, elevation: 5, flexDirection: 'row', alignItems: 'center', ...bgStyle }}>

            <View style={{ marginLeft: 10 }}>
                {icon}
            </View>

            <TextInput
                style={{ padding: 8, flex: 1, fontFamily: 'Poppins-Regular',marginTop:5 }}
                value={value}
                placeholder={title}
                keyboardType={keyboardType}
                onChangeText={(txt) => handleonTextChange(txt)}
            />

        </View>
    )

    function handleonTextChange(txt) {
        setValue(txt)
        onChange && onChange(txt)
    }
}

export default Input
