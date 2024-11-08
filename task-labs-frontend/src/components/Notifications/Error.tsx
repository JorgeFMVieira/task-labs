import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../../config/colors'
import { fonts } from '../../config/fonts/fonts'

export type ErrorProps = {
    text: any;
}

export default function Error(props: ErrorProps) {
    return (
        <View style={styles.wrapper}>
            <View style={styles.circle}></View>
            <Text style={styles.text}>{props.text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#f8d7da',
        borderWidth: 1,
        borderColor: '#f5c6cb',
        borderRadius: 10,
        paddingVertical: 5,
        paddingHorizontal: 5,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        color: colors.text,
        fontFamily: fonts.bodyText.fontFamily,
        fontWeight: fonts.bodyText.fontWeight,
        fontSize: 12,
        marginLeft: 5
    },
    circle: {
        width: 10,
        height: 10,
        backgroundColor: 'rgba(220, 20, 60, 0.6)',
        borderRadius: 10/2,
    },
})