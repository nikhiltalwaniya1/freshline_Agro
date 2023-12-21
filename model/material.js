const mongoose = require('mongoose');
const { Schema } = mongoose;
var mongoosePaginate = require('mongoose-paginate');

const materialSchema = new Schema(
  {
    materialname: {
      type: String,
      default: ''
    },
    materialid: {
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

materialSchema.plugin(mongoosePaginate);
var materialModel = mongoose.model('material', materialSchema);
module.exports = materialModel