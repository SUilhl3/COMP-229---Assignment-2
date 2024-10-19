const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projects');

router.get('/', projectController.getAllProjects);

router.get('/:id', projectController.getAllProjectById);

router.post('/', projectController.createProject);

router.put('/:id', projectController.updateProject);

router.delete('/:id', projectController.deleteProject);

module.exports = router;