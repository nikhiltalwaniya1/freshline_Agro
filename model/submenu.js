const mongoose = require('mongoose');
const { Schema } = mongoose;
var mongoosePaginate = require('mongoose-paginate');

const subMenuSchema = new Schema(
  {
    submenuname: {
      type: String,
      default: ''
    },
    menuid: {
      type: String,
      default: '',
      ref:"menu"
    },
    createdBy:{
      type: String,
      default: '',
      ref: "user",
    },
  },
  {
    timestamps: true,
    typecast: true,
  }
)

subMenuSchema.plugin(mongoosePaginate);
var subMenuModel = mongoose.model('subMenu', subMenuSchema);
module.exports = subMenuModel