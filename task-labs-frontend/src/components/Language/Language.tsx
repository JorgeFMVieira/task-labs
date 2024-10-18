import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import ModalLanguage from './ModalLanguage';
import { fonts } from '../../config/fonts/fonts';
import colors from '../../config/colors';
import ArrowUpSVG from '../../config/SVG/Language/ArrowUpSVG';

export type Language = {
    name: string;
    src: React.JSX.Element;
    code: string;
}

export default function Language() {
    const [currentLanguage, setCurrentLanguage] = useState("English");
    const [isModalVisible, setModalVisible] = useState(false);

    return (
        <SafeAreaView style={styles.wrapper}>
            <TouchableOpacity 
                style={styles.container} 
                onPress={() => setModalVisible(true)}
            >
                <Text style={styles.text}>{currentLanguage}</Text>
                <ArrowUpSVG style={styles.arrow} />
            </TouchableOpacity>
            <ModalLanguage isModalVisible={isModalVisible} setModalVisible={setModalVisible} currentLanguage={currentLanguage} setCurrentLanguage={setCurrentLanguage} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 35,
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        color: colors.neutral,
        fontSize: 12,
        fontFamily: fonts.bodyText.fontFamily,
        fontWeight: fonts.bodyText.fontWeight,
    },
    arrow: {
        marginLeft: 8, // Adds some space between the text and the arrow
    },
});
