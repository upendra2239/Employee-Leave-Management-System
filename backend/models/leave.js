const mongoose = require('mongoose');

var Leave = mongoose.model('Leave', {
    name: { type: String },
    position: { type: String },
    office: { type: String },
    days: { type: String },
    reason: { type: String }
});

module.exports = { Leave };