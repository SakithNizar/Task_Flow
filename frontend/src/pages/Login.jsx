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
      <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-xl p-10 w-full max-w-md text-center animate-fade-in">
        <h1 className="text-3xl font-bold text-indigo-700 mb-2">Welcome to TaskFlow</h1>
        <p className="text-sm text-gray-600 mb-6">Sign in to continue and manage your tasks.</p>

        {error && (
          <div className="mb-4 text-sm text-red-600 bg-red-100 px-4 py-2 rounded">
            {error}
          </div>
        )}

        <button
          onClick={handleLogin}
          disabled={isLoading}
          className={`flex items-center justify-center gap-3 bg-indigo-600 text-white px-5 py-2 rounded-full font-medium transition w-full shadow
            ${isLoading ? 'opacity-60 cursor-not-allowed' : 'hover:bg-indigo-700'}`}
        >
          <svg
            className="w-5 h-5"
            viewBox="0 0 488 512"
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
          >
            <path
              fill="#ffffff"
              d="M488 261.8C488 403.3 391.1 512 248 512 110.8 512 0 401.2 0 264S110.8 16 248 16c66.5 0 122.7 24.5 164.7 64.5l-66.6 64.6C324 106.7 289 96 248 96c-89.6 0-162 73.6-162 168s72.4 168 162 168c81.2 0 133.2-58.2 139.2-111.2H248v-88h240c2 13.4 4 26.3 4 40z"
            />
          </svg>
          {isLoading ? 'Connecting...' : 'Sign in with Google'}
        </button>
        
      </div>

      <style>{`
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out both;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

export default Login;
