// import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
// import { useNavigate } from 'react-router-dom';
// import { useEffect } from 'react';

// const GoogleAuthComponent = () => {
//     const navigate = useNavigate();

//     // Check if the token exists in the URL and store it in localStorage
//     useEffect(() => {
//         const urlParams = new URLSearchParams(window.location.search);
//         const token = urlParams.get('token');

//         if (token) {
//             // Store the token in localStorage
//             localStorage.setItem('authToken', token);

//             // Clear token from URL (optional, but recommended for cleaner URLs)
//             window.history.replaceState({}, document.title, '/');

//             // Redirect to the dashboard or any other page
//             navigate('/');
//         }
//     }, [navigate]);

//     return (
//         <GoogleOAuthProvider clientId="794515842840-l1gtp80th79222cimtr0mo3dj414rvfl.apps.googleusercontent.com">
//             <GoogleLogin
//                 onSuccess={(credentialResponse) => {
//                     // This can be removed or logged for debugging
//                     console.log('Google Login Successful:', credentialResponse);
//                 }}
//                 onError={() => {
//                     console.log('Login Failed');
//                 }}
//             />
//         </GoogleOAuthProvider>
//     );
// };

// export default GoogleAuthComponent;

import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../axiosInstance';

const GoogleAuthComponent = () => {
    const navigate = useNavigate();

    const handleGoogleLoginSuccess = async (credentialResponse) => {
        const { credential } = credentialResponse;

        try {
            // Send the credential to your Laravel backend
            const response = await axiosInstance.post('/auth/google/callback', {
                credential,
            });

            const { token } = response.data;

            // Store the received token in localStorage
            localStorage.setItem('authToken', token);

            // Redirect to the dashboard or any other page
            navigate('/');
        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    return (
        <GoogleOAuthProvider clientId="794515842840-l1gtp80th79222cimtr0mo3dj414rvfl.apps.googleusercontent.com">
            <GoogleLogin
                onSuccess={handleGoogleLoginSuccess}
                onError={() => {
                    console.log('Login Failed');
                }}
            />
        </GoogleOAuthProvider>
    );
};

export default GoogleAuthComponent;
