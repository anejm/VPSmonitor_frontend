const mongoose = require('mongoose');

const serverSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    hostname: {
        type: String,
        required: true
    },

    status: {
        type: String,
        enum: ['online', 'offline'],
        default: 'offline'
    },

    cpu: {
        type: Number,
        default: 0
    },

    memory: {
        type: Number,
        default: 0
    },

    lastSeen: {
        type: Date
    }
});

module.exports = mongoose.model('Server', serverSchema);