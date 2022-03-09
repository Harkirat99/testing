let mongoose = require('mongoose');

let teacherSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    className: {
        type: String,
        required: true
    }   
})
module.exports = mongoose.model('Teacher', teacherSchema);