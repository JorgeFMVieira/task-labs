import React from 'react';
import { SafeAreaView, Text, StyleSheet, View } from 'react-native';
import colors from '../../config/colors';

export default function Navbar() {
   return (
       <View style={styles.container}>
           <Text>Página de Navbar</Text>
       </View>
   );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'absolute',
        left: 0,
        bottom: 0,
        width: '100%',
        backgroundColor: 'red',
        borderTopWidth: 1,
    },
});