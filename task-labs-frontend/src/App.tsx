import { ScrollView, StatusBar } from 'react-native';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import colors from './config/colors';
import OnBoarding from './pages/OnBoarding/OnBoarding';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Auth from './pages/Authentication/Auth';
import { OnBoardingModel } from './components/Models/OnBoarding';
import { AuthModel } from './components/Models/Auth';

export type RootStackParamList = {
    'On Boarding': OnBoardingModel;
    'Auth': AuthModel;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {

    const [data, setData] = useState([]);
    const [auth, setAuth] = useState("");

    const RenderAuth = (props: any) => {
        return (
            <Auth {...props} auth={auth} setAuth={setAuth} />
        );
    }

    // const fetchData = async() => {
    //     const response = await fetch('http://127.0.0.1:8000/api/workhours/')
    //     const data = await response.json()

    //     setData(data);
    // }

  return (
    <NavigationContainer>
        <I18nextProvider i18n={i18n}>
            <SafeAreaView style={styles.container}>
                <StatusBar
                    barStyle="dark-content" // or 'light-content' based on your design
                    backgroundColor="transparent" // You can set a background color here
                    translucent={false}  // Makes the StatusBar transparent
                />
                <ScrollView contentContainerStyle={styles.scrollContainer}>
                    <Stack.Navigator>
                        <Stack.Screen name='On Boarding' component={OnBoarding} options={{ headerShown: false }} />
                        <Stack.Screen name='Auth' component={RenderAuth} options={{ headerShown: false }} />
                    </Stack.Navigator>
                </ScrollView>
            </SafeAreaView>
        </I18nextProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    scrollContainer: {
        flexGrow: 1, // This allows the ScrollView to expand as needed
        justifyContent: 'flex-start', // Start from the top
        width: '100%',
    },
});