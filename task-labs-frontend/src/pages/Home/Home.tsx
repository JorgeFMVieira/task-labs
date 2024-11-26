import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';

export default function FunctionName() {
   return (
       <SafeAreaView style={styles.container}>
           <Text>Página de FunctionName</Text>
       </SafeAreaView>
   );
}

const styles = StyleSheet.create({
   container: {
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center',
   },
});