import { SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '../../../config/colors';

export type BarProps = {
    isActive: boolean;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
    currentPage: number;
    page: number;
}

export default function Bar(props: BarProps) {

    const onPagePressBack = () => {
        props.setCurrentPage(props.page)
    }


    return (
        <SafeAreaView style={[styles.container, { backgroundColor: props.isActive ? colors.main : colors.neutral }]}>
            <TouchableOpacity
                onPress={onPagePressBack}
                style={styles.btnClick}
            >

            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.neutral,
        width: '20%',
        height: 5,
        margin: 25,
        marginTop: 0,
        marginBottom: 35,
        borderRadius: 10,
    },
    btnClick: {
        width: '100%',
        height: 5
    }
})