const {model, Schema} = require('mongoose');

const schema = new Schema({
    title:  String, // String is shorthand for {type: String}
    bdwinner: {
      type: Schema.Types.ObjectId,
      ref: 'Bdwinner'
    },
    description:   String,
    done: {type: Boolean, default: false}, 
    comments: [{ body: String, date: Date }],
    crateDate: { type: Date, default: Date.now },
    dueDate: { type: Date, required: true }
  });
const Season = model('Season', schema);

module.exports = Season
;