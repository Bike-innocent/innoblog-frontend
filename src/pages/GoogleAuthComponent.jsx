import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc'; // Google icon from react-icons

const GoogleAuthComponent = ({ text = 'Login with Google' }) => { // Default text prop
    const navigate = useNavigate(); // For client-side navigation after login

    const handleGoogleLogin = () => {
        // Redirect to the Laravel backend for Google OAuth
        window.location.href = `https://backend.innoblog.com.ng/auth/google/redirect`;
    };

    useEffect(() => {
        // Check if the URL contains the 'token' parameter
        const queryParams = new URLSearchParams(window.location.search);
        const token = queryParams.get('token');

        if (token) {
            // Store the token in localStorage
            localStorage.setItem('authToken', token);

            // Navigate to the dashboard or any other route
            navigate('/');
        }
    }, [navigate]);

    return (
        <div>
            <button
                type="button"
                onClick={handleGoogleLogin}
                className="flex items-center justify-center border border-gray-400 text-gray-700 py-2 px-4 rounded mt-2 hover:bg-gray-100 w-full"
            >
                <FcGoogle className="mr-2" size={24} /> {/* Google icon */}
                {text}
            </button>
        </div>
    );
};

export default GoogleAuthComponent;
