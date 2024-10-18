import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../../config/colors'
import Logo from '../../components/Logo/Logo'
import Language from '../../components/Language/Language'
import SignIn from './SignIn'
import SignUp from './SignUp'
import { RouteProp } from '@react-navigation/native'
import { RootStackParamList } from '../../App'
import ForgotPassword from './ForgotPassword'

export type AuthProps = {
    route: RouteProp<RootStackParamList, 'Auth'>;
}

export default function Auth(props: AuthProps) {

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollContainer}>
                <Logo />
                <View style={styles.sign_up}>
                    {props.route.params.auth === "Sign In" && (<SignIn /> )}
                    {props.route.params.auth === "Sign Up" && (<SignUp /> )}
                    {props.route.params.auth === "Forgot Password" && (<ForgotPassword /> )}
                </View>
                <Language />
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: colors.background,
    },
    sign_up: {
        marginTop: 15,
        display: 'flex',
        flexDirection: 'column',
        marginBottom: 25
    },
    scrollContainer: {
        flexGrow: 1, // This allows the ScrollView to expand as needed
        paddingBottom: 15,
        paddingTop: 15,
        paddingLeft: 25,
        paddingRight: 25,
        width: '100%',
    }
})