const Task = require('../models/Task');
const PDFDocument = require('pdfkit');

exports.getTasks = async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
};

exports.addTask = async (req, res) => {
  const newTask = new Task(req.body);
  await newTask.save();
  res.json(newTask);
};

exports.updateTask = async (req, res) => {
  const updated = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

exports.deleteTask = async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.sendStatus(204);
};

exports.exportTasksPDF = async (req, res) => {
  const tasks = await Task.find();
  const doc = new PDFDocument();
  res.setHeader('Content-Type', 'application/pdf');
  doc.pipe(res);
  tasks.forEach(t => {
    doc.text(`Title: ${t.title}, Status: ${t.status}`);
    doc.moveDown();
  });
  doc.end();
};
