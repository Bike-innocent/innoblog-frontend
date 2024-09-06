import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import axiosInstance from '../axiosInstance';

const GoogleAuthComponent = () => {
    const handleSuccess = async (credentialResponse) => {
        try {
            const { credential } = credentialResponse;
    
            // Send the credential to the Laravel backend
            const response = await axiosInstance.post('/auth/google/redirect', { credential });
    
            const { token, user } = response.data;
    
            // Store the token in localStorage
            localStorage.setItem('authToken', token);
    
            // Handle user data (e.g., store user in state)
            console.log('User:', user);
    
        } catch (error) {
            console.error('Login failed:', error);
        }
    };
    

    return (
        <GoogleOAuthProvider clientId="794515842840-l1gtp80th79222cimtr0mo3dj414rvfl.apps.googleusercontent.com">
            <GoogleLogin
                onSuccess={handleSuccess}
                onError={() => {
                    console.log('Login Failed');
                }}
            />
        </GoogleOAuthProvider>
    );
};

export default GoogleAuthComponent;
