import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { fonts } from '../../config/fonts/fonts';
import colors from '../../config/colors';
import Email from '../../config/SVG/SignUp/Email';
import Input from '../../components/Input/Input';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../App';
import Logo from '../../components/Logo/Logo';
import ErrorInput from '../../components/Input/ErrorInput';
import Language from '../../components/Language/Language';

export type ForgotPasswordProps = {
    loadTo: string;
    setLoadTo: React.Dispatch<React.SetStateAction<string>>;
}

export default function ForgotPassword(props: ForgotPasswordProps) {

    const { t } = useTranslation();

    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const [errors, setErrors] = useState({});  // Use an empty object to hold dynamic errors 
    const [email, setEmail] = useState("");

    const submitFogotPassword = () => {
        console.log("forgot password")
    };

    const changeSignIn = () => {
        props.setLoadTo("Sign In");
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollContainer}>
                <Language />
                <Logo />
                <View style={styles.sign_up}>
                    <SafeAreaView>
                        <Text style={styles.text}>
                            <Text>
                                {t('forgot_password_title1')}
                            </Text>
                            <Text style={styles.textImportant}>
                                {t('forgot_password_title2')}
                            </Text>
                        </Text>
                        <View style={styles.inputs_wrapper}>
                            <View style={styles.input_box}>
                                <Input field='email' setErrors={setErrors} errors={errors} placeholder={t('sign_up_email')} keyboardType={'email-address'} value={email} setValue={setEmail} icon={<Email />} secureTextEntry={false} hasWarning={''} warningNavigate='' setLoadTo={props.setLoadTo} />
                                <ErrorInput field='email' errors={errors}/>
                            </View>
                        </View>
                        <TouchableOpacity 
                            style={styles.create_btn} 
                            onPress={() => submitFogotPassword()}
                        >
                            <Text style={styles.create_btn_text}>{t('forgot_password_submit')}</Text>
                        </TouchableOpacity>
                        <View style={styles.other_wrapper}>
                            <View style={styles.line_other}></View>
                            <Text style={styles.text_other}>OR</Text>
                            <View style={styles.line_other}></View>
                        </View>
                        <View style={styles.sign_in}>
                            <TouchableOpacity style={styles.change_page_sign}
                                onPress={() => changeSignIn()}
                            >
                                <Text style={styles.sign_in_text}>
                                    {t('forgot_password_login1')}
                                    <Text style={styles.sign_in_text_important}>{t('forgot_password_login2')}</Text>
                                    {t('forgot_password_login3')}
                                </Text>
                            </TouchableOpacity>
                        </View>
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