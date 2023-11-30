const mongoose = require('mongoose');
const { Schema } = mongoose;
var mongoosePaginate = require('mongoose-paginate');

const formSchema = new Schema(
  {
    formname: {
      type: String,
      default: ''
    },
    path: {
      type: String,
      default: ''
    },
    status: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true,
    typecast: true,
  }
)

formSchema.plugin(mongoosePaginate);
var formModel = mongoose.model('forms', formSchema);
module.exports = formModel