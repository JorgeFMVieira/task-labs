import { View, StyleSheet, Text } from 'react-native';
import React from 'react';
import LogoSVG from '../../config/SVG/Logo/LogoSVG';
import colors from '../../config/colors';
import { fonts } from '../../config/fonts/fonts';

export default function Logo() {
    return (
        <View style={styles.logo}>
            <LogoSVG 
                width={50}
                height={50}
            />
            <Text style={styles.text}>
                Task Labs
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    logo: {
        width: '100%',
        flexDirection: 'row',       // Horizontal layout
        justifyContent: 'center',   // Center horizontally
        alignItems: 'center',       // Center vertically
    },
    text: {
        marginLeft: 15,
        color: colors.main,
        fontSize: 32,
        fontFamily: fonts.title.fontFamily,
        fontWeight: fonts.title.fontWeight
    },
});
