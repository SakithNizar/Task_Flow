import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

function AddTask() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    deadline: '',
    assignedTo: '',
    status: 'Pending'
  });

  const handleChange = e => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/tasks', formData);
    navigate('/tasks');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Navbar />
      <div className="p-6 max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Add New Task</h2>

        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow space-y-4">
          <input
            name="title"
            placeholder="Title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-4 py-2"
            required
          />

          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-4 py-2"
            required
          />

          <input
            type="date"
            name="deadline"
            value={formData.deadline}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-4 py-2"
            required
          />

          <input
            name="assignedTo"
            placeholder="Assigned To"
            value={formData.assignedTo}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-4 py-2"
            required
          />

          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-4 py-2"
          >
            <option>Pending</option>
            <option>In Progress</option>
            <option>Done</option>
          </select>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 shadow transition"
          >
            Submit Task
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddTask;
