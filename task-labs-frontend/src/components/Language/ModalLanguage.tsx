import { FlatList, Modal, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Language } from './Language';
import { useTranslation } from 'react-i18next';
import { fonts } from '../../config/fonts/fonts';
import EnglandFlag from '../../config/SVG/OnBoarding/Flags/EnglandFlag';
import FranceFlag from '../../config/SVG/OnBoarding/Flags/FranceFlag';
import GermanFlag from '../../config/SVG/OnBoarding/Flags/GermanFlag';
import ItalyFlag from '../../config/SVG/OnBoarding/Flags/ItalyFlag';
import PortugalFlag from '../../config/SVG/OnBoarding/Flags/PortugalFlag';
import RussiaFlag from '../../config/SVG/OnBoarding/Flags/RussiaFlag';
import SpainFlag from '../../config/SVG/OnBoarding/Flags/SpainFlag';
import i18n from '../../i18n';
import colors from '../../config/colors';

export type ModalLanguageProps = {
    isModalVisible: boolean;
    setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
    setCurrentLanguage: React.Dispatch<React.SetStateAction<string>>;
    currentLanguage: string;
}

export default function ModalLanguage(props: ModalLanguageProps) {

    const { t } = useTranslation();

    const languages: Language[] = [
        {
            name: "English",
            code: "en",
            src: <EnglandFlag width={30} height={30} />,
        },
        {
            name: "Spanish",
            code: "es",
            src: <SpainFlag width={30} height={30} />,
        },
        {
            name: "French",
            code: "fr",
            src: <FranceFlag width={30} height={30} />,
        },
        {
            name: "Portuguese",
            code: "pt",
            src: <PortugalFlag width={30} height={30} />,
        },
        {
            name: "German",
            code: "de",
            src: <GermanFlag width={30} height={30} />,
        },
        {
            name: "Italian",
            code: "it",
            src: <ItalyFlag width={30} height={30} />,
        },
        {
            name: "Russian",
            code: "ru",
            src: <RussiaFlag width={30} height={30} />,
        },
    ];

    const handleLanguageSelect = (language: Language) => {
        props.setCurrentLanguage(language.name);
        props.setModalVisible(false);
        i18n.changeLanguage(language.code)
    };
    
    return (
        <SafeAreaView>
            <Modal
                animationType="slide"
                transparent={false}
                visible={props.isModalVisible}
                onRequestClose={() => props.setModalVisible(false)}
            >
                <View style={styles.modalWrapper}>
                    <View style={styles.modalBack}>
                        <Text style={styles.modalBackText}>{t('modal_language_language')}</Text>
                    </View>
                    <FlatList
                        data={languages}
                        renderItem={({ item }) => (
                            <TouchableOpacity 
                                style={[styles.languageOption, {borderColor: item.name === props.currentLanguage ? colors.main : 'rgba(0,0,0,0.1)'}]} 
                                onPress={() => handleLanguageSelect(item)}
                            >
                                {item.src}
                                <Text style={{ color: item.name === props.currentLanguage ? colors.main : colors.text, fontWeight: item.name === props.currentLanguage ? 'bold' : 'normal', fontFamily: fonts.title.fontFamily }}>{item.name}</Text>
                            </TouchableOpacity>
                        )}
                        keyExtractor={(item, index) => index.toString()}
                        numColumns={2}
                        contentContainerStyle={styles.gridContainer}
                    />
                    <TouchableOpacity 
                        style={styles.closeButton} 
                        onPress={() => props.setModalVisible(false)}
                    >
                        <Text style={styles.closeButtonText}>{t('modal_language_done')}</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    modalWrapper: {
        flex: 1,
        padding: 20,
        backgroundColor: colors.background,
    },
    gridContainer: {
        paddingBottom: 60,
    },
    languageOption: {
        flex: 1,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderColor: 'rgba(0,0,0,0.1)',
        borderRadius: 10,
        height: 100,
    },
    languageText: {
        fontSize: 16,
        color: colors.text,
    },
    closeButton: {
        position: 'absolute',
        bottom: 20,
        left: 20,
        right: 20,
        paddingVertical: 15,
        backgroundColor: colors.main,
        borderRadius: 10,
        alignItems: 'center',
    },
    closeButtonText: {
        fontSize: 16,
        color: colors.secondaryText,
        fontFamily: fonts.bodyText.fontFamily,
        fontWeight: fonts.bodyText.fontWeight,
    },
    modalBack: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15,
    },
    modalBackText: {
        textAlign: 'center',
        fontSize: 32,
        color: colors.main,
        fontFamily: fonts.title.fontFamily,
        fontWeight: fonts.title.fontWeight,
    },
})