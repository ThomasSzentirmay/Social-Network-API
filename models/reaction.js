const mongoose = require('mongoose');



const Reaction = mongoose.model('Reaction', reactionSchema);

module.exports = Reaction;
