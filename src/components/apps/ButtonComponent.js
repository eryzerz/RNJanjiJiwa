import React from 'react'
import {
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native'

import { darkColor, secondaryColor } from '../../constant'

const ButtonComponent = ({ title, onPress, styleBtn, styleTxt }) => (
    <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.7}
        style={[styles.buttonContainer, styleBtn]}
    >
        <Text style={[styles.buttonText, styleTxt]}>{title}</Text>
    </TouchableOpacity>
)

export default ButtonComponent

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: darkColor,
        height: 55,
        width: 300,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: secondaryColor,
        fontWeight: 'bold',
        fontSize: 19
    }
})