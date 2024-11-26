import App from './App';
import { AuthProvider } from './context/AuthContext';


export default function Main() {
    return (
        <AuthProvider>
            <App />
        </AuthProvider>
    );
}
