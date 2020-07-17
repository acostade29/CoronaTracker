const Comment =require('../models/comment');

module.exports = {
    index,
    create,
    show,
    delete: deleteOne

};



async function index(req, res) {
    const comments = await Comment.find({});
    res.status(200).json(comments);
}



async function create(req, res) {
    const comment = await Comment.create(req.body);
    res.status(201).json(comment);
}



async function show(req, res) {
    const comment = await Comment.findById(req.params.id);
    res.status(200).json(comment);
}




async function deleteOne(req, res) {
    const deletedComment = await Comment.findByIdAndRemove(req.params.id);
    res.status(200).json(deletedComment);
}

