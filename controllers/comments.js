const User =require('../models/user');
const Comment = require('../models/comment')

module.exports = {
  index,
  create,
  delete: deleteOne,
 
};





async function index(req, res) {
    Comment.find({})
    .then(comments => {res.json(comments)})
}

async function create(req, res) {
    console.log("We are here ")
    req.body.user = req.user._id;
    Comment.create(req.body)
    .then(res => {res.json()})

}

async function deleteOne(req, res) {

   Comment.findByIdAndDelete(req.params.id)
   .then(comment=> {res.json(comment)})

}
