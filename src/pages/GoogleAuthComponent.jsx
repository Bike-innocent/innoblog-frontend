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


import { useNavigate } from 'react-router-dom';

const GoogleAuthComponent = () => {
    const navigate = useNavigate(); // For client-side navigation after login if needed

    const handleGoogleLogin = () => {
        // Redirect to the Laravel backend for Google OAuth
        window.location.href = `https://backend.innoblog.com.ng/auth/google/redirect`;
    };

    return (
        <div>
            <button onClick={handleGoogleLogin}>
                Login with Google
            </button>
        </div>
    );
};

export default GoogleAuthComponent;
