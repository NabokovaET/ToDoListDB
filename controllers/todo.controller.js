const Todo = require('../models/todo.model');

exports.todoList = async (req, res) => {
    try {
        const list = await Todo.find({}, 'id text checked');
        res.status(200).send(list);
    } catch (error) {res.status(400).send(error.message)};
  }

exports.todoItem = async (req, res) => {
    try {
        const item = await Todo.create({ text: req.body.text });
        res.status(200).send(item);
    } catch (error) {res.status(400).send(error.message)};
};

exports.todoItemDelete = async (req, res) => {
    try {
        const itemDelete = await Todo.findByIdAndRemove(req.params.id);
        res.status(200).send(itemDelete);
    } catch (error) {res.status(400).send(error.message)};
};

exports.todoItemUpdate = async (req, res) => {
    try {
        const itemUpdate = await Todo.findByIdAndUpdate(req.params.id, {$set: req.body});
        res.status(200).send(itemUpdate);
    } catch (error) {res.status(400).send(error.message)};
};

