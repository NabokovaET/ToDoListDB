const Todo = require('../models/todo.model');

exports.todoList = async (req, res) => {
    try {
        const list = await Todo.find({}, 'id text checked');
        res.status(200).send(list);
    } catch (error) {res.status(400).send(error.message)};
};

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

exports.todoItemAllCheck = async (req, res) => {
    try {
        const itemAllCheck = await Todo.updateMany({$set: req.body});
        res.status(200).send(itemAllCheck);
    } catch (error) {res.status(400).send(error.message)};
};

exports.todoItemUpdate = async (req, res) => {
    try {
        const itemUpdate = await Todo.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true});
        res.status(200).send(itemUpdate);
    } catch (error) {res.status(400).send(error.message)};
};

exports.todoListClear = async (req, res) => {
    try {
        const listClear = await Todo.deleteMany({checked: true});
        res.status(200).send(listClear);
    } catch (error) {res.status(400).send(error.message)};
};

