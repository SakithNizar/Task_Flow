import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';

function Dashboard() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/tasks')
      .then(res => setTasks(res.data));
  }, []);

  return (
    <div>
      <Navbar /> 
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white p-4 shadow rounded">Total Tasks: {tasks.length}</div>
          <div className="bg-yellow-200 p-4 shadow rounded">
            Pending: {tasks.filter(t => t.status === 'Pending').length}
          </div>
          <div className="bg-green-200 p-4 shadow rounded">
            Done: {tasks.filter(t => t.status === 'Done').length}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
