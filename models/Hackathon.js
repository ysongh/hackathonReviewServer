const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const hackathonSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    posts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Post'
        }
    ]
});

module.exports = mongoose.model('Hackathon', hackathonSchema);