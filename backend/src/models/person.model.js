const mongoose = require('../database/connection.db');


const PersonSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    friend: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Person'
    }
});

const PersonModel = mongoose.model('Person', PersonSchema);

module.exports = PersonModel;