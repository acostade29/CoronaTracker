const User =require('../models/user');
const Comment = require('../models/comment')

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
    console.log("We are here ")
    req.body.user = req.user._id;
    Comment.create(req.body)
    .then(res => {res.json()})

}

async function deleteOne(req, res) {
    const user = await User.findById(req.user._id);
    let deletedComment = user.comments.splice(req.params.idx, 1);
    user.save(function(err) {
        res.status(200).json(deletedComment);
    })
}

