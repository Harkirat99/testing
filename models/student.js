let mongoose = require('mongoose');

let studentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    class: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Student', studentSchema);