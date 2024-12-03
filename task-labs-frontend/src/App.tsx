import { SafeAreaView, ScrollView, StatusBar, StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import { createNavigationContainerRef, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAuth } from './context/AuthContext';
import OnBoarding from './pages/OnBoarding/OnBoarding';
import SignUp from './pages/Authentication/SignUp';
import SignIn from './pages/Authentication/SignIn';
import ForgotPassword from './pages/Authentication/ForgotPassword';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import LoadingPage from './pages/LoadingPage/LoadingPage';
import colors from './config/colors';

export type RootStackParamList = {
    'On Boarding': undefined;
    'Sign Up': undefined;
    'Sign In': undefined;
    'Forgot Password': undefined;
    'Home': undefined;
    'LoadingPage': undefined;
  };

const Stack = createNativeStackNavigator<RootStackParamList>();
const navigationRef = createNavigationContainerRef<RootStackParamList>();

export default function App() {
    const [loadTo, setLoadTo] = useState("load");
    const { authState } = useAuth();

    useEffect(() => {
        console.log("App loaded");
        if(loadTo === "load"){
            setTimeout(() => {
                if(authState.authenticated === true){
                    navigationRef.navigate('Home');
                }else{
                    navigationRef.navigate('On Boarding');
                }
            }, 2000);
        }
    }, []);


    useEffect(() => {
        if(loadTo && loadTo !== "load"){
            const navigateTo = loadTo;
            
            navigationRef.navigate('LoadingPage');
            setTimeout(() => {
                setLoadTo("");
                navigationRef.navigate(navigateTo as keyof RootStackParamList);
            }, 500);
        }
    }, [loadTo]);

    return (
        <NavigationContainer ref={navigationRef}>
            <I18nextProvider i18n={i18n}>
                <SafeAreaView style={styles.container}>
                <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent={false} />                
                    <ScrollView contentContainerStyle={styles.scrollContainer}>
                        <>
                                <Stack.Navigator>
                                    <>
                                        <Stack.Screen 
                                            name='LoadingPage'
                                            children={() =>
                                                <LoadingPage
                                                    loadTo={loadTo} setLoadTo={setLoadTo}
                                                />
                                            }
                                            options={{ 
                                                headerShown: false, 
                                                gestureEnabled: false,
                                            }}
                                        />
                                        {authState.authenticated === true ? (
                                            <Stack.Screen 
                                                name="Home"
                                                children={() => 
                                                    <Home />
                                                }
                                                options={{ headerShown: false, gestureEnabled: false }}
                                            />
                                        ) : (
                                            <Stack.Screen
                                                name="On Boarding"
                                                children={() => 
                                                    <OnBoarding 
                                                        loadTo={loadTo} setLoadTo={setLoadTo}
                                                    />
                                                }
                                                options={{ headerShown: false, gestureEnabled: false }}
                                            />
                                        )}
                                        <Stack.Screen
                                            name="Sign Up"
                                            children={() => 
                                                <SignUp 
                                                    loadTo={loadTo} setLoadTo={setLoadTo}
                                                />
                                            }
                                            options={{ headerShown: false, gestureEnabled: false }}
                                        />
                                        <Stack.Screen
                                            name="Sign In"
                                            children={() => 
                                                <SignIn 
                                                    loadTo={loadTo} setLoadTo={setLoadTo}
                                                />
                                            }
                                            options={{ headerShown: false, gestureEnabled: false }}
                                        />
                                        <Stack.Screen
                                            name="Forgot Password"
                                            children={() => 
                                                <ForgotPassword 
                                                    loadTo={loadTo} setLoadTo={setLoadTo}
                                                />
                                            }
                                            options={{ headerShown: false, gestureEnabled: false }}
                                        />
                                    </>
                            </Stack.Navigator>
                        </>
                    </ScrollView>
                {authState.authenticated === true && !loadTo && <Navbar />}
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
    flexGrow: 1,
    justifyContent: 'flex-start',
    width: '100%',
  },
});
