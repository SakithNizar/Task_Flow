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

  // 🔍 Filter by search text
  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(search.toLowerCase())
  );

  // 🔃 Optional sorting
  const sortedTasks = [...filteredTasks].sort((a, b) => {
    if (!sortBy) return 0;

    const fieldA = a[sortBy]?.toLowerCase();
    const fieldB = b[sortBy]?.toLowerCase();
    if (fieldA < fieldB) return -1;
    if (fieldA > fieldB) return 1;
    return 0;
  });

  return (
    <div>
      <Navbar />
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">All Tasks</h1>
          <Link to="/add-task" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            + Add Task
          </Link>
        </div>

        {/* 🔍 Search and 🔃 Sort */}
        <div className="flex flex-col md:flex-row justify-between gap-4 mb-4">
          <input
            type="text"
            placeholder="Search by title..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="border px-4 py-2 rounded w-full md:w-1/3"
          />
          <select
            value={sortBy}
            onChange={e => setSortBy(e.target.value)}
            className="border px-4 py-2 rounded w-full md:w-1/4"
          >
            <option value="">Sort by</option>
            <option value="title">Title (A-Z)</option>
            <option value="status">Status</option>
          </select>
        </div>

        <button
          onClick={exportPDF}
          className="mb-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Download PDF
        </button>

        <div className="overflow-x-auto">
          <table className="min-w-full border text-left">
            <thead>
              <tr className="bg-gray-200">
                <th className="border px-4 py-2">Title</th>
                <th className="border px-4 py-2">Status</th>
                <th className="border px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {sortedTasks.map(task => (
                <tr key={task._id} className="bg-white hover:bg-gray-50">
                  <td className="border px-4 py-2">{task.title}</td>
                  <td className="border px-4 py-2">{task.status}</td>
                  <td className="border px-4 py-2 space-x-3">
                    <Link
                      to={`/edit-task/${task._id}`}
                      className="text-blue-600 hover:underline"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => deleteTask(task._id)}
                      className="text-red-600 hover:underline"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              {sortedTasks.length === 0 && (
                <tr>
                  <td colSpan="3" className="text-center py-4 text-gray-400">
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
