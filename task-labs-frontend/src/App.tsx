import { Button, ScrollView, StatusBar } from 'react-native';
import { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import colors from './config/colors';
import OnBoarding from './pages/OnBoarding/OnBoarding';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAuth } from './context/AuthContext';
import SignUp from './pages/Authentication/SignUp';
import SignIn from './pages/Authentication/SignIn';
import ForgotPassword from './pages/Authentication/ForgotPassword';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';

export type RootStackParamList = {
    'On Boarding': any;
    'Sign Up': any;
    'Sign In': any;
    'Forgot Password': any;
    'Home': any;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {

    const { authState, onLogout } = useAuth(); 
    const [isOnBoardingCompleted, setIsOnBoardingCompleted] = useState(false);

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
                                {authState.authenticated === true ? (
                                    <Stack.Screen 
                                    name='Home'
                                    component={Home}
                                    options={{ headerShown: false }}
                                />
                                ) : (
                                    <Stack.Screen 
                                    name='On Boarding'
                                    children={() => (
                                        <OnBoarding 
                                            setIsOnBoardingCompleted={setIsOnBoardingCompleted}
                                        />
                                    )}
                                    options={{ headerShown: false }}
                                />
                                )}
                                <Stack.Screen 
                                    name='Sign Up'
                                    children={() => (
                                        <SignUp />
                                    )}
                                    options={{ headerShown: false }}
                                />
                                <Stack.Screen 
                                    name='Sign In'
                                    component={SignIn}
                                    options={{ headerShown: false }}
                                />
                                <Stack.Screen 
                                    name='Forgot Password'
                                    component={ForgotPassword}
                                    options={{ headerShown: false }}
                                />
                            </Stack.Navigator>
                        </ScrollView>
                        <Navbar />
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