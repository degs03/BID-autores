const mongoose = require('mongoose');
const AuthorSchema = new mongoose.Schema({
    author: {
        type: String,
        required: [true, "The author is required"],
        min: [3, 'The word must have at least 3 characters']
    },
}, { timestamps: true });
module.exports.Author = mongoose.model('Author', AuthorSchema);