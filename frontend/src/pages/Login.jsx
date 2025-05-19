import { useState } from 'react';

function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleLogin = () => {
    try {
      setIsLoading(true);
      setError(null);
      window.location.href = 'http://localhost:5000/auth/google';
    } catch (err) {
      setError('Authentication failed. Please try again.');
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-indigo-100 via-white to-sky-100 flex items-center justify-center px-4">
      <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-xl p-10 w-full max-w-md text-center">
        <h1 className="text-3xl font-bold text-indigo-700 mb-3">Welcome to TaskFlow</h1>
        <p className="text-base text-gray-600 mb-6">Sign in to continue and manage your tasks.</p>

        {error && (
          <div className="mb-4 text-sm text-red-600 bg-red-100 px-4 py-2 rounded">
            {error}
          </div>
        )}

        <button
          onClick={handleLogin}
          disabled={isLoading}
          className={`flex items-center justify-center gap-3 bg-indigo-600 text-white px-5 py-2 rounded-full font-medium transition-colors w-full
            ${isLoading ? 'opacity-60 cursor-not-allowed' : 'hover:bg-indigo-700'}`}
        >
          <img
            src="https://www.google.com/images/icons/product/search-32.gif"
            alt="Google"
            className="w-5 h-5"
          />
          {isLoading ? 'Connecting...' : 'Sign in with Google'}
        </button>

        <p className="text-xs text-gray-400 mt-6">
          Google OAuth 2.0 authentication is required
        </p>
      </div>
    </div>
  );
}

export default Login;
