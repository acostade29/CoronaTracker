const User =require('../models/user');

module.exports = {
  index,
  create,
  delete: deleteOne,
 
};


async function index(req, res) {
    const user = await User.findById(req.user._id);
    res.status(200).json(user.comments);
}

async function create(req, res) {
    const user = await User.findById(req.user._id);
    req.body.owner = req.user.name;
    user.comments.push(req.body);
    user.save(function(err) {
        res.status(201).json(user.comments);
    })
}

async function deleteOne(req, res) {
    const user = await User.findById(req.user._id);
    let deletedComment = user.comments.splice(req.params.idx, 1);
    user.save(function(err) {
        res.status(200).json(deletedComment);
    })
}

