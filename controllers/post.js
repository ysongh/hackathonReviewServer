const Hackathon = require("../models/Hackathon");
const Post = require("../models/Post");

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