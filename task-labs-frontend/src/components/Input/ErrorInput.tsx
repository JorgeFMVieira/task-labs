import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import ErrorSVG from '../../config/SVG/Error/ErrorSVG';
import colors from '../../config/colors';
import { fonts } from '../../config/fonts/fonts';

export type ErrorInputProps = {
    field: string;
    errors: { [key: string]: string };  // This means each key (field) in the errors object is a string, and its value is a string (the error message)
}

export default function ErrorInput(props: ErrorInputProps)  {

    const errorMessage = props.errors[props.field];
    
    if (!errorMessage) return null;  // Se não houver erro, não renderiza nada

    return (
        <View>
            {Object.entries(props.errors).map(([field]) => {
                if (props.field === field) {
                    return (
                        <View style={styles.error_wrapper} key={field}>
                            <ErrorSVG />
                            <Text key={field} style={styles.error_text}>{props.errors[props.field]}</Text>
                        </View>
                    )
                }
                return null;
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    error_wrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5
    },
    error_text: {
        color: colors.error,
        fontSize: 12,
        fontFamily: fonts.bodyText.fontFamily,
        fontWeight: fonts.bodyText.fontWeight,
    }
})