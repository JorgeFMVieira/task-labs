import { View, Text, StyleSheet, ActivityIndicator, SafeAreaView } from 'react-native';
import React, { useEffect } from 'react';
import { createNavigationContainerRef, NavigationContainerRefWithCurrent, NavigationProp, useNavigation } from '@react-navigation/native';
import colors from '../../config/colors';
import { fonts } from '../../config/fonts/fonts';
import { RootStackParamList } from '../../App';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useAuth } from '../../context/AuthContext';

export type LoadingPageProps = {
    loadTo: string;
    setLoadTo: React.Dispatch<React.SetStateAction<string>>;
}

const LoadingPage = (props: LoadingPageProps) => {

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Task Labs</Text>
                <ActivityIndicator
                    size="large"
                    color={colors.main}
                    style={styles.spinner}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.background, // Optional: Set a background color
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center', // Center the content
    },
    title: {
        fontSize: 32,
        color: colors.main,
        fontFamily: fonts.title.fontFamily,
        fontWeight: fonts.title.fontWeight,
        marginBottom: 20, // Add some space between the title and the spinner
    },
    spinner: {
        marginTop: 20, // Optional: Adjust spinner position
    }
});

export default LoadingPage;
