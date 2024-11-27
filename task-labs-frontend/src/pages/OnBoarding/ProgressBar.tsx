import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import colors from '../../config/colors';
import Bar from './Bar/Bar';
import BarText from './Bar/BarText';
import { useTranslation } from 'react-i18next';
import { fonts } from '../../config/fonts/fonts';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../App';
export type ProgressBarProps = {
    currentPage: number;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
    maxPages: number;
    setIsOnBoardingCompleted: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ProgressBar(props: ProgressBarProps) {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const { t } = useTranslation();

    const onPagePressNext = () => {
        if (props.currentPage <= props.maxPages - 1 && props.currentPage >= 1) {
            props.setCurrentPage(props.currentPage + 1);
        }

        if (props.currentPage === props.maxPages) {
            // Correct way to navigate and pass params
            navigation.navigate('Sign Up');
        }
    };

    return (
        <SafeAreaView style={styles.content}>
            <View style={styles.bar}>
                <Bar
                    isActive={props.currentPage === 1}
                    page={1}
                    setCurrentPage={props.setCurrentPage}
                    currentPage={props.currentPage}
                />
                <Bar
                    isActive={props.currentPage === 2}
                    page={2}
                    setCurrentPage={props.setCurrentPage}
                    currentPage={props.currentPage}
                />
                <Bar
                    isActive={props.currentPage === 3}
                    page={3}
                    setCurrentPage={props.setCurrentPage}
                    currentPage={props.currentPage}
                />
            </View>
            <View>
                <BarText currentPage={props.currentPage} />
            </View>
            <TouchableOpacity style={styles.button} onPress={onPagePressNext}>
                <View>
                    {props.currentPage === props.maxPages ? (
                        <Text style={styles.text_button}>{t('progress_bar_done')}</Text>
                    ) : (
                        <Text style={styles.text_button}>{t('progress_bar_next')}</Text>
                    )}
                </View>
            </TouchableOpacity>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    content: {
        width: '100%',
        marginTop: 35,
        alignItems: 'center',
        fontSize: 20,
    },
    bar: {
        display: 'flex',
        flexDirection: 'row',
        width: '80%',
        justifyContent: 'space-around',
        cursor: 'pointer'
    },
    button: {
        width: '100%',
        backgroundColor: colors.main,
        color: colors.secondaryText,
        borderRadius: 10,
        marginTop: 50,
        paddingVertical: 15,
        textAlign: 'center',
        cursor: 'pointer'
    },
    text_button: {
        color: colors.secondaryText,
        textAlign: 'center',
        fontFamily: fonts.bodyText.fontFamily,
        fontWeight: fonts.bodyText.fontWeight,
        fontSize: 16,
    }
})