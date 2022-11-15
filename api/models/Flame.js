const {Schema, model} = require('mongoose')

const FlameSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  text: {
    type: String,
    required: true
  }, 
},)

module.exports = model('flame', FlameSchema)