const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const todo_controller = require('../controllers/todo.controller');

// a simple test url to check that all of our files are communicating correctly.
router.get('/', todo_controller.todoList);
router.post('/', todo_controller.todoItem);
router.delete('/:id', todo_controller.todoItemDelete);
router.put('/:id', todo_controller.todoItemUpdate);

module.exports = router;