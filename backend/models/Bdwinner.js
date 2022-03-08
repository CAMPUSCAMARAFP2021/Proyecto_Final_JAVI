const {model, Schema} = require('mongoose');

const schema = new Schema({
    name: String,
    subName: String,
    email: String,
    season: [
        {type: Schema.Types.ObjectId, ref:'Season'}
    ]
})

const Bdwinner = model('Bdwinner', schema);


module.exports = Bdwinner;