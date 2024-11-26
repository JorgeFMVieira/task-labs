import { Button, ScrollView, StatusBar } from 'react-native';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import colors from './config/colors';
import OnBoarding from './pages/OnBoarding/OnBoarding';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { OnBoardingModel } from './components/Models/Navigation/OnBoarding';
import { AuthModel } from './components/Models/Navigation/Auth';
import { AuthProvider, useAuth } from './context/AuthContext';
import SignUp from './pages/Authentication/SignUp';

export type RootStackParamList = {
    'On Boarding': OnBoardingModel;
    'Sign Up': AuthModel;
    'Sign In': AuthModel;
    'Forgot Password': AuthModel;
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
                                {authState?.authenticated ? (
                                    <Stack.Screen 
                                        name='On Boarding' 
                                        children={() => (
                                            <OnBoarding 
                                                setIsOnBoardingCompleted={setIsOnBoardingCompleted}
                                            />
                                        )}
                                        options={{ headerShown: false }} 
                                    />
                                ) : (
                                    isOnBoardingCompleted ? (
                                        <Stack.Screen
                                            name='Sign Up'
                                            children={() => (
                                                <SignUp auth={"Sign Up"} />
                                            )}
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
                                    )
                                )}
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