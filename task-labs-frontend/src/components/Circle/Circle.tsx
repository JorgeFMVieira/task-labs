import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../../config/colors';

export type CircleProps = {
    icon: React.JSX.Element;
}

export default function Circle(props: CircleProps) {
    return (
        <View style={styles.circle}>
            {props.icon}
        </View>
    )
}

const styles = StyleSheet.create({
    circle: {
        width: 35,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.mainOpacity,
        borderRadius: 35/2,
        borderWidth: 1,
        borderColor: colors.main,
        margin: 25/2,
        marginTop: 0,
        marginBottom: 0
    }
})