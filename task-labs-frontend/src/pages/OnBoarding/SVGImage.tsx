import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ProductivitySVG from '../../config/SVG/OnBoarding/ProductivitySVG';
import OrganizeSVG from '../../config/SVG/OnBoarding/OrganizeSVG';
import ProgressSVG from '../../config/SVG/OnBoarding/ProgressSVG';
import ProgressBar from './ProgressBar';

export type SVGImageProps = {
    currentPage: number;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
    maxPages: number;
    loadTo: string;
    setLoadTo: React.Dispatch<React.SetStateAction<string>>;
};

export default function SVGImage(props: SVGImageProps) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.svg_image}>
                {props.currentPage === 1 && <ProductivitySVG />}
                {props.currentPage === 2 && <OrganizeSVG />}
                {props.currentPage === 3 && <ProgressSVG />}
                {props.currentPage < 1 || props.currentPage > 3 ? (
                    <ProductivitySVG />
                ) : null}
            </View>
            <View style={styles.progress_bar}>
                <ProgressBar currentPage={props.currentPage} setCurrentPage={props.setCurrentPage} maxPages={props.maxPages} loadTo={props.loadTo} setLoadTo={props.setLoadTo} />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        marginTop: 15,
        alignItems: 'center',
    },
    svg_image: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    progress_bar: {
        width: '100%'
    }
});
