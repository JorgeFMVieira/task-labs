import { SafeAreaView, StyleSheet, Text } from 'react-native'
import React from 'react'
import colors from '../../../config/colors';
import { useTranslation } from 'react-i18next';
import { fonts } from '../../../config/fonts/fonts';

export type BarTextProps = {
    currentPage: number;
}

export default function BarText(props: BarTextProps) {

    const { t } = useTranslation();

    const getCurrentTitle = () => {
        if (props.currentPage === 1) {
            return (
                <Text style={styles.text}>
                    <Text style={styles.textImportant}>{t('bar_text_enhance')}</Text>{t('bar_text_company')}
                    <Text style={styles.textImportant}>{t('bar_text_productivity')}</Text>
                </Text>
            );
        }else if(props.currentPage === 2){
            return (
                <Text style={styles.text}>
                    <Text>{t('bar_text_stay')}</Text>
                    <Text style={styles.textImportant}>{t('bar_text_organized')}</Text>{t('bar_text_stay2')}<Text style={styles.textImportant}>{t('bar_text_focused')}</Text>
                    <Text>{t('bar_text_and')}</Text><Text style={styles.textImportant}>{t('bar_text_results')}</Text>
                </Text>
            );
        }else if(props.currentPage === 3){
            return (
                <Text style={styles.text}>
                    <Text>{t('bar_text_monitor')}</Text>
                    <Text style={styles.textImportant}>{t('bar_text_realtime')}</Text>{t('bar_text_stay3')}<Text style={styles.textImportant}>{t('bar_text_ahead')}</Text>
                </Text>
            );
        }
        return null; // Return null for other pages if you don't have specific text.
    };

    return (
        <SafeAreaView style={styles.container}>
            {getCurrentTitle()}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%'
    },
    text: {
        color: colors.text,
        fontSize: 20,
        textAlign: 'center',
        fontFamily: fonts.title.fontFamily,
        fontWeight: fonts.title.fontWeight,
    },
    textImportant: {
        color: colors.main,
        fontSize: 20,
        fontFamily: fonts.title.fontFamily,
        fontWeight: fonts.title.fontWeight,
    },
})