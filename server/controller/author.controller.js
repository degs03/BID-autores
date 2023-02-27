const { Author } = require('../model/author.model');

module.exports.createAuthor = (req, res) => {
    const { author } = req.body;
    Author.create({
        author
    })
        .then(author=> res.json(author))
        .catch(error => res.json(error))
}

module.exports.findAuthor = (req, res) => {
    Author.find({}).sort({author:-1})
        .then(todosLosautores => res.json(todosLosautores))
        .catch(err => res.json({ message: "Algo salio mal", error: err }));
}

module.exports.getAuthor = (req, res) => {
    Author.findOne({ _id: req.params.id })
        .then(author => res.json(author))
        .catch(err => res.json(err))
}

module.exports.updateAuthor = (req, res) => {
    Author.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then(updatedAuthor => res.json(updatedAuthor))
        .catch(err => res.json(err))
}
module.exports.deleteAuthor = (request, response) => {
    Author.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}




