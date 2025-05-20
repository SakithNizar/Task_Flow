const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');
const requireAuth = require('../middleware/authMiddleware');


router.get('/', taskController.getTasks);
router.post('/', taskController.addTask);
router.put('/:id', taskController.updateTask);
router.delete('/:id', taskController.deleteTask);
router.get('/export/pdf', taskController.exportTasksPDF);

module.exports = router;

