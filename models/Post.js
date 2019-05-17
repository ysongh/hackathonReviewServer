const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PostSchema = new Schema({
    text: {
        type: String,
        require: true
    },
    likes:{
        type: Number,
        default: 0
    },
    date:{
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Post', PostSchema);