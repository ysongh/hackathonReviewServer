const Hackathon = require("../models/Hackathon");
const Post = require("../models/Post");

exports.getAllPost = (req, res, next) => {
    const hackathonId = req.params.hackathonId;

    Hackathon.findById(hackathonId)
        .populate("posts")
        .then(result => {
            res.status(200).json({
                msg: "Success on finding all the posts",
                data: result
            });
        });
};

exports.addPost = (req, res, next) => {
    const hackathonId = req.params.hackathonId;
    const text = req.body.text;
    let error;

    const newData = new Post({
        text: text
    });
    
    Hackathon.findById(hackathonId)
        .then(hackathon => {
            if(!hackathon){
                throw new error(res.status(404).json({error: 'Hackathon not found'}));
            }
            else{
                hackathon.posts.push(newData);
                return hackathon.save();
            }
        })
        .then(result => {
            return newData.save();
        })
        .then(result => {
            res.status(201).json({
                msg: "Success on creating a profile",
                data: result
            });
        })
        .catch(err => {
            return res.status(500).json({error: err});
        });
};

exports.likePost = (req, res, next) => {
    const postId = req.params.postId;

    Post.findById(postId)
        .then(result => {
            res.status(200).json({
                msg: "Success on finding all the posts",
                data: result
            });
        });
};