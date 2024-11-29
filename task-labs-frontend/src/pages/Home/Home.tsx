import React from 'react';
import { SafeAreaView, Text, StyleSheet, TouchableOpacity, ScrollView, View } from 'react-native';
import { useAuth } from '../../context/AuthContext';
import colors from '../../config/colors';
import { fonts } from '../../config/fonts/fonts';
import { useTranslation } from 'react-i18next';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../App';
import Language from '../../components/Language/Language';
import Logo from '../../components/Logo/Logo';
import Navbar from '../../components/Navbar/Navbar';

export default function Home() {

    const { onLogout } = useAuth();

    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const { t } = useTranslation();

    const logout = async () => {
        console.log("logout")
        await onLogout();
    };

   return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollContainer}>
                <Language />
                <Logo />
                <View style={styles.sign_up}>
                    <SafeAreaView>
                        <Text style={styles.text}>
                            <Text>
                                {t('home_title1')}
                            </Text>
                            <Text style={styles.textImportant}>
                                {t('home_title2')}
                            </Text>
                            <Text style={styles.text}>
                                {t('home_title3')}
                            </Text>
                        </Text>
                        <TouchableOpacity 
                            style={styles.create_btn} 
                            onPress={logout}
                        >
                            <Text style={styles.create_btn_text}>Logout</Text>
                        </TouchableOpacity>
                    </SafeAreaView>
                </View>
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
    },
    text: {
        fontSize: 24,
        color: colors.text,
        fontFamily: fonts.title.fontFamily,
        fontWeight: fonts.title.fontWeight,
    },
    textImportant: {
        color: colors.main,
        fontSize: 24,
    },
    inputs_wrapper: {
        width: '100%',
        marginTop: 15
    },
    create_btn: {
        paddingVertical: 15,
        backgroundColor: colors.main,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 10
    },
    create_btn_text: {
        fontSize: 16,
        color: colors.secondaryText,
        fontFamily: fonts.bodyText.fontFamily,
        fontWeight: fonts.bodyText.fontWeight,
    },
    or_register_wrapper: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15
    },
    sign_up_register_or: {
        color: colors.neutral,
        fontSize: 12,
        fontFamily: fonts.bodyText.fontFamily,
        fontWeight: fonts.bodyText.fontWeight,
    },
    circle_wrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15,
    },
    other_wrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15
    },
    text_other: {
        color: colors.neutral,
        fontSize: 16,
        fontFamily: fonts.bodyText.fontFamily,
        fontWeight: fonts.bodyText.fontWeight,
        marginLeft: 15,
        marginRight: 15
    },
    line_other: {
        width: 125,
        height: 1,
        backgroundColor: colors.neutral
    },
    sign_in: {
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    },
    sign_in_text: {
        color: colors.neutral,
        fontSize: 16,
        fontFamily: fonts.bodyText.fontFamily,
        fontWeight: fonts.bodyText.fontWeight,
    },
    sign_in_text_important: {
        color: colors.main,
        fontSize: 16,
        fontFamily: fonts.bodyText.fontFamily,
        fontWeight: fonts.bodyText.fontWeight,
    },
    change_page_sign: {
        margin: 0,
        padding: 0,
        textAlign: 'center'
    },
    input_box: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: 25
    }
})