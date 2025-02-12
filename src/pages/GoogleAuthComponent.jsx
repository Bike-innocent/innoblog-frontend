import { FcGoogle } from 'react-icons/fc';

const GoogleAuthComponent = ({ text = 'Continue with Google' }) => {
  const handleGoogleLogin = () => {
    window.location.href = `https://api.innoblog.chibuikeinnocent.tech/auth/google/redirect`;
  };

  return (
    <div>
      <button
        type="button"
        onClick={handleGoogleLogin}
        className="flex items-center justify-center w-full px-4 py-2 mt-2 text-gray-700 border border-gray-400 rounded hover:bg-gray-100"
      >
        <FcGoogle className="mr-2" size={24} />
        {text}
      </button>
    </div>
  );
};

export default GoogleAuthComponent;
