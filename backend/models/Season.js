const {model, Schema} = require('mongoose');

const schema = new Schema({
    team:  String, // String is shorthand for {type: String}
    year:  String,
    bdwinner: {
      type: Schema.Types.ObjectId,
      ref: 'Bdwinner'
    },
  });
const Season = model('Season', schema);

module.exports = Season;