const mongoose = require('mongoose');
const { Schema } = mongoose;
var mongoosePaginate = require('mongoose-paginate');

const formSchema = new Schema(
  {
    formname: {
      type: String,
      default: ''
    },
    menuid: {
      type: String,
      default: '',
      ref:"menu"
    },
    submenuid: {
      type: String,
      default: false,
      ref:"subMenu"
    }
  },
  {
    timestamps: true,
    typecast: true,
  }
)

formSchema.plugin(mongoosePaginate);
var formModel = mongoose.model('formList', formSchema);
module.exports = formModel