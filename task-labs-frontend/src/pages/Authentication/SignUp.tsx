import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { fonts } from '../../config/fonts/fonts';
import colors from '../../config/colors';
import Name from '../../config/SVG/SignUp/Name';
import Email from '../../config/SVG/SignUp/Email';
import Password from '../../config/SVG/SignUp/Password';
import Google from '../../config/SVG/SignUp/Google';
import Facebook from '../../config/SVG/SignUp/Facebook';
import Circle from '../../components/Circle/Circle';
import Input from '../../components/Input/Input';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../App';

export default function SignUp() {

    const { t } = useTranslation();

    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");

    const createAccount = () => {
        console.log("register")
    };

    const navigateLogin = () => {
        navigation.navigate('Auth', {auth: "Sign In"});
    }

    return (
        <SafeAreaView>
            <Text style={styles.text}>
                <Text>
                    {t('sign_up_title1')}
                </Text>
                <Text style={styles.textImportant}>
                    {t('sign_up_title2')}
                </Text>
            </Text>
            <View style={styles.inputs_wrapper}>
                <Input placeholder={t('sign_up_name')} keyboardType={'default'} value={name} setValue={setName} icon={<Name />} secureTextEntry={false} hasWarning={''} warningNavigate='' />
                <Input placeholder={t('sign_up_email')} keyboardType={'email-address'} value={email} setValue={setEmail} icon={<Email />} secureTextEntry={false} hasWarning={''} warningNavigate='' />
                <Input placeholder={t('sign_up_password1')} keyboardType={'default'} value={password} setValue={setPassword} icon={<Password />} secureTextEntry={true} hasWarning={''} warningNavigate='' />
                <Input placeholder={t('sign_up_password2')} keyboardType={'default'} value={password2} setValue={setPassword2} icon={<Password />} secureTextEntry={true} hasWarning={''} warningNavigate='' />
            </View>
            <TouchableOpacity 
                style={styles.create_btn} 
                onPress={() => createAccount()}
            >
                <Text style={styles.create_btn_text}>{t('sign_up_create_account')}</Text>
            </TouchableOpacity>
            <View style={styles.or_register_wrapper}>
                <Text style={styles.sign_up_register_or}>{t('sign_up_register_or')}</Text>
            </View>
            <View style={styles.circle_wrapper}>
                <Circle icon={<Google />} />
                <Circle icon={<Facebook />} />
            </View>
            <View style={styles.other_wrapper}>
                <View style={styles.line_other}></View>
                <Text style={styles.text_other}>OR</Text>
                <View style={styles.line_other}></View>
            </View>
            <View style={styles.sign_in}>
                <TouchableOpacity style={styles.change_page_sign}
                    onPress={navigateLogin}
                >
                    <Text style={styles.sign_in_text}>
                        {t('sign_up_login1')}
                        <Text style={styles.sign_in_text_important}>{t('sign_up_login2')}</Text>
                        {t('sign_up_login3')}
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
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
    }
})