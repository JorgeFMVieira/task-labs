import { KeyboardTypeOptions, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import colors from '../../config/colors';
import { fonts } from '../../config/fonts/fonts';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../App';

export type InputProps = {
    placeholder: string;
    keyboardType: KeyboardTypeOptions;
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
    icon: React.JSX.Element;
    secureTextEntry: boolean;
    hasWarning: string;
    warningNavigate: string;
}

export default function Input(props: InputProps) {

    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const navigateWarning = () => {
        if(props.warningNavigate === 'Forgot Password'){
            navigation.navigate('Auth', { auth: 'Forgot Password'});
        }
    }

    return (
        <View style={styles.wrapper}>
            <View style={styles.input_container}>
                {props.icon}
                <TextInput
                    style={styles.input}
                    onChangeText={props.setValue}
                    value={props.value}
                    placeholder={props.placeholder}
                    placeholderTextColor={colors.neutral}
                    keyboardType={props.keyboardType}
                    secureTextEntry={props.secureTextEntry}
                />
            </View>
            {props.hasWarning !== '' && 
                <TouchableOpacity 
                    onPress={navigateWarning}
                >
                    <Text style={styles.warning}>
                        {props.hasWarning}
                    </Text>
                </TouchableOpacity>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: 25
    },
    input_container: {
        width: '100%',
        height: 50,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        backgroundColor: colors.input,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        width: '100%',
        fontFamily: fonts.bodyText.fontFamily,
        fontWeight: fonts.bodyText.fontWeight,
        fontSize: 18,
        marginLeft: 5
    },
    warning: {
        marginLeft: 'auto',
        color: colors.main,
        marginTop: 5
    }
})