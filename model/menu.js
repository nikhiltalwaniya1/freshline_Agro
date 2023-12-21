const mongoose = require('mongoose');
const { Schema } = mongoose;
var mongoosePaginate = require('mongoose-paginate');

const menuSchema = new Schema(
  {
    menuname: {
      type: String,
      default: ''
    },
    createdBy:{
      type: String,
      default: '',
      ref: "user",
    }
  },
  {
    timestamps: true,
    typecast: true,
  }
)

menuSchema.plugin(mongoosePaginate);
var menuModel = mongoose.model('menu', menuSchema);
module.exports = menuModel