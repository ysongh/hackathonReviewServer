const Hackathon = require("../models/Hackathon");

exports.findAllHackathon = (req, res, next) => {
    Hackathon.find()
        .then(result => {
            res.status(200).json({
                msg: "Success on finding all hackathon",
                locations: result
            });
        });
};

exports.addHackathon = (req, res, next) => {
    const name = req.body.name;

    const newData = new Hackathon({
        name: name
    });

    newData.save()
        .then(result => {
            res.status(201).json({
                msg: "Success on adding a hackathon",
                location: result
            });
        })
        .catch(err => {
            return res.status(500).json({error: err});
        });
};