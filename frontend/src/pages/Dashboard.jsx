import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import { FaClipboardList, FaHourglassHalf, FaCheckCircle } from 'react-icons/fa';

function Dashboard() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/tasks')
      .then(res => setTasks(res.data));
  }, []);

  const total = tasks.length;
  const pending = tasks.filter(t => t.status === 'Pending').length;
  const done = tasks.filter(t => t.status === 'Done').length;

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-100">
      <Navbar />
      <div className="p-6 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard</h1>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* Total Tasks */}
          <div className="bg-white p-6 rounded-xl shadow-lg flex items-center gap-4">
            <FaClipboardList className="text-blue-600 text-3xl" />
            <div>
              <p className="text-lg font-semibold text-gray-700">Total Tasks</p>
              <p className="text-2xl font-bold text-gray-900">{total}</p>
            </div>
          </div>

          {/* Pending Tasks */}
          <div className="bg-white p-6 rounded-xl shadow-lg flex items-center gap-4">
            <FaHourglassHalf className="text-yellow-500 text-3xl" />
            <div>
              <p className="text-lg font-semibold text-gray-700">Pending</p>
              <p className="text-2xl font-bold text-gray-900">{pending}</p>
            </div>
          </div>

          {/* Done Tasks */}
          <div className="bg-white p-6 rounded-xl shadow-lg flex items-center gap-4">
            <FaCheckCircle className="text-green-600 text-3xl" />
            <div>
              <p className="text-lg font-semibold text-gray-700">Completed</p>
              <p className="text-2xl font-bold text-gray-900">{done}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
