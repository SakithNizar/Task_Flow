import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState('');

  const fetchTasks = () => {
    axios.get('http://localhost:5000/api/tasks')
      .then(res => setTasks(res.data));
  };

  const deleteTask = (id) => {
    axios.delete(`http://localhost:5000/api/tasks/${id}`)
      .then(fetchTasks);
  };

  const exportPDF = () => {
    window.open('http://localhost:5000/api/tasks/export/pdf', '_blank');
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(search.toLowerCase()) ||
    task.assignedTo?.toLowerCase().includes(search.toLowerCase())
  );

  const sortedTasks = [...filteredTasks].sort((a, b) => {
    if (!sortBy) return 0;
    const fieldA = a[sortBy]?.toLowerCase() || '';
    const fieldB = b[sortBy]?.toLowerCase() || '';
    return fieldA.localeCompare(fieldB);
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100">
      <Navbar />
      <div className="p-6 max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">All Tasks</h1>
          <Link
            to="/add-task"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-md transition"
          >
            + Add Task
          </Link>
        </div>

        {/* Search and Sort Controls */}
        <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
          <input
            type="text"
            placeholder="Search by title or assigned to..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 w-full md:w-1/2 shadow-sm"
          />
          <select
            value={sortBy}
            onChange={e => setSortBy(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 w-full md:w-1/4 shadow-sm"
          >
            <option value="">Sort by</option>
            <option value="title">Title (A-Z)</option>
            <option value="status">Status</option>
            <option value="assignedTo">Assigned To</option>
          </select>
        </div>

        <button
          onClick={exportPDF}
          className="mb-6 px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition"
        >
          Download PDF
        </button>

        {/* Task Table */}
        <div className="overflow-x-auto bg-white rounded-xl shadow-md">
          <table className="min-w-full text-sm text-gray-700">
            <thead>
              <tr className="bg-gray-100 text-left text-sm text-gray-600">
                <th className="px-6 py-3 border-b">Title</th>
                <th className="px-6 py-3 border-b">Assigned To</th>
                <th className="px-6 py-3 border-b">Status</th>
                <th className="px-6 py-3 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {sortedTasks.map(task => (
                <tr key={task._id} className="hover:bg-gray-50">
                  <td className="px-6 py-3 border-b">{task.title}</td>
                  <td className="px-6 py-3 border-b">{task.assignedTo || '-'}</td>
                  <td className="px-6 py-3 border-b">{task.status}</td>
                  <td className="px-6 py-3 border-b space-x-3">
                    <Link
                      to={`/edit-task/${task._id}`}
                      className="text-blue-600 hover:underline font-medium"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => deleteTask(task._id)}
                      className="text-red-600 hover:underline font-medium"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              {sortedTasks.length === 0 && (
                <tr>
                  <td colSpan="4" className="text-center py-6 text-gray-400">
                    No tasks found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default TaskList;
