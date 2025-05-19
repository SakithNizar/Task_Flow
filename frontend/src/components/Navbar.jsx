import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-indigo-700 to-purple-700 text-white px-6 py-4 shadow-md relative">
      <div className="max-w-7xl mx-auto flex items-center justify-between relative">
        {/* Left: Logo & Brand */}
        <div className="flex items-center space-x-2 text-2xl font-bold z-10">
          <span>🗂️</span>
          <Link to="/dashboard" className="hover:text-indigo-200 transition duration-200">
            TaskFlow
          </Link>
        </div>

        {/* Center: Navigation Links */}
        <div className="absolute left-1/2 transform -translate-x-1/2 flex space-x-8 text-base font-medium">
          <Link
            to="/dashboard"
            className="hover:text-yellow-200 transition duration-200"
          >
            Dashboard
          </Link>
          <Link
            to="/tasks"
            className="hover:text-yellow-200 transition duration-200"
          >
            Task List
          </Link>
          <Link
            to="/add-task"
            className="hover:text-yellow-200 transition duration-200"
          >
            Add Task
          </Link>
        </div>

        {/* Right: Logout Button */}
        <div className="z-10">
          <Link
            to="/"
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full text-sm md:text-base transition duration-200 shadow"
          >
            Logout
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
