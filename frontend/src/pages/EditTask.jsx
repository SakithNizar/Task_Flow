import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

function EditTask() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    deadline: '',
    assignedTo: '',
    status: 'Pending'
  });

  useEffect(() => {
    axios.get(`http://localhost:5000/api/tasks`)
      .then(res => {
        const task = res.data.find(t => t._id === id);
        if (task) setFormData(task);
      });
  }, [id]);

  const handleChange = e => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    await axios.put(`http://localhost:5000/api/tasks/${id}`, formData);
    navigate('/tasks');
  };

  return (
    <div>
      <Navbar />
      <div className="p-6">
        <h2 className="text-xl font-bold mb-4">Edit Task</h2>
        <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
          <input name="title" placeholder="Title" value={formData.title} onChange={handleChange} className="w-full border p-2" required />
          <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} className="w-full border p-2" required />
          <input type="date" name="deadline" value={formData.deadline?.slice(0, 10)} onChange={handleChange} className="w-full border p-2" required />
          <input name="assignedTo" placeholder="Assigned To" value={formData.assignedTo} onChange={handleChange} className="w-full border p-2" required />
          <select name="status" value={formData.status} onChange={handleChange} className="w-full border p-2">
            <option>Pending</option>
            <option>In Progress</option>
            <option>Done</option>
          </select>
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Update</button>
        </form>
      </div>
    </div>
  );
}

export default EditTask;
