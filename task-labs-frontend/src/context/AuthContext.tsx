import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';

// Define the shape of the AuthState and AuthProps
interface AuthState {
    token: string | null;
    authenticated: boolean | null;
}

interface AuthProps {
    authState: AuthState;
    onRegister: (email: string, username: string, password: string, password2: string) => Promise<any>;
    onLogin: (email: string, password: string) => Promise<any>;
    onLogout: () => Promise<void>;
}

const TOKEN_KEY = 'my-jwt';
const API_URL = 'http://192.168.1.167:8000/api'; // Update this URL if needed

const AuthContext = createContext<AuthProps | undefined>(undefined);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [authState, setAuthState] = useState<AuthState>({
        token: null,
        authenticated: false,
    });

    useEffect(() => {
        const loadToken = async () => {
            const token = await SecureStore.getItemAsync(TOKEN_KEY);
            console.log("stored token: ", token);

            if (token) {
                // If token exists, set it in axios headers
                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

                setAuthState({
                token: token,
                authenticated: true,
                });
            }
        };

        loadToken();
    }, []);

    const register = async (email: string, username: string, password: string, password2: string) => {
        try {
            const result = await axios.post(`${API_URL}/register/`, { email, username, password, password2 });
            return result.data; // Return the server response or some success message
        } catch (e) {
            return { error: true, msg: (e as any)?.response?.data || 'Unknown error' };
        }
    };

    const login = async (email: string, password: string) => {
        try {
            const result = await axios.post(`${API_URL}/token/`, { email, password });

            console.log("login result: ", result);

            // Update the authState with the token
            setAuthState({
                token: result.data.token,
                authenticated: true,
            });

            // Set the token in axios default headers
            axios.defaults.headers.common['Authorization'] = `Bearer ${result.data.token}`;

            // Store the token in secure storage
            await SecureStore.setItemAsync(TOKEN_KEY, result.data.token);

            return result; // Return the login response or success message
        } catch (e) {
            return { error: true, msg: (e as any)?.response?.data?.msg || 'Unknown error' };
        }
    };

    const logout = async () => {
        // Remove the token from secure storage and axios headers
        await SecureStore.deleteItemAsync(TOKEN_KEY);

        // Reset axios authorization header
        axios.defaults.headers.common['Authorization'] = '';

        // Reset authState
        setAuthState({
                token: null,
                authenticated: false,
        });
    };

    const value = {
        onRegister: register,
        onLogin: login,
        onLogout: logout,
        authState,
    };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
