const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let TodoSchema = new Schema({
    text: {type: String, required: true},
    checked: {type: Boolean, default: false},
});

module.exports = mongoose.model('Todo', TodoSchema);