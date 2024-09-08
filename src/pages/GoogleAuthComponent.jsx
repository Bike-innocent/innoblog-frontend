import { FcGoogle } from 'react-icons/fc';

const GoogleAuthComponent = ({ text = 'Continue with Google' }) => {
  const handleGoogleLogin = () => {
    window.location.href = `https://backend.innoblog.com.ng/auth/google/redirect`;
  };

  return (
    <div>
      <button
        type="button"
        onClick={handleGoogleLogin}
        className="flex items-center justify-center border border-gray-400 text-gray-700 py-2 px-4 rounded mt-2 hover:bg-gray-100 w-full"
      >
        <FcGoogle className="mr-2" size={24} />
        {text}
      </button>
    </div>
  );
};

export default GoogleAuthComponent;
