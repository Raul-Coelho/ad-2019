const mongoose = require('mongoose');

mongoose.connect('mongodb://ad-2019-mongo:27017/ad-2019-mongo', { useNewUrlParser: true });
mongoose.Promise = global.Promise;


module.exports = mongoose;