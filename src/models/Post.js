const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    author: String,
    place: String,
    description: String,
    hashtag: String,
    image: String,
    likes: {
        type: Number,
        default: 0,
    }
}, {
    timestamp: true,
});

module.exports = mongoose.model('Post', PostSchema);