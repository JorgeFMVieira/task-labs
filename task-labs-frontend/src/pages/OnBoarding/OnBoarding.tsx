import { SafeAreaView, StyleSheet, View, ScrollView } from 'react-native';
import React, { useState } from 'react';
import colors from '../../config/colors';
import Logo from '../../components/Logo/Logo';
import SVGImage from './SVGImage';
import Language from '../../components/Language/Language';

export type OnBoardingProps = {
    loadTo: string;
    setLoadTo: React.Dispatch<React.SetStateAction<string>>;
}

export default function OnBoarding(props: OnBoardingProps) {

    const [currentPage, setCurrentPage] = useState(1);
    const maxPages = 3;

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollContainer}>
                <Language />
                <Logo />
                <View style={{ marginBottom: 25}}>
                    <SVGImage currentPage={currentPage} setCurrentPage={setCurrentPage} maxPages={maxPages} loadTo={props.loadTo} setLoadTo={props.setLoadTo} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: colors.background,
        alignItems: 'center',
    },
    scrollContainer: {
        flexGrow: 1,
        paddingBottom: 15,
        paddingTop: 15,
        paddingLeft: 25,
        paddingRight: 25,
        width: '100%',
    }
});
